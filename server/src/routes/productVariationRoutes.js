import { Router } from 'express'
import {
  createProductVariation,
  deleteVariation,
  getProductVariation,
  getProductVariations,
  updateProductVariation,
} from '../controllers/productVariationController.js'

const router = Router()

router.route('/').post(createProductVariation).get(getProductVariations)
router
  .route('/:id')
  .get(getProductVariation)
  .put(updateProductVariation)
  .delete(deleteVariation)

export default router
