type IncludeType<T extends string> = {
  include: {
    [properties in T]: boolean
  }
}







export const AllIncludeActivity: IncludeType<'activities'> = {
  include: {
    activities: true,
  },
}

export const AllIncludeVenue: IncludeType<'venue'> = {
  include: {
    venue: true,
  },
}
