import { type User } from '@prisma/client'
import { AllIncludeVenue } from '@queries/queries'
import prisma from '@config/prisma/prisma-client'

export async function getAllUsers(): Promise<User[]> {
  return prisma.user.findMany(AllIncludeVenue)
}
