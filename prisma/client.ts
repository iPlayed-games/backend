import { PrismaClient } from '@prisma/client'
import { mockData } from "./mock-data"
const prisma = new PrismaClient()

async function main() { 
    try {

        await prisma.user.deleteMany();
        await prisma.location.deleteMany();
        await prisma.venue.deleteMany();
        await prisma.activity.deleteMany();

        const loc = await prisma.location.createMany({
           data: [mockData.location.data1, mockData.location.data2]
         })
         console.log(loc)

        

    } catch(e) {
        console.error(e)
    } finally {
        await prisma.$disconnect()
    }
 
}

main()