import crypto from 'crypto'
import apiResponse from 'quick-response'
import User from '../models/userModel.js'
import sendEmail from '../utils/sendEmail.js'

// generate JWT token
const generateTokens = async (id) => {
  try {
    const user = await User.findById({ _id: id })
    const accessToken = await user.generateAccessToken()
    const refreshToken = await user.generateRefreshToken()
    user.refreshToken = refreshToken
    await user.save()
    return { accessToken, refreshToken }
  } catch (error) {
    console.log(error)
  }
}

// @desc:  login user
// @route: POST api/v1/login
const loginUser = async (req, res) => {
  const { email, password } = req.body
  try {
    // check user exist or not
    const userFound = await User.findOne({ email })
    if (!userFound) {
      return res.status(404).json(apiResponse(404, 'user not found'))
    }

    // check password is right or wrong
    const isPasswordCorrect = await userFound.correctPassword(password)
    if (!isPasswordCorrect) {
      return res.status(404).json(apiResponse(404, 'wrong email and password'))
    }

    // check user is verified or not
    if (!userFound.emailVerified) {
      return res
        .status(400)
        .json(
          apiResponse(400, 'email not verified, please check your email inbox')
        )
    }

    // generate access and refresh token
    const { accessToken, refreshToken } = await generateTokens(userFound._id)
    const loginToken = { accessToken, refreshToken }
    res.cookie('refreshToken', loginToken.refreshToken, {
      httpOnly: true,
      secure: true,
    })
    res.cookie('accessToken', loginToken.accessToken, {
      httpOnly: true,
      secure: true,
    })
    return res.status(200).json(
      apiResponse(200, 'login succcessful', {
        user: userFound,
        token: {
          refreshToken: refreshToken,
          accessToken: accessToken,
        },
      })
    )
  } catch (error) {
    return res
      .status(500)
      .json(apiResponse(500, 'internal server error', { error: error.message }))
  }
}

// @desc:  logout user
// @route: POST api/v1/logout
const logoutUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.id)
    user.refreshToken = undefined
    await user.save()
    return res.status(200).json(apiResponse(200, 'user logout successful'))
  } catch (error) {
    return res
      .status(500)
      .json(apiResponse(500, 'internal server error', { error: error.message }))
  }
}

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

// @desc:  resend verification link
// @route: POST /api/v1/
const resendVerifyEmail = async (req, res) => {
  try {
    const { email } = req.body
    const user = await User.findOne({ email })


  } catch (error) {
    return res
      .status(400)
      .json(apiResponse(400, 'server error', { error: error.message }))
  }
}

// forgot password
const forgotPassword = async (req, res, next) => {
  // get user based on posted email
  const user = await User.findOne({ email: req.body.email })
  try {
    if (!user) {
      return res
        .status(404)
        .json(apiResponse(404, 'no user found with this email'))
    }

    // generate random reset token
    const resetToken = user.createPasswordResetToken()
    await user.save({ validateBeforeSave: false })

    // send it to user's email
    const resetURL = `${req.protocol}://${req.get(
      'host'
    )}/api/v1/users/reset-password/${resetToken}`

    const message = `Forgot your password? click to the link to update your password:${resetURL}.\nIf you didn't forget your password, please ignore this email`

    await sendEmail({
      email: user.email,
      html: message,
    })

    return res
      .status(200)
      .json(apiResponse(200, 'Reset password link send to the email address'))
  } catch (error) {
    user.passwordResetToken = undefined
    user.passwordResetExpires = undefined
    await user.save({ validateBeforeSave: false })
    return res
      .status(500)
      .json(
        apiResponse(
          500,
          'There was an  error sending the email. Try again later'
        )
      )
  }
}

// reset password
const resetPassword = async (req, res) => {
  try {
    // get user based on token
    const hashedToken = crypto
      .createHash('sha256')
      .update(req.params.token)
      .digest('hex')

    const user = await User.findOne({
      passwordResetToken: hashedToken,
      passwordResetExpires: { $gt: Date.now() },
    })

    //  If token has not expired and there is an user, set new password
    if (!user) {
      return res
        .status(400)
        .json(apiResponse(400, 'Token is invalid or has expired'))
    }
    user.password = req.body.password
    user.passwordResetToken = undefined
    user.passwordResetExpires = undefined

    await user.save()

    // login user and send JWT token
    const token = await user.generateAccessToken()
    return res
      .status(201)
      .json(apiResponse(201, 'password reset done', { token: token }))
  } catch (error) {
    return res
      .status(500)
      .json(apiResponse(500, 'internal server error', { error: error.message }))
  }
}

// update password
const updatePassword = async (req, res) => {
  try {
    // get user form the collection
    // const user = await User.findById(req.user.id).select('+password')
    const user = await User.findById(req.user.id)

    // check if posted current password is correct

    // if so, update password

    // log user in, send JWT
  } catch (error) {}
}

export {
  loginUser,
  logoutUser,
  emailVerification,
  forgotPassword,
  resetPassword,
  resendVerifyEmail,
}
