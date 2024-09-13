import User from '../models/userModel.js'

// @desc get all users
// route GET /api/v1/users
const getUsers = (req, res) => {
  return res.json({ message: 'Hello from the server' })
}

// @desc create a user
// route POST /api/v1/users
const createUser = (req, res) => {
  return res.json({ message: 'Hello from the server' })
}

export { createUser, getUsers }
