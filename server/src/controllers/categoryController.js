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

// @desc:  update category
// @route: PUT /api/v1/categories/:id
const updateCategory = async (req, res) => {
  try {
    const { id } = req.params
    const { categoryName, slug } = req.body

    const category = await Category.findById(id)
    if (!category) {
      return res.status(404).json(apiResponse(404, 'category not found'))
    }

    // check if the new category name is already in use by another category
    if (categoryName && categoryName !== category.categoryName) {
      const categoryNameFound = await Category.findOne({ categoryName })
      if (categoryNameFound) {
        return res
          .status(400)
          .json(apiResponse(400, 'category name is not available'))
      }
    }

    // generate or update slug
    let newSlug = slug
    if (!slug && categoryName) {
      newSlug = categoryName.replaceAll(' ', '-').toLowerCase()
    }

    // update category fields
    category.categoryName = categoryName || category.categoryName
    category.slug = newSlug || category.slug

    // save the updated category
    const updatedCategory = await category.save()

    return res
      .status(200)
      .json(apiResponse(200, 'Category updated successfully', updatedCategory))
  } catch (error) {
    return res
      .status(500)
      .json(apiResponse(500, 'Internal server error', { error: error.message }))
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

// @desc:  get a category by id
// @route: GET /api/v1/categories/:id
const getCategory = async (req, res) => {
  try {
    const { id } = req.params
    const category = await Category.findById({ _id: id }).populate(
      'subCategory'
    )
    return res.status(200).json(
      apiResponse(200, 'single category', {
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

// @desc:  delete a category by id
// @route: DELETE /api/v1/categories/:id
const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params

    // Check if the category exists
    const category = await Category.findById(id)
    if (!category) {
      return res.status(404).json(apiResponse(404, 'category not found'))
    }

    // delete the category
    await Category.findByIdAndDelete({ _id: id })

    return res
      .status(200)
      .json(apiResponse(200, 'Category deleted successfully'))
  } catch (error) {
    return res
      .status(500)
      .json(apiResponse(500, 'Internal server error', { error: error.message }))
  }
}

export {
  addCategory,
  getCategory,
  getAllCategories,
  updateCategory,
  deleteCategory,
}
