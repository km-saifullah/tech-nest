import apiResponse from 'quick-response'
import Inventory from '../models/inventoryModel.js'
import Product from '../models/productModel.js'

// @desc  create inventory
// @route POST /api/v1/inventories
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

    // create inventory
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
      .status(201)
      .json(apiResponse(201, 'inventory created', { inventory }))
  } catch (error) {
    return res
      .status(400)
      .json(apiResponse(400, 'server error', { error: error.message }))
  }
}

// @desc  update inventory
// @route POST /api/v1/inventories/:id
const updateInventory = async (req, res) => {
  try {
    const { id } = req.params
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

    // check inventory is exist or not
    const inventoryFound = await Inventory.findById({ _id: id })
    if (!inventoryFound) {
      return res
        .status(404)
        .json(apiResponse(404, 'inventory with this id is not exist'))
    }

    // update inventory
    const updateInventoryData = {
      product: product || req.body.product,
      productVariation: productVariation || req.body.productVariation,
      purchasePrice: purchasePrice || req.body.purchasePrice,
      sellingPrice: sellingPrice || req.body.sellingPrice,
      discountPrice: discountPrice || req.body.discountPrice,
      quantity: quantity || req.body.quantity,
    }
    const updatedInventory = await Inventory.findByIdAndUpdate(
      { _id: id },
      { $set: updateInventoryData },
      { new: true }
    )

    if (product != inventoryFound.product) {
      await Product.findByIdAndUpdate(
        { _id: product },
        { $push: { inventory: updatedInventory._id } }
      )
    }

    return res
      .status(200)
      .json(
        apiResponse(200, 'inventory updated successfully', { updatedInventory })
      )
  } catch (error) {
    return res
      .status(400)
      .json(apiResponse(400, 'server error', { error: error.message }))
  }
}

// @desc  get all inventories
// @route GET /api/v1/inventories
const getInventories = async (req, res) => {
  try {
    const inventories = await Inventory.find({})
      .populate('productVariation')
      .populate('product')
    return res.status(200).json(
      apiResponse(200, 'all inventories fetched successfully', {
        inventories,
        results: inventories.length,
      })
    )
  } catch (error) {
    return res
      .status(400)
      .json(apiResponse(400, 'server error', { error: error.message }))
  }
}

// @desc  delete inventory by id
// @route POST /api/v1/inventories/:id
const deleteInventoryById = async (req, res) => {
  try {
    const { id } = req.params
    const inventory = await Inventory.findByIdAndDelete({ _id: id })
    if (!inventory) {
      return res.status(404).json(apiResponse(404, 'inventory does not found'))
    }

    // delete this inventory form product model
    await Product.findByIdAndUpdate(
      { _id: inventory.product },
      { $pull: { inventory: inventory._id } }
    )

    return res
      .status(200)
      .json(apiResponse(200, 'inventory deleted successfully'))
  } catch (error) {
    return res
      .status(400)
      .json(apiResponse(400, 'server error', { error: error.message }))
  }
}

export { createInventory, updateInventory, getInventories, deleteInventoryById }
