import { Router } from 'express'
import { createCart } from '../controllers/cartController.js'
import protectAuth from '../middlewares/protectAuth.js'
import cartValidation from '../middlewares/cartValidation.js'

const router = Router()

router.route('/').post(protectAuth, cartValidation, createCart)

export default router
