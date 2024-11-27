import { Router } from 'express'
import { createReview } from '../controllers/reviewController.js'

const router = Router()

router.route('/').post(createReview)

export default router
