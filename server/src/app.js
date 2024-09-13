import express from 'express'
import cors from 'cors'
import userRouter from './routes/userRoutes.js'

const app = express()

// middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

// all routes
app.use('/api/v1/users/', userRouter)

export default app
