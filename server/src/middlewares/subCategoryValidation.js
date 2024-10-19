import apiResponse from 'quick-response'

// create sub-category validation
const addSubCategoryValidation = (req, res, next) => {
  try {
    const { subCategoryName, category } = req.body
    if (!subCategoryName) {
      return res
        .status(400)
        .json(apiResponse(400, 'sub-category name and category id is required'))
    }
  } catch (error) {
    return res
      .status(500)
      .json(apiResponse(500, 'internal server error', { error: error.message }))
  }
  next()
}

export { addSubCategoryValidation }
