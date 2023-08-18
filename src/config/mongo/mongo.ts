import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()
mongoose.set('strictQuery', false)

const MONGO_URL: string = process.env.MONGODB_URL!

// Database connection
export async function startDatabase(): Promise<void> {
  try {
    await mongoose.connect(MONGO_URL)

    await mongoose.connection.on('connected', (): void => {
      console.log('⚡️[database]: Mongo is running!')
    })
  } catch (error) {
    console.error(error)
  }
}

export default mongoose
