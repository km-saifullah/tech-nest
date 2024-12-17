import apiResponse from 'quick-response'

const cartValidation = (req, res, next) => {
  const { user, product, inventory, quantity } = req.body
  if (!user) {
    return res.status(400).json(apiResponse(400, 'user id is required'))
  } else if (!product) {
    return res.status(400).json(apiResponse(400, 'product id is required'))
  } else if (!inventory) {
    return res.status(400).json(apiResponse(400, 'inventory id is required'))
  } else if (!quantity) {
    return res.status(400).json(apiResponse(400, 'quantity is required'))
  } else {
    next()
  }
  console.log('cart validation')
}

export default cartValidation
