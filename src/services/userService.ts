import { type User } from '@prisma/client'
import { AllIncludeVenue } from '../queries/queries'
import prisma from '../config/prisma/prisma-client'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library'

export async function getAllUsers(): Promise<User[] | {}> {
  const users = prisma.user.findMany(AllIncludeVenue)
  if (users) {
    return users
  } else {
    return { code: 404, message: 'Cannot find any users in the system.' }
  }
}

export async function getUserById(userId: string): Promise<User | {}> {
  try {
    return await prisma.user.findUniqueOrThrow({
      where: {
        id: userId,
      },
      ...AllIncludeVenue,
    })
  } catch (err) {
    if (err instanceof PrismaClientKnownRequestError) {
      return { realErrorMessage: err, code: 404, message: 'Cannot find user with id: ' + userId }
    } else {
      return { realErrorMessage: err, code: 500, message: 'Something has gone wrong...' }
    }
  }
}
