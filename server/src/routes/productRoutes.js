import { Router } from 'express'
import protectAuth, { adminAuth } from '../middlewares/protectAuth.js'
import { addProduct } from '../controllers/productController.js'

const router = Router()

router.route('/add-product').post(protectAuth, addProduct)

export default router
