import apiResponse from 'quick-response'
import Inventory from '../models/inventoryModel.js'
import Product from '../models/productModel.js'

// @desc  create inventory
// @route POST /api/v1/inventories/create
const createInventory = async (req, res) => {
  try {
    const {
      product,
      productVariation,
      purchasePrice,
      sellingPrice,
      discountPrice,
      quantity,
    } = req.body

    if (
      [product, productVariation, purchasePrice, sellingPrice, quantity].some(
        (field) => field === ''
      )
    ) {
      return res.status(400).json(apiResponse(400, 'all fields are required'))
    }

    const inventory = await Inventory.create({
      product,
      productVariation,
      purchasePrice,
      sellingPrice,
      discountPrice,
      quantity,
    })

    await Product.findByIdAndUpdate(
      { _id: product },
      { $push: { inventory: inventory._id } }
    )

    return res
      .status(200)
      .json(apiResponse(200, 'inventory created', { inventory }))
  } catch (error) {
    return res
      .status(400)
      .json(apiResponse(400, 'server error', { error: error.message }))
  }
}

// @desc  update inventory
// @route POST /api/v1/inventories/create
const updateInventory = async (req, res) => {
  try {
  } catch (error) {}
}

export { createInventory }
