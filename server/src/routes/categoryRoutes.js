import { Router } from 'express'
import {
  addCategory,
  getAllCategories,
  getCategory,
  updateCategory,
} from '../controllers/categoryController.js'
import { addCategoryValidation } from '../middlewares/categoryValidation.js'
import protectAuth, { adminAuth } from '../middlewares/protectAuth.js'

const router = Router()

router
  .route('/add-category')
  .post(protectAuth, addCategoryValidation, addCategory)
router.route('/').get(getAllCategories)
router.route('/:id').get(getCategory).put(updateCategory)

export default router
