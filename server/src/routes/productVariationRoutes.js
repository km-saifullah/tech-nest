import { Router } from 'express'
import { createProductVariation } from '../controllers/productVariationController.js'

const router = Router()

router.route('/').post(createProductVariation)

export default router
