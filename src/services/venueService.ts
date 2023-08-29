import { type Venue } from '@prisma/client'
import prisma from 'config/prisma/prisma-client'
import { AllIncludeActivity } from 'queries/queries'

export async function getAllVenues(): Promise<Venue[]> {
  return await prisma.venue.findMany(AllIncludeActivity)
}

export async function getVenueById(venueId: string): Promise<Venue> {
  return await prisma.venue.findUniqueOrThrow({
    where: {
      id: venueId,
    },
    ...AllIncludeActivity,
  })
}
