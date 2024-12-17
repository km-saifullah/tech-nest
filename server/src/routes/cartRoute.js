import { Router } from 'express'
import {
  createCart,
  deleteCart,
  getCarts,
} from '../controllers/cartController.js'
import protectAuth from '../middlewares/protectAuth.js'
import cartValidation from '../middlewares/cartValidation.js'

const router = Router()

router
  .route('/')
  .post(protectAuth, cartValidation, createCart)
  .get(protectAuth, getCarts)
router.route('/:id').delete(protectAuth, deleteCart)

export default router
