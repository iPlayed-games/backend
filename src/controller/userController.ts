import { type Request, type Response } from 'express'
import * as UserService from '@services/userService'

export const getAllUsers = async (_req: Request, res: Response): Promise<void> => {
  const allUser = await UserService.getAllUsers()
  res.send(allUser)
}

export const getOneUserById = async (req: Request, res: Response): Promise<void> => {
  // TODO: need implementation
  res.send(req.params.id)
}
