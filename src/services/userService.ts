import { PrismaClient, User } from '@prisma/client'
import { AllIncludeActivity } from '../queries/user'

const prisma = new PrismaClient()

export async function getAllUsers(): Promise<Array<User>> {
  return await prisma.user.findMany(AllIncludeActivity)
}
