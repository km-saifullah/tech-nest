import { Router } from 'express'
import { createProductVariation } from '../controllers/productVariationController.js'

const router = Router()

router.route('/create').post(createProductVariation)

export default router
