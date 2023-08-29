import { type Request, type Response } from 'express'
import * as venueService from '@services/venueService'

export const getAllVenues = async (_req: Request, res: Response): Promise<void> => {
  const allVenues = await venueService.getAllVenues()
  res.send(allVenues)
}

export const getOneVenueById = async (req: Request, res: Response): Promise<void> => {
  const venueById = await venueService.getVenueById(req.params.id)
  res.send(venueById)
}
