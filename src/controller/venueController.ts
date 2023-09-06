import { type Request, type Response } from 'express'
import * as venueService from '../services/venueService'

export const getAllVenues = async (_req: Request, res: Response): Promise<void> => {
  const allVenues = await venueService.getAllVenues()
  if ('code' in allVenues) {
    if (allVenues.code === 404) {
      res.status(404)
    }
  }
  res.send(allVenues)
}

export const getOneVenueById = async (req: Request, res: Response): Promise<void> => {
  const venueById = await venueService.getVenueById(req.params.id)
  if ('code' in venueById) {
    if (venueById.code === 404) {
      res.status(404)
    } else if (venueById.code === 500) {
      res.status(500)
    }
  }
  res.send(venueById)
}
