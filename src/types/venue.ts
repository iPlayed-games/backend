//import { type Activity } from './activity'
import { Category } from './enumCategory'

export type Venue = {
    name: string
    email: string
    //activity?: Activity[]
    locationId: string
    description: string
    logo: string
    mainPhoto: string
    category: Category
    isAcessibility: boolean
    workingHoursOpen: number
    workingHoursClose: number
    userId: string     
  }