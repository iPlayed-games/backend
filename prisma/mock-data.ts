import { Category } from '@prisma/client'

//FIXME: add typescript types, change structure to array objects, export individual

export const data = {
    location: {
        address: '1 Yonge Street',
        phone: '4575446666',
        city: 'Toronto',
        postalCode: 'M4P 020',
        latitude: 41,
        longitude: -38,
    },
    user: {
        name: 'Daniel',
        email: 'danielmjs609@gmail.com',
        password: '12345',
        username: 'danielmjs',
        totalBadge: 5
    },
    venue: {
        name: 'Play Center',
        email: 'playcenter@gmail.com',
        description: 'Write some descrition here',
        activity: ['66d294917ff44d30b4b08d9d'],
        location: "11d294917ff44d30b4b08d9d",
        logo: 'http://logo.iplayed.com',
        mainPhoto: 'http://mainphoto.iplayed.com',
        isAcessibility: false,
        workingHoursOpen: 1692349200000, //9am
        workingHoursClose: 1692381600000, //6pm
        userId: '45d294917ff44d30b4b08d9d',
    },
    activity: {
        name: 'play game 1',
        description: 'write something about the activity',
        image: 'http://www.playgame.com/image1',
        venueId: "45d294917ff44d30b4b08d9d",
        startsTies: [1692349200000, 1692381600000],
        duration: 45,
        category: <Category>'Indoor',
        minPlayers: 2,
        maxPlayers: 10,
        ageRestriction: 18,
        location: '13d294917ff44d30b4b08d9d',
        price: 50.00,
    }
}
