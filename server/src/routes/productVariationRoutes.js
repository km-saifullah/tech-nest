import { Router } from 'express'
import {
  createProductVariation,
  deleteVariation,
  getProductVariations,
} from '../controllers/productVariationController.js'

const router = Router()

router.route('/').post(createProductVariation).get(getProductVariations)
router.route('/:id').delete(deleteVariation)

export default router
