import { Router } from 'express'
import { addCategory } from '../controllers/categoryController.js'
import { addCategooryValidation } from '../middlewares/categoryValidation.js'
import protectAuth, { adminAuth } from '../middlewares/protectAuth.js'

const router = Router()

router
  .route('/add-category')
  .post(addCategooryValidation, protectAuth, addCategory)

export default router
