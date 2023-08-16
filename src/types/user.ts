import { type Activity } from './activity'

export type User = {
  name: string
  email: string
  password: string
  username: string
  totalBadge: number
  //venue?: Venue | undefined
}

export type UserResponse =
  | {
      id: string
      email: string
      name: string | undefined
      activity?: Activity[]
    }
  | undefined
