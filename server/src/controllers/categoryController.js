import apiResponse from 'quick-response'
import Category from '../models/categoryModel.js'

// @desc:  create category
// @route: POST /api/v1/categories/addCategory
const addCategory = async (req, res) => {
  try {
    const { categoryName, slug } = req.body
    const categoryNameFound = await Category.findOne({ categoryName })
    if (categoryNameFound) {
      return res
        .status(400)
        .json(apiResponse(400, 'category name is not available'))
    }

    let newSlug = ''
    if (!slug) {
      newSlug = categoryName.replaceAll(' ', '-').toLowerCase()
    } else {
      newSlug = slug
    }

    const category = await Category.create({ categoryName, slug: newSlug })

    return res
      .status(201)
      .json(apiResponse(201, 'category created', { data: category }))
  } catch (error) {
    return res
      .status(500)
      .json(apiResponse(500, 'internal server error', { error: error.message }))
  }
}

// @desc:  get all categories
// @route: GET /api/v1/categories
const getAllCategories = async (req, res) => {
  try {
    const category = await Category.find({}).populate('subCategory')
    return res.status(200).json(
      apiResponse(200, 'all categories', {
        data: category,
        result: category.length,
      })
    )
  } catch (error) {
    return res
      .status(500)
      .json(apiResponse(500, 'internal server error', { error: error.message }))
  }
}

export { addCategory, getAllCategories }
