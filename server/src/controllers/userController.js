import apiResponse from 'quick-response'
import User from '../models/userModel.js'
import sendVerificationEmail from '../utils/sendUserVerficationMail.js'
import verifyEmailTemplate from '../templates/verifyEmailTemplate.js'

// @desc get all users
// route GET /api/v1/users
const getUsers = (req, res) => {
  return res.json({ message: 'Hello from the server' })
}

// @desc create a user
// route POST /api/v1/users
const createUser = async (req, res) => {
  try {
    const { fullName, phoneNumber, email, password } = req.body

    // check user already registered or not
    const isUserFound = await User.findOne({ email })
    if (isUserFound) {
      return res
        .status(400)
        .json(apiResponse(400, 'email already exist', { isUserFound }))
    }

    const user = await User.create({
      fullName,
      phoneNumber,
      email,
      password,
    })
    await sendVerificationEmail(user.email, verifyEmailTemplate())

    return res.status(201).json(apiResponse(201, 'user created', { user }))
  } catch (err) {
    return res
      .status(500)
      .json(apiResponse(500, 'internal server error', { err }))
  }
}

export { createUser, getUsers }
