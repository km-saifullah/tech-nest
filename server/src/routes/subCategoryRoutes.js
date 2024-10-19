import { Router } from 'express'
import protectAuth, { adminAuth } from '../middlewares/protectAuth.js'
import {
  addSubCategory,
  getAllSubCategories,
} from '../controllers/subCategoryController.js'
import { addSubCategoryValidation } from '../middlewares/subCategoryValidation.js'

const router = Router()

router
  .route('/add-sub-category')
  .post(protectAuth, addSubCategoryValidation, addSubCategory)
router.route('/').get( getAllSubCategories)

export default router
