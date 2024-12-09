import { Router } from 'express'
import {
  createReview,
  deleteReview,
  getReviews,
} from '../controllers/reviewController.js'

const router = Router()

router.route('/').post(createReview).get(getReviews)
router.route('/:id').delete(deleteReview)

export default router
