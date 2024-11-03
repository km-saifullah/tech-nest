import { Router } from 'express'
import protectAuth, { adminAuth } from '../middlewares/protectAuth.js'
import {
  addProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  updateProduct,
} from '../controllers/productController.js'
import createProductValidation from '../middlewares/createProductValidation.js'
import { upload } from '../middlewares/uploadImage.middleware.js'

const router = Router()

router.route('/').post(
  protectAuth,
  createProductValidation,
  upload.fields([
    { name: 'thumbnail', maxCount: 1 },
    { name: 'gallery', maxCount: 4 },
  ]),
  addProduct
)

router.route('/').get(getAllProducts)
router
  .route('/:id')
  .get(getProductById)
  .post(updateProduct)
  .delete(deleteProduct)

export default router
