import { type Request, type Response } from 'express'
import * as AuthService from '@services/authService'

export const login = async (_req: Request, res: Response): Promise<void> => {
  const user = await AuthService.login(_req.body.email, _req.body.password)
  res.send(user)
}

export const signUp = async (req: Request, res: Response): Promise<void> => {
  const user = await AuthService.signUp(req.body)
  res.send(user)
}
