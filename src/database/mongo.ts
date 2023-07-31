import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()
mongoose.set('strictQuery', false)

const MONGO_URL: string = process.env.MONGODB_URL!

try {
  mongoose.connect(MONGO_URL)
} catch (error) {
  console.error(error)
}

export default mongoose
