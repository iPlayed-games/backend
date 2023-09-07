import { type User } from '@prisma/client'
import { type User as CreateUser } from '../typing/user'
import prisma from '../config/prisma/prisma-client'

export async function login(_email: string, _password: string): Promise<string> {
  // TODO: Add JWT functionality to user login with password
  return 'You Hit the login endpoint'
}

export async function signUp(req: CreateUser): Promise<User> {
  //TODO: Add JWT functionality to user creation
  return await prisma.user.create({ data: { ...req } })
}
