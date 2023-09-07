import { type CustomResponse } from 'typing/customResponse'
import prisma from '../config/prisma/prisma-client'
import { AllIncludeActivity } from '../queries/queries'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library'

export async function getAllVenues(): Promise<CustomResponse> {
  const venues = await prisma.venue.findMany(AllIncludeActivity)
  let resp: CustomResponse = { code: 200, message: '', realErrorMessage: {}, data: {} }
  if (venues) {
    resp.message = 'Venues found!'
    resp.data = venues
  } else {
    resp.code = 404
    resp.message = 'Cannot find any venues in the system.'
  }
  return resp
}

export async function getVenueById(venueId: string): Promise<CustomResponse> {
  let resp: CustomResponse = { code: 200, message: '', realErrorMessage: {}, data: {} }
  try {
    const venue = await prisma.venue.findUniqueOrThrow({
      where: {
        id: venueId,
      },
      ...AllIncludeActivity,
    })
    resp.message = 'Venue with Id ' + venueId + ' found.'
    resp.data = venue
  } catch (err) {
    if (err instanceof PrismaClientKnownRequestError) {
      resp.code = 404
      resp.message = 'Cannot find venue with id: ' + venueId
      resp.realErrorMessage = err
    } else {
      resp.code = 401
      resp.message = 'User is unauthorized'
    }
  }
  return resp
}
