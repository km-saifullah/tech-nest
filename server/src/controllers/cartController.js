import apiResponse from 'quick-response'
import Cart from '../models/cartModel.js'

// @desc:  create cart
// @route: POST /api/v1/carts
const createCart = async (req, res) => {
  try {
    const { user, product, inventory, quantity } = req.body
    const newCart = { user, product, inventory, quantity }

    const isCart = await Cart.findOne({ user, inventory })
    if (isCart) {
      const cart = await Cart.findOneAndUpdate(
        { _id: isCart._id },
        { $inc: { quantity: quantity } },
        { new: true }
      )
      return res.status(201).json(apiResponse(201, 'cart updated', cart))
    } else {
      const cart = await Cart.create(newCart)
      return res.status(201).json(apiResponse(201, 'cart created', cart))
    }
  } catch (error) {
    return res
      .status(400)
      .json(apiResponse(400, 'server error', { error: error.message }))
  }
}

// @desc:  get all carts
// @route: GET /api/v1/carts
const getCarts = async (req, res) => {
  try {
    const { id } = req.params
    const cartsFound = await Cart.find({})
      .populate('user')
      .populate('product')
      .populate('inventory')

    const carts = { cart: cartsFound, total: cartsFound.length }
    return res.status(200).json(apiResponse(200, 'all carts', carts))
  } catch (error) {
    return res
      .status(400)
      .json(apiResponse(400, 'server error', { error: error.message }))
  }
}

// @desc:  delete cart
// @route: DELETE /api/v1/:id
const deleteCart = async (req, res) => {
  try {
    const { id } = req.params
    const cartFound = await Cart.findById({ _id: id })
    if (!cartFound) {
      return res.status(404).json(apiResponse(404, 'cart not found'))
    }
    await Cart.findByIdAndDelete(id)
    return res.status(200).json(apiResponse(200, 'cart deleted'))
  } catch (error) {
    return res
      .status(400)
      .json(apiResponse(400, 'server error', { error: error.message }))
  }
}

export { createCart, deleteCart, getCarts }
