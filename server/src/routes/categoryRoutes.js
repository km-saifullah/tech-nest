import { Router } from 'express'
import { addCategory } from '../controllers/categoryController.js'
import { addCategoryValidation } from '../middlewares/categoryValidation.js'
import protectAuth, { adminAuth } from '../middlewares/protectAuth.js'

const router = Router()

router
  .route('/add-category')
  .post(protectAuth, addCategoryValidation, addCategory)

export default router
