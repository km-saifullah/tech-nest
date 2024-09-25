import apiResponse from 'quick-response'
import User from '../models/userModel.js'

const emailVerification = async (req, res) => {
  try {
    const { link } = req.params
    let confirmEmailMessage = ''

    const user = new User()

    const token = await user.verifyAccessToken(link)

    if (token) {
      const userFound = await User.findOne({ email: token.email })
      if (userFound) {
        userFound.emailVerified = Date.now()
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

export { emailVerification }
