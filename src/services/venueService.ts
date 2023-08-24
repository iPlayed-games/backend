import { type Venue } from '@prisma/client'
import prisma from '../config/prisma/prisma-client'

export async function getAllVenues(): Promise<Venue[]> {
  return prisma.venue.findMany()
}


export async function getVenueById(venueId: string): Promise<Venue> {
  const venue = await prisma.venue.findUniqueOrThrow({
    where: {
      id: venueId
    }
  })
  return venue  
}
