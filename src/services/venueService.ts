import { type Venue } from '@prisma/client'
import prisma from '../config/prisma/prisma-client'

export async function getAllVenues(): Promise<Venue[]> {
  return prisma.venue.findMany()
}

export async function getVenueById(venueId: string) {
  return prisma.venue.findUnique({
    where: {
      id: venueId,
    },
  })
}
