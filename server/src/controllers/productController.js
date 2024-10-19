import apiResponse from 'quick-response'
import Product from '../models/productModel.js'

// @desc:  add product
// @route: POST /api/v1/products/add-product
const addProduct = async (req, res) => {
  try {
    return res.status(201).json(apiResponse(201, 'product created'))
  } catch (error) {
    return res
      .status(500)
      .json(apiResponse(500, 'internal server error', { error: error.message }))
  }
}

export { addProduct }
