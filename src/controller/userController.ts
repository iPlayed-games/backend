import { type Request, type Response } from 'express'
import * as UserService from '../services/userService'

export const getAllUsers = async (_req: Request, res: Response): Promise<void> => {
  const allUser = await UserService.getAllUsers()
  if ('code' in allUser) {
    if (allUser.code === 404) {
      res.status(404)
    }
  }
  res.send(allUser)
}

export const getOneUserById = async (req: Request, res: Response): Promise<void> => {
  const userById = await UserService.getUserById(req.params.id)
  if ('code' in userById) {
    if (userById.code === 404) {
      res.status(404)
    } else if (userById.code === 500) {
      res.status(500)
    }
  }
  res.send(userById)
}
