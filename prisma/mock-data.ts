import { Category, DifficultyRating } from "@prisma/client"


const location = {
    data1: {
        address: "1 Yonge Street",
        phone: "4575446666",
        city: "Toronto",
        postalCode: "M4P 020",
        latitude: "42.0",
        longitude: "-37.0",      
    },
    data2: {
        address: "12 Mount Plaesant Rd",
        phone: "6475556969",
        city: "Toronto",
        postalCode: "M2P 120",
        latitude: "42.4",
        longitude: "-37.1", 
    }
}

const user = {
    data1: {
        //id: userId1,
        name: "Daniel",
        email: "danielmjs609@gmail.com",
        password: "12345",
        wishList: ["1", "2"],
        
    },
    data2: {
        //id: userId2,
        name: "Raphael",
        email: "raphael@gmail.com",
        password: "54321",
        wishList: ["2", "3"],
      
    }
}

const venue = {
    data1: {
        name: "Play Center",
        email: "playcenter@gmail.com",
        description: "Write some descrition here",
        reviews: "Write some reviews here",
        logo: "http://logo.iplayed.com",
        mainPhoto: "http://mainphoto.iplayed.com",
        bannerPhoto: "http://bannerphoto.iplayed.com",
        userVenueId: "55d294917ff44d30b4b08d9d",
        activityVenueId: "66d294917ff44d30b4b08d9d"
    },
    data2: {
        name: "Game Show",
        email: "gameshow@gmail.com",
        description: "Write some descrition here",
        reviews: "Write some reviews here",
        logo: "http://logo.gameshow.com",
        mainPhoto: "http://mainphoto.gameshow.com",
        bannerPhoto: "http://bannerphoto.gameshow.com",
        userVenueId: "77d294917ff44d30b4b08d9d",
        activityVenueId: "88d294917ff44d30b4b08d9d"
    }

}

const activity = {
    data1: {
        name: "play game 1",
        description: "write something about the activity",
        image: "http://www.playgame.com/image1",
        duration: 45,
        category: <Category> "Indoor",
        numPlayers: 7,
        minPlayers: 2,
        maxPlayers: 10,
        difficultRating: <DifficultyRating> "Normal",
        likeReview: 4.8,
        userId: "22d38768d6ddcf97edae0a1a"
        
    },
    data2: {
        name: "play Shop",
        description: "write something about the activity",
        image: "http://www.gameshop.com/image1",
        duration: 60,
        category: <Category> "Outdoor",
        numPlayers: 5,
        minPlayers: 4,
        maxPlayers: 12,
        difficultRating: <DifficultyRating> "Bad",
        likeReview: 3.8, 
        userId: "22d38768d6ddcf97edae0a1a"
    }
}

 
    
  


export const mockData = { location, venue, activity, user }