import { PrismaClient } from '@prisma/client'
//import { activityData, locationData, userData, venueData } from './mock-data'
const prisma = new PrismaClient()

// TODO: for testing purpose only
async function main() {
  try {
    // Delete methods
    //await prisma.user.deleteMany();
    // await prisma.location.deleteMany();
    // await prisma.venue.deleteMany();
    // await prisma.activity.deleteMany();
    // Create Methods
    // const locationCreate = await prisma.location.create({
    //   data: locationData
    // })
    // console.log(locationCreate)
    // const userCreate = await prisma.user.create({
    //   data: userData
    // })
    // console.log(userCreate)
    // const venueCreate = await prisma.venue.create({
    //   data: venueData
    // })
    // console.log(venueCreate)
    // const activityCreate = await prisma.activity.create({
    //   data: activityData
    // })
    // console.log(activityCreate)
  
  } catch (e) {
    console.error(e)
  } finally {
    // TODO: add to server method
    await prisma.$disconnect()
  }
}

main()
