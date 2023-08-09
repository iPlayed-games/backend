import { PrismaClient } from '@prisma/client'
import { mockData } from "./mock-data"
const prisma = new PrismaClient()

async function main() { 
    try {

        await prisma.user.deleteMany();
        await prisma.location.deleteMany();
        await prisma.venue.deleteMany();
        await prisma.activity.deleteMany();

        const locationCreate = await prisma.location.createMany({
           data: [mockData.location.data1, mockData.location.data2]
         })
         console.log(locationCreate)

        const venueCreate = await prisma.venue.create({
            data: mockData.venue.data1
        })
        console.log(venueCreate)

        const userCreate = await prisma.user.create({
            data: mockData.user.data1
        })
        console.log(userCreate)

        const activityCreate = await prisma.activity.create({
            data: mockData.activity.data1
        })
        console.log(activityCreate)

    } catch(e) {
        console.error(e)
    } finally {
        await prisma.$disconnect()
    }
 
}

main()