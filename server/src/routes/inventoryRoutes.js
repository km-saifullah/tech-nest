import { Router } from 'express'
import {
  createInventory,
  getInventories,
  updateInventory,
} from '../controllers/inventoryController.js'

const router = Router()

router.route('/').post(createInventory).get(getInventories)
router.route('/:id').post(updateInventory)

export default router
