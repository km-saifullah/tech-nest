import apiResponse from 'quick-response'
import User from '../models/userModel.js'

// desc: email verification
const emailVerification = async (req, res) => {
  try {
    const { link } = req.params
    let confirmEmailMessage = ''

    const user = new User()

    const token = await user.verifyAccessToken(link)

    if (token) {
      const userFound = await User.findOne({ email: token.email })
      if (userFound) {
        userFound.emailVerified = new Date().toDateString()
        await userFound.save()
        confirmEmailMessage = 'Your email has been verified!'
        return res.render('index', { confirmEmailMessage })
      } else {
        confirmEmailMessage = 'User verification failed!'
        return res.render('index', { confirmEmailMessage })
      }
    } else {
      confirmEmailMessage = 'Invalid verification url'
      return res.render('index', { confirmEmailMessage })
    }
  } catch (error) {
    return res
      .status(500)
      .json(apiResponse(500, 'internal server error', { error: error.message }))
  }
}

const forgotPassword = async (req, res, next) => {
  try {
    // get user based on posted email
    const user = await User.findOne({ email: req.body.email })

    if (!user) {
      return res
        .status(404)
        .json(apiResponse(404, 'no user found with this email'))
    }

    // generate random reset token
    const resetToken = user.createPasswordResetToken()
    await user.save({ validateBeforeSave: false })

    // send it to user's email
  } catch (error) {}
}

// reset password
const resetPassword = async (req, res) => {
  try {
    return res.status(201).json(apiResponse(201, 'ok'))
  } catch (error) {
    return res
      .status(500)
      .json(apiResponse(500, 'internal server error', { error: error.message }))
  }
}

export { emailVerification, forgotPassword, resetPassword }
