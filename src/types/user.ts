import { type Activity } from './activity'

export type User = {
  email: string
  name?: string
}

export type UserResponse =
  | {
      id: string
      email: string
      name: string | undefined
      activity?: Activity[]
    }
  | undefined
