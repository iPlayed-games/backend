import { type User } from './user'
import { Category } from './enumCategory'

export type Activity = {
  name: string
  description: string
  image: string
  venueId: string
  startTimes: number[]
  duration: number
  category: Category
  minPlayers: number
  maxPlayers: number
  ageRestriction: number
  locationId: string
  price: number
}

export type ActivityResponse = {
  id: string
  name: string
  userId: string
  user?: User
}
