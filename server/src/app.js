import path from 'path'
import { fileURLToPath } from 'url'
import express from 'express'
import cors from 'cors'
import userRouter from './routes/userRoutes.js'
import categoryRouter from './routes/categoryRoutes.js'
import subCategoryRouter from './routes/subCategoryRoutes.js'
import productRouter from './routes/productRoutes.js'
import productVariationRouter from './routes/productVariationRoutes.js'
import inventoryRouter from './routes/inventoryRoutes.js'
import cookieParser from 'cookie-parser'

// convert `import.meta.url` to __dirname
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

// middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('./public'))
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
)
app.use(cookieParser())

// ejs setup
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// user routes
app.use('/api/v1/users/', userRouter)

// category routes
app.use('/api/v1/categories/', categoryRouter)

// sub-category routes
app.use('/api/v1/sub-categories/', subCategoryRouter)

// product routes
app.use('/api/v1/products/', productRouter)

// product variation routes
app.use('/api/v1/product-variations/', productVariationRouter)

// inventory routes
app.use('/api/v1/inventories/', inventoryRouter)

export default app
