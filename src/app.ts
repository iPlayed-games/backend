import express, { type Express } from 'express'
import userRouter from './routes/userRoute'
import venueRouter from './routes/venueRoute'
import bodyParser from 'body-parser'
import { swaggerServer, swaggerDocumented } from './config/swagger/swagger-ui'

const app: Express = express()

// Middleware
app.use(bodyParser.json())

// Routes
app.use('/users', userRouter)
app.use('/venues', venueRouter)
app.use('/api-docs', swaggerServer, swaggerDocumented)

export default app
