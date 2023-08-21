import { Category } from '../types/enumCategory'
import { type User } from '../types/user'
import { type Location } from '../types/location'
import { type Venue } from '../types/venue'
import { type Activity } from '../types/activity'

//FIXME: add typescript types, change structure to array objects, export individual
export const locationData: Location = {
  address: '1 Yonge Street',
  phone: '4575446666',
  city: 'Toronto',
  postalCode: 'M4P 020',
  latitude: 41,
  longitude: -38,
}
export const userData: User = {
  name: 'Daniel',
  email: 'raphael1@gmail.com',
  password: '12345',
  username: 'danielmjs',
  totalBadge: 5,
}
export const venueData: Venue = {
  name: 'Play Center 1',
  email: 'playcenter1@gmail.com',
  //locationId: '25d294917ff44d30b4b08d9d',
  description: 'Write some descrition here',
  logo: 'http://logo.iplayed.com',
  mainPhoto: 'http://mainphoto.iplayed.com',
  category: <Category[]>['Indoor'],
  isAcessibility: false,
  workingHoursOpen: 1692349200000, //9am
  workingHoursClose: 1692381600000, //6pm
  //userId: '45d294917ff44d30b4b08d9d',
}
export const activityData: Activity = {
  name: 'play game 1',
  description: 'write something about the activity',
  image: 'http://www.playgame.com/image1',
  //venueId: '45d294917ff44d30b4b08d9d',
  startTimes: [1692349200000, 1692381600000],
  duration: 45,
  category: <Category>'Indoor',
  minPlayers: 2,
  maxPlayers: 10,
  ageRestriction: 18,
  //locationId: '25d294917ff44d30b4b08d9d',
  price: 50.0,
}
