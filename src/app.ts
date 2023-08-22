import express, { type Express } from 'express'
import userRouter from './routes/userRoute'
import venueRouter from './routes/venueRoute'
import bodyParser from 'body-parser'

const app: Express = express()

// Middleware
app.use(bodyParser.json())

// Routes
app.use('/users', userRouter)
app.use('/venues', venueRouter)

export default app
