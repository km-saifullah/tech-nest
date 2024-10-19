import { Router } from 'express'
import {
  addCategory,
  getAllCategories,
} from '../controllers/categoryController.js'
import { addCategoryValidation } from '../middlewares/categoryValidation.js'
import protectAuth, { adminAuth } from '../middlewares/protectAuth.js'

const router = Router()

router
  .route('/add-category')
  .post(protectAuth, addCategoryValidation, addCategory)
router.route('/').get(getAllCategories)

export default router
