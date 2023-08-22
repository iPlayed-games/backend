import { Category } from '../types/enumCategory'
import { type User } from '../types/user'
import { type Location } from '../types/location'
import { type Venue } from '../types/venue'
import { type Activity } from '../types/activity'

export const locationData: Location[] = [{
  address: '1 Yonge Street',
  phone: '4575446666',
  city: 'Toronto',
  postalCode: 'M4P 0L0',
  latitude: 41,
  longitude: -38,
},
{
  address: '2 Speers Street',
  phone: '4575433366',
  city: 'Toronto',
  postalCode: 'M4P 1B1',
  latitude: 45,
  longitude: -30,
},
{
  address: '4 Water Road',
  phone: '1115433366',
  city: 'Mississauga',
  postalCode: 'L5H 1R1',
  latitude: 12,
  longitude: -39,
},]

export const userData: User[] = [{
  name: 'Daniel',
  email: 'raphael1@gmail.com',
  password: '12345',
  username: 'danielmjs',
  totalBadge: 5,
},
{
  name: 'Jeff',
  email: 'jeff@gmail.com',
  password: '55555',
  username: 'jeff3',
  totalBadge: 2,
},
{
  name: 'savannah',
  email: 'sh4@outlook.com',
  password: 'abcde',
  username: 'sheart4',
  totalBadge: 12,
}]

export const venueData: Venue[] = [{
  name: 'Play Center 1',
  email: 'playcenter1@gmail.com',
  description: 'Write some descrition here',
  logo: 'http://logo.iplayed.com',
  mainPhoto: 'http://mainphoto.iplayed.com',
  category: <Category[]>['Indoor'],
  isAcessibility: false,
  workingHoursOpen: 1692349200000, 
  workingHoursClose: 1692381600000, 
},
{
  name: 'Aquarius',
  email: 'aquarius@hotmail.com',
  description: 'Come to look at the fishies, stay for the burger.',
  logo: 'http://logo.iplayed.com',
  mainPhoto: 'http://mainphoto.iplayed.com',
  category: <Category[]>['Aquatic'],
  isAcessibility: true,
  workingHoursOpen: 1692349200000, 
  workingHoursClose: 1692381600000, 
},
{
  name: 'SkyPalace',
  email: 'skypalace@gmail.com',
  description: 'Fly with the birds, feel the wind in your hair.',
  logo: 'http://logo.iplayed.com',
  mainPhoto: 'http://mainphoto.iplayed.com',
  category: <Category[]>['Aerial'],
  isAcessibility: false,
  workingHoursOpen: 1692349200000, 
  workingHoursClose: 1692381600000, 
}]

export const activityData: Activity [] = [{
  name: 'play game 1',
  description: 'write something about the activity',
  image: 'http://www.playgame.com/image1',
  startTimes: [1692349200000, 1692381600000],
  duration: 45,
  category: <Category>'Indoor',
  minPlayers: 2,
  maxPlayers: 10,
  ageRestriction: 18,
  price: 50.0,
},
{
  name: 'Badminton',
  description: 'Like tennis, but not.',
  image: 'http://www.playgame.com/image1',
  startTimes: [1692349200000, 1692381600000],
  duration: 100,
  category: <Category>'Indoor',
  minPlayers: 2,
  maxPlayers: 4,
  ageRestriction: 10,
  price: 70.0,
},
{
  name: 'Tennis',
  description: 'Like badminton, but not.',
  image: 'http://www.playgame.com/image1',
  startTimes: [1692349200000, 1692381600000],
  duration: 60,
  category: <Category>'Outdoor',
  minPlayers: 2,
  maxPlayers: 4,
  ageRestriction: 14,
  price: 102.5,
}]
