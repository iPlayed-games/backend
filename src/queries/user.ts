type IncludeType <T extends string>= {
  include: {
    [properties in T]: boolean
  }
}

export const AllIncludeActivity: IncludeType<"activity"> = {
  include: {
    activity: true,
  },
}

export const AllIncludeVenue: IncludeType<"venue">= {
  include: {
    venue: true,
  },
}
