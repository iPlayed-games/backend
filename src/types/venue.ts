import { Category } from './enumCategory'

export type Venue = {
  name: string
  email: string
  description: string
  logo: string
  mainPhoto: string
  category: Category
  isAcessibility: boolean
  workingHoursOpen: number
  workingHoursClose: number
}
