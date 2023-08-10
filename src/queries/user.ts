type IncludeActivityType = {
  include: {
    activity: boolean
  }
}

type IncludeVenueType = {
  include: {
    venue: boolean
  }
}

// TODO: transform in generic T (e.g Activity, Venue, User)
export const AllIncludeActivity: IncludeActivityType = {
  include: {
    activity: true,
  },
}

export const AllIncludeVenue: IncludeVenueType = {
  include: {
    venue: true,
  },
}
