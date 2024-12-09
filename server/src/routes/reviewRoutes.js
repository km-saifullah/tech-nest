import { Router } from 'express'
import { createReview, getReviews } from '../controllers/reviewController.js'

const router = Router()

router.route('/').post(createReview).get(getReviews)

export default router
