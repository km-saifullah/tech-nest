import { Router } from 'express'
import { createUser, getUsers } from '../controllers/userController.js'
import { createUserVaidation } from '../middlewares/createUserValidation.js'
import {
  emailVerification,
  resetPassword,
} from '../controllers/authController.js'

const router = Router()

router.route('/').get(getUsers).post(createUserVaidation, createUser)
router.route('/:link').get(emailVerification)
router.route('/reset-password').post(resetPassword)

export default router
