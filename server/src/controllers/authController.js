import apiResponse from 'quick-response'
import User from '../models/userModel.js'

const emailVerification = async (req, res) => {
  try {
    const { link } = req.params

    const user = new User()

    const token = await user.verifyAccessToken(link)

    if (token) {
      const userFound = await User.findOne({ email: token.email })
      if (userFound) {
        userFound.emailVerified = Date.now()
        await userFound.save()
        return res.send('user verified')
      } else {
        return res.send('user verification failed')
      }
    } else {
      return res.send('invalid verification url')
    }
  } catch (error) {
    return res
      .status(500)
      .json(apiResponse(500, 'internal server error', { error: error.message }))
  }
}

export { emailVerification }
