import apiResponse from 'quick-response'

const createProductValidation = async (req, res, next) => {
  try {
    const { title, slug, category, subCategory, thumbnail } = req.body

    if ([title, category, subCategory].some((field) => field === '')) {
      return res.status(400).json(apiResponse(400, 'all fields are required'))
    }

    // if (!thumbnail) {
    //   return res.status(400).json(apiResponse(400, 'thumbnail is required'))
    // }
  } catch (error) {
    return res
      .status(500)
      .json(apiResponse(500, 'internal server error', { error: error.message }))
  }
  next()
}

export default createProductValidation
