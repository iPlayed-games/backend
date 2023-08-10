import { PrismaClient, type User } from '@prisma/client'
import { AllIncludeVenue } from '../queries/user'

const prisma = new PrismaClient()

export async function getAllUsers(): Promise<User[]> {
  return prisma.user.findMany(AllIncludeVenue)
}
