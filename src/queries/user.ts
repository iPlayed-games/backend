type IncludeActivityType = {
  include: {
    activity: boolean
  }
}

// TODO: transform in generic T (e.g Activity, Venue, User)
export const AllIncludeActivity: IncludeActivityType = {
  include: {
    activity: true,
  },
}
