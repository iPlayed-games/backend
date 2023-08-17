import { Activity } from "./activity"
import { Venue } from "./venue"

export type Location = {
    address: string
    phone: string
    city: string
    postalCode: string
    latitude: number
    longitude: number
    venue?: Venue[]
    activity?: Activity[]
  }