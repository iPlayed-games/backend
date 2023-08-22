
import { PrismaClient } from '@prisma/client'
import { activityData, locationData, userData, venueData } from '../../data/mock-data'

const prisma = new PrismaClient()

export async function startORM() {
  try {
    await prisma.$connect()
    
    /* TEST USE ONLY*/
    // await prisma.activity.deleteMany()
    // await prisma.venue.deleteMany()
    // await prisma.location.deleteMany()
    // await prisma.user.deleteMany()

    if (process.argv[process.argv.length - 1] === 'seed') {
      for (let i=0; i<userData.length; i++){
        const user = await prisma.user.create({
          data: {
            ...userData[i],
            venue: {
              create: {
                ...venueData[i],
                location: {
                  create: locationData[i],
                },
              },
            },
          },
          include: {
            venue: {
            },
          },
        })
        await prisma.activity.create({
          data:{
            ...activityData[i],
            venue:{
              connect: {
                id: user.venue?.id
              }
            },
            location:{
              connect: {
                id: user.venue?.locationId
              }
            }
          }
        })
      }
    }
  } catch (err) {
    console.error(err)
    await prisma.$disconnect()
  }
}

export default prisma


