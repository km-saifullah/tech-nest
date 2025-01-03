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
import reviewRouter from './routes/reviewRoutes.js'
import cartRouter from './routes/cartRoute.js'
import cookieParser from 'cookie-parser'

// convert `import.meta.url` to __dirname
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

// allowed origins
const allowedOrigins = ['http://localhost:3000', 'http://localhost:5173']

// middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('./public'))
app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
)
app.use(cookieParser())

// home page:
app.get('/', (req, res) => {
  res.send('<h1>Tech Nest</h1>')
})

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

// review routes
app.use('/api/v1/reviews', reviewRouter)

// cart routes
app.use('/api/v1/carts/', cartRouter)

export default app
