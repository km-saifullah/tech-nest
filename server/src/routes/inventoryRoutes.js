import { Router } from 'express'
import { createInventory } from '../controllers/inventoryController.js'

const router = Router()

router.route('/create').post(createInventory)

export default router
