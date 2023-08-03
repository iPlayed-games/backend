import express, { type Express } from 'express'
import userRouter from './routes/userRoute'
import bodyParser from 'body-parser'

const app: Express = express()

// Middleware
app.use(bodyParser.json())

// Routes
app.use('/users', userRouter)

export default app
