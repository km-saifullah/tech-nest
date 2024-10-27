import { Router } from 'express'
import {
  createInventory,
  deleteInventoryById,
  getInventories,
  updateInventory,
} from '../controllers/inventoryController.js'

const router = Router()

router.route('/').post(createInventory).get(getInventories)
router.route('/:id').post(updateInventory).delete(deleteInventoryById)

export default router
