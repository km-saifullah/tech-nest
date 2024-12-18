import apiResponse from 'quick-response'
import ProductVariation from '../models/productVariationModel.js'
import Product from '../models/productModel.js'

// @desc:  create product variation
// @route: POST /api/v1/product-variations
const createProductVariation = async (req, res) => {
  try {
    const { variations, productId } = req.body

    const product = await Product.findById(productId)
    if (!product) {
      return res.status(404).json(apiResponse(404, 'product not found'))
    }

    if (!Array.isArray(variations) || variations.length === 0) {
      return res
        .status(400)
        .json(apiResponse(400, 'Variations must be a non-empty array'))
    }

    const productVariation = new ProductVariation({
      productId,
      variations,
    })
    await productVariation.save()

    return res
      .status(201)
      .json(apiResponse(201, 'variation created', productVariation))
  } catch (error) {
    return res
      .status(400)
      .json(apiResponse(400, 'server error', { error: error.message }))
  }
}

// @desc:  get all product variation
// @route: GET /api/v1/product-variations
const getProductVariations = async (req, res) => {
  try {
    const variations = await ProductVariation.find({})
    return res
      .status(200)
      .json(apiResponse(201, 'all product variations', variations))
  } catch (error) {
    return res
      .status(400)
      .json(apiResponse(400, 'server error', { error: error.message }))
  }
}

// @desc:  delete product variation by id
// @route: DELETE /api/v1/product-variations/:id
const deleteVariation = async (req, res) => {
  try {
    const { id } = req.params
    const variationFound = await ProductVariation.findById({ _id: id })
    if (!variationFound) {
      return res
        .status(404)
        .json(apiResponse(404, 'product variation not found'))
    }
    await ProductVariation.findByIdAndDelete(id)
    return res.status(200).json(apiResponse(200, 'product variation deleted'))
  } catch (error) {
    return res
      .status(400)
      .json(apiResponse(400, 'server error', { error: error.message }))
  }
}

export { createProductVariation, getProductVariations, deleteVariation }
