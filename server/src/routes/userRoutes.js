import { Router } from 'express'
import { createUser, getUsers } from '../controllers/userController.js'
import { createUserVaidation } from '../middlewares/createUserValidation.js'

const router = Router()

router.route('/').get(getUsers).post(createUserVaidation, createUser)

export default router
