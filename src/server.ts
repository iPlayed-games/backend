import app from './app'
// import { startDatabase } from './database/mongo'
import dotenv from 'dotenv'

dotenv.config()

const PORT: string = process.env.PORT!

// App server connection
export async function startServer(): Promise<void> {
  
  //To connect direct to mongoDB
  // await startDatabase()
  
  await app.listen(PORT, (): void => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`)
  })
}

startServer()
