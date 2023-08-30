import { type User } from '@prisma/client'
import { type User as CreateUser } from '../typing/user'
import prisma from '../config/prisma/prisma-client'

export async function login(email: string, password: string): Promise<string> {
  // TODO: Add JWT functionality to user login with password
  console.log(email)
  console.log(password)
  return 'You Hit the login endpoint'

  // Type Issues with findUnique: https://github.com/prisma/prisma/issues/10903

  // const usr = await prisma.user.findUnique({where:{email:email}})
  // if (usr){
  //     return usr.authToken;
  // } else{
  //     return "User does not exist in Database";
  // }
}

export async function signUp(req: CreateUser): Promise<User> {
  //TODO: Add JWT functionality to user creation
  return await prisma.user.create({ data: { ...req } })
}
