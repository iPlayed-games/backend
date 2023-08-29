import app from './app'
// Import { startDatabase } from './config/mongo/mongo'
import dotenv from 'dotenv'
import { startORM } from '@config/prisma/prisma-client'

dotenv.config()

const PORT: string = process.env.SERVER_PORT!

// App server connection
export async function startServer(): Promise<void> {
  // To connect direct to mongoDB
  // await startDatabase()

  // To connect to PrismaORM
  startORM()

  await app.listen(PORT, (): void => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`)
  })
}

startServer()
