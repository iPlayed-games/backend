import { Category, User, Location, Venue, Activity } from '@prisma/client'

//FIXME: add typescript types, change structure to array objects, export individual
let location: Location = {
    id: '95d294917ff44d30b4b08d9d',
    address: '1 Yonge Street',
    phone: '4575446666',
    city: 'Toronto',
    postalCode: 'M4P 020',
    latitude: 41,
    longitude: -38,
}
let user: User = {
    id: '45d294917ff44d30b4b08d9d',
    name: 'Daniel',
    email: 'danielmjs609@gmail.com',
    password: '12345',
    username: 'danielmjs',
    totalBadge: 5
}
let venue: Venue = {
    id: '85d294917ff44d30b4b08d9d',
    name: 'Play Center',
    email: 'playcenter@gmail.com',
    description: 'Write some descrition here',
    logo: 'http://logo.iplayed.com',
    mainPhoto: 'http://mainphoto.iplayed.com',
    isAcessibility: false,
    workingHoursOpen: 1692349200000, //9am
    workingHoursClose: 1692381600000, //6pm
    userId: '45d294917ff44d30b4b08d9d',
}
let activity: Activity = {
    id: '75d294917ff44d30b4b08d9d',
    name: 'play game 1',
    description: 'write something about the activity',
    image: 'http://www.playgame.com/image1',
    venueId: "45d294917ff44d30b4b08d9d",
    startTimes: [1692349200000, 1692381600000],
    duration: 45,
    category: <Category>'Indoor',
    minPlayers: 2,
    maxPlayers: 10,
    ageRestriction: 18,
    price: 50.00,
}
export const mockdata = [location, user, venue, activity]
    

