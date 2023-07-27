import app from './app'
import mongoose from './database/mongo'
import dotenv from 'dotenv'

dotenv.config()

const PORT: string = process.env.PORT!

export async function startServer(): Promise<void> {
  // Database connection
  await mongoose.connection.on('connected', () => {
    console.log(`⚡️[database]: Mongo is running!`)
  })

  // App server connection
  await app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`)
  })
}

startServer()
