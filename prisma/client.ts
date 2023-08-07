import { PrismaClient } from '@prisma/client'
import { userData} from "./mock-data"
const prisma = new PrismaClient()

async function main() { 
    await prisma.user.deleteMany();
    //await prisma.location.deleteMany();
    const user = await prisma.user.createMany({
       data: [userData.data1, userData.data2]
    })
    // const location = await prisma.location.create({
    //     data: {
    //         address: "15 Roehampton",
    //         phone: "(647)544-9999",
    //         city: "Toronto",
    //         postalCode: "M4P 0C2",
    //         latitude: "43.708214404181895", 
    //         longitude: "-79.39793424579089",
    //         activityLocationId: ""
    //     }
    // })
    console.log(user)
    // console.log(location)
}

main()
.catch(e=> {
    console.error(e.message)
})
.finally(async () => {
    await prisma.$disconnect()
})