// @desc:  create category

import apiResponse from 'quick-response'

// @route: POST /api/v1/categories/addCategory
const addCategory = async (req, res) => {
  try {
    return res.status(201).json(apiResponse(201, 'category created', {}))
  } catch (error) {}
}

export { addCategory }
