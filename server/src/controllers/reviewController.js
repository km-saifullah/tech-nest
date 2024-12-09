import apiResponse from 'quick-response'
import Review from '../models/reviewModel.js'

// @desc:  create a review
// @route: POST /api/v1/reviews
const createReview = async (req, res) => {
  try {
    const { rating, comment, product, user } = req.body

    const review = await Review.create({ rating, comment, product, user })

    return res.status(201).json(apiResponse(201, 'review posted', review))
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
      .populate({
        path: 'user',
        select:
          '-password -email -role -phoneNumber -emailVerified -updatedAt -__v -createdAt -publicId -refreshToken',
      })
      .populate({
        path: 'product',
        select:
          '-gallery -inventory -createdAt -updatedAt -category -subCategory',
      })
    return res.status(200).json(apiResponse(200, 'get all reviews', reviews))
  } catch (error) {
    return res
      .status(400)
      .json(apiResponse(400, 'server error', { error: error.message }))
  }
}
export { createReview, getReviews }
