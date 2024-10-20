import { Router } from 'express'
import protectAuth, { adminAuth } from '../middlewares/protectAuth.js'
import { addProduct } from '../controllers/productController.js'
import createProductValidation from '../middlewares/createProductValidation.js'
import { upload } from '../middlewares/uploadImage.middleware.js'

const router = Router()

router.route('/add-product').post(
  protectAuth,
  createProductValidation,
  upload.fields([
    { name: 'thumbnail', maxCount: 1 },
    { name: 'gallery', maxCount: 4 },
  ]),
  addProduct
)

export default router
