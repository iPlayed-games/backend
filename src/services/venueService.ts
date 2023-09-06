import { type Venue } from '@prisma/client'
import prisma from '../config/prisma/prisma-client'
import { AllIncludeActivity } from '../queries/queries'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library'

export async function getAllVenues(): Promise<Venue[] | {}> {
  const venues = await prisma.venue.findMany(AllIncludeActivity)
  if (venues) {
    return venues
  } else {
    return { code: 404, message: 'Cannot find any venues in the system.' }
  }
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
      return { realErrorMessage: err, code: 404, message: 'Cannot find venue with id: ' + venueId }
    } else {
      return { realErrorMessage: err, code: 500, message: 'Something has gone wrong...' }
    }
  }
}
