import { type Venue } from '@prisma/client'
import prisma from '../config/prisma/prisma-client'
import { AllIncludeActivity } from '../queries/queries'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library'

export async function getAllVenues(): Promise<Venue[]> {
  return await prisma.venue.findMany(AllIncludeActivity)
}

export async function getVenueById(venueId: string): Promise<Venue | {}> {
  try {
    return await prisma.venue.findUniqueOrThrow({
      where: {
        id: venueId,
      },
      ...AllIncludeActivity,
    })
  } catch (err) {
    if (err instanceof PrismaClientKnownRequestError) {
      return { realErrorMessage: err, message: 'Cannot find venue with id: ' + venueId }
    } else {
      return { realErrorMessage: err, message: 'Something has gone wrong...' }
    }
  }
}
