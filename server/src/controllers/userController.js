import apiResponse from 'quick-response'
import User from '../models/userModel.js'
import sendVerificationEmail from '../utils/sendUserVerficationMail.js'
import verifyEmailTemplate from '../templates/verifyEmailTemplate.js'
import { cloudinaryUpload } from '../services/cloudinary.js'

// @desc get all users
// route GET /api/v1/users
const getUsers = async (req, res) => {
  try {
    const users = await User.find({})
    return res.status(200).json(apiResponse(200, 'fetched all suers', users))
  } catch (error) {
    return res.json(apiResponse(400, 'get user unsuccessful'))
  }
}

// @desc create a user
// route POST /api/v1/users
const createUser = async (req, res) => {
  try {
    const { fullName, phoneNumber, email, password, role } = req.body

    let userRole = role ? role : 'user'

    // check user already registered or not
    const isUserFound = await User.findOne({ email: email })
    if (isUserFound) {
      return res.status(400).json(apiResponse(400, 'email already exist'))
    }

    const user = await User.create({
      fullName,
      phoneNumber,
      email,
      password,
      role: userRole,
    })

    let link = await user.generateAccessToken()

    await sendVerificationEmail(user.email, verifyEmailTemplate(link))

    return res.status(201).json(apiResponse(201, 'user created', { user }))
  } catch (err) {
    return res
      .status(500)
      .json(apiResponse(500, 'internal server error', { err }))
  }
}

// @desc create a user
// route POST /api/v1/users
const updateUser = async (req, res) => {
  try {
    // check file uploaded or not
    if (req.file) {
      const { path } = req.file
      const user = await User.findById(req.user._id)

      if (user) {
        const cloudinaryImage = await cloudinaryUpload(
          path,
          user.fullName,
          'profileImage'
        )
        // cloudinaryImage.optimizeUrl || cloudinaryImage.uploadResult || cloudinaryImage.uploadResult.public_id
        // user.profileImage = cloudinaryImage.optimizeUrl
        // user.publicId = cloudinaryImage.uploadResult.public_id
        user.profileImage =
          cloudinaryImage.optimizeUrl || cloudinaryImage.uploadResult.secure_url
        user.publicId = cloudinaryImage.uploadResult.public_id
        await user.save()

        return res
          .status(200)
          .json(apiResponse(200, 'profile image upload successfully', user))
      }
    }
  } catch (error) {
    return res
      .status(500)
      .json(apiResponse(500, 'internal server error', { error: error.message }))
  }
}

// @desc:  get a user by Id
// @route: GET /api/v1/users/:id
const getUser = async (req, res) => {
  try {
    const { id } = req.params

    const user = await User.findById({ _id: id }).select(
      '-password -refreshToken'
    )
    if (!user) {
      return res.status(404).json(apiResponse(404, 'user not found by this id'))
    }

    return res
      .status(200)
      .json(apiResponse(200, 'fetch user successfully', user))
  } catch (error) {
    return res
      .status(400)
      .json(apiResponse(400, 'server error', { error: error.message }))
  }
}

export { createUser, getUsers, updateUser, getUser }
