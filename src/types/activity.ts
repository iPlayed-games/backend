import { Category } from './enumCategory'

export type Activity = {
  name: string
  description: string
  image: string
  startTimes: number[]
  duration: number
  category: Category
  minPlayers: number
  maxPlayers: number
  ageRestriction: number
  price: number
}
