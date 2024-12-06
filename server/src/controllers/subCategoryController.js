import apiResponse from 'quick-response'
import SubCategory from '../models/subCategoryModel.js'
import Category from '../models/categoryModel.js'

// @desc:  create subCategory
// @route: POST /api/v1/sub-categories/add-sub-category
const addSubCategory = async (req, res) => {
  try {
    const { subCategoryName, slug, category } = req.body
    const subCategoryNameFound = await SubCategory.findOne({ subCategoryName })
    if (subCategoryNameFound) {
      return res
        .status(400)
        .json(apiResponse(400, 'sub-category name is not available'))
    }

    let newSlug = ''
    if (!slug) {
      newSlug = subCategoryName.replaceAll(' ', '-').toLowerCase()
    } else {
      newSlug = slug
    }

    const subCategory = await SubCategory.create({
      subCategoryName,
      slug: newSlug,
      category,
    })

    await Category.updateOne(
      { _id: category },
      { $push: { subCategory: subCategory._id } }
    )

    return res
      .status(201)
      .json(apiResponse(201, 'sub-category created', { data: subCategory }))
  } catch (error) {
    return res
      .status(500)
      .json(apiResponse(500, 'internal server error', { error: error.message }))
  }
}

// @desc:  get all subCategory
// @route: GET /api/v1/sub-categories
const getAllSubCategories = async (req, res) => {
  try {
    const subCategory = await SubCategory.find({}).populate('category')
    return res.status(200).json(
      apiResponse(200, 'all sub categories', {
        data: subCategory,
        result: subCategory.length,
      })
    )
  } catch (error) {
    return res
      .status(500)
      .json(apiResponse(500, 'internal server error', { error: error.message }))
  }
}

// @desc:  get a sub-category
// @route: GET /api/v1/sub-categories/:id
const getSubCategory = async (req, res) => {
  try {
    const { id } = req.params
    const subCategory = await SubCategory.findById({ _id: id }).populate(
      'category'
    )
    return res
      .status(200)
      .json(
        apiResponse(
          200,
          'single sub category by id fetched successfully',
          subCategory
        )
      )
  } catch (error) {
    return res
      .status(400)
      .json(apiResponse(400, 'server error', { error: error.message }))
  }
}

// @desc:  delete a sub-category by id
// @route: DELETE /api/v1/sub-categories/:id
const deleteSubCategory = async (req, res) => {
  try {
    const { id } = req.params
    const subCategory = await SubCategory.findById({ _id: id })
    if (!subCategory) {
      return res.status(404).json(apiResponse(404, 'sub-category not found'))
    }

    await SubCategory.findByIdAndDelete({ _id: id })
    return res.status(200).json(apiResponse(200, 'Sub-category deleted'))
  } catch (error) {
    return res
      .status(400)
      .json(apiResponse(400, 'server error', { error: error.message }))
  }
}

export {
  addSubCategory,
  getAllSubCategories,
  getSubCategory,
  deleteSubCategory,
}
