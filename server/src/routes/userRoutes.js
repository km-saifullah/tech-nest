import { Router } from 'express'
import { createUser, getUsers } from '../controllers/userController.js'
import { createUserVaidation } from '../middlewares/createUserValidation.js'
import {
  emailVerification,
  forgotPassword,
  resetPassword,
} from '../controllers/authController.js'

const router = Router()

router.route('/').get(getUsers).post(createUserVaidation, createUser)
router.route('/:link').get(emailVerification)

router.route('/forgot-password').post(forgotPassword)
router.route('/reset-password/:token').patch(resetPassword)

export default router
