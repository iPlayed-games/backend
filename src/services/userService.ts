import { type CustomResponse } from 'typing/customResponse'
import { AllIncludeVenue } from '../queries/queries'
import prisma from '../config/prisma/prisma-client'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library'

export async function getAllUsers(): Promise<CustomResponse> {
  const users = await prisma.user.findMany(AllIncludeVenue)
  let resp: CustomResponse = { code: 200, message: '', realErrorMessage: {}, responseObject: [] }
  if (users) {
    resp.message = 'Users found!'
    resp.responseObject = users
  } else {
    resp.code = 404
    resp.message = 'Cannot find any users in the system.'
  }
  return resp
}

export async function getUserById(userId: string): Promise<CustomResponse> {
  let resp: CustomResponse = { code: 200, message: '', realErrorMessage: {}, responseObject: [] }
  try {
    const user = await prisma.user.findUniqueOrThrow({
      where: {
        id: userId,
      },
      ...AllIncludeVenue,
    })
    resp.message = 'User with Id ' + userId + ' found.'
    resp.responseObject = user
  } catch (err) {
    if (err instanceof PrismaClientKnownRequestError) {
      resp.code = 404
      resp.message = 'Cannot find user with id: ' + userId
      resp.realErrorMessage = err
    } else {
      resp.code = 401
      resp.message = 'User is unauthorized'
    }
  }
  return resp
}
