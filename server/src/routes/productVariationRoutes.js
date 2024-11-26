import { Router } from 'express'
import {
  createProductVariation,
  getProductVariations,
} from '../controllers/productVariationController.js'

const router = Router()

router.route('/').post(createProductVariation).get(getProductVariations)

export default router
