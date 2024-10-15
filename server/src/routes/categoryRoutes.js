import { Router } from 'express'
import { addCategory } from '../controllers/categoryController.js'

const router = Router()

router.route('/addCategory').post(addCategory)

export default router
