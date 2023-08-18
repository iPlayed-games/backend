import { PrismaClient } from '@prisma/client'
import { shutDown } from '../../utils/shutdown-server'
import { activityData, locationData, userData, venueData } from '../../data/mock-data'

const prisma = new PrismaClient()

export async function startORM() {
  try {
    await prisma.$connect()

    if (process.argv[process.argv.length - 1] === 'seed') {
      await prisma.user.create({
        data: {
          ...userData,
          venue: {
            create: {
              ...venueData,
              location: {
                create: locationData,
              },
              activities: {
                create: [
                  {
                    ...activityData,
                    location: {
                      create: locationData,
                    },
                  },
                ],
              },
            },
          },
        },
        include: {
          venue: {
            include: {
              activities: true,
            },
          },
        },
      })
      await prisma.$disconnect()
      shutDown('database successful seeded')
    }
  } catch (err) {
    console.error(err)
    await prisma.$disconnect()
  }
}

export default prisma
