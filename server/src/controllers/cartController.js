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

export { createCart }
