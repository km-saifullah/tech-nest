import apiResponse from 'quick-response'

// create category validation
const addCategoryValidation = (req, res, next) => {
  try {
    const { categoryName } = req.body
    if (!categoryName) {
      return res.status(400).json(apiResponse(400, 'categoryName is required'))
    }
  } catch (error) {
    return res
      .status(500)
      .json(apiResponse(500, 'internal server error', { error: error.message }))
  }
  next()
}

export { addCategoryValidation }
