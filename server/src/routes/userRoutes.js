import { Router } from 'express'
import { createUser, getUsers } from '../controllers/userController.js'

const router = Router()

router.route('/').get(getUsers).get(createUser)

export default router
