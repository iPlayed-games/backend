import { PrismaClient } from '@prisma/client'
import { data } from './mock-data'
const prisma = new PrismaClient()

// TODO: for testing purpose only
async function main() {
  try {
    // Delete methods
    await prisma.user.deleteMany();
    await prisma.location.deleteMany();
    await prisma.venue.deleteMany();
    await prisma.activity.deleteMany();
    // Create Methods
    const locationCreate = await prisma.location.create({
      data: data.user
    })
    console.log(locationCreate)
    const venueCreate = await prisma.venue.create({
      data: data.venue
    })
    console.log(venueCreate)
    const activityCreate = await prisma.activity.create({
      data: data.activity
    })
    console.log(activityCreate)
    // Find Users
    // const userInfo = await prisma.user.findFirst({
    //   include: {
    //     venue: {
    //       include: {
    //         location: true,
    //         Activity: true,
    //       },
    //     },
    //   },
    // })
    // console.log(userInfo)
  } catch (e) {
    console.error(e)
  } finally {
    // TODO: add to server method
    await prisma.$disconnect()
  }
}

main()
