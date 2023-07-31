import express, { Express, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const app: Express = express();

app.get('/users', async (_req: Request, res: Response): Promise<void> => {
  // TODO: to be analyzed.
  const allUsers = await prisma.user.findMany({
    include: {
      activity: true,
    },
  })
  res.send(allUsers);
});

export default app
