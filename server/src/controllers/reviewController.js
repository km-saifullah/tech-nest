import apiResponse from 'quick-response'
import Review from '../models/reviewModel.js'

// @desc:  create a review
// @route: POST /api/v1/reviews
const createReview = async (req, res) => {
  try {
    const { rating, comment, product, user } = req.body

    console.log('hello review')
  } catch (error) {
    return res
      .status(400)
      .json(apiResponse(400, 'server error', { error: error.message }))
  }
}

// @desc:  get all review
// @route: GET /api/v1/reviews
const getReviews = async (req, res) => {
  try {
    const reviews = await Review.find({})
    return res.status(200).json(apiResponse(200, 'get all reviews', reviews))
  } catch (error) {
    return res
      .status(400)
      .json(apiResponse(400, 'server error', { error: error.message }))
  }
}
export { createReview, getReviews }
