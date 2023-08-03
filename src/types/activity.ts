import { User } from "./user"

export type Activity = {
  name: string
  userId: string
}

export type ActivityResponse = {
  id: string
  name: string
  userId: string
  user?: User
}