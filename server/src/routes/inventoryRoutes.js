import { Router } from 'express'
import {
  createInventory,
  updateInventory,
} from '../controllers/inventoryController.js'

const router = Router()

router.route('/').post(createInventory)
router.route('/:id').post(updateInventory)

export default router
