// @desc:  create a review
// @route: POST /api/v1/reviews
const createReview = async (req, res) => {
  try {
    console.log('hello review')
  } catch (error) {
    return res
      .status(400)
      .json(apiResponse(400, 'server error', { error: error.message }))
  }
}

export { createReview }
