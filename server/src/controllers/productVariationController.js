import apiResponse from 'quick-response'
import ProductVariation from '../models/productVariationModel.js'

// @desc:  create product variation
// @route: POST /api/v1/product-variations/create
const createProductVariation = async (req, res) => {
  try {
    const { variationName } = req.body
    if (!variationName) {
      return res
        .status(400)
        .json(apiResponse(400, 'variation name is required'))
    }

    const variationExist = await ProductVariation.findOne({ variationName })
    if (variationExist) {
      return res.status(400).json(apiResponse(400, 'variation already exist'))
    }

    const productVariation = await ProductVariation.create({ variationName })
    return res
      .status(201)
      .json(apiResponse(201, 'product veriation created', { productVariation }))
  } catch (error) {
    return res
      .status(400)
      .json(apiResponse(400, 'server error', { error: error.message }))
  }
}

export { createProductVariation }