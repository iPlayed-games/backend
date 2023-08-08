import { ObjectId } from 'bson'

const userId1 = new ObjectId()
const userId2 = new ObjectId()
const locationId1 = new ObjectId()
const locationId2 = new ObjectId()
const venueID1 = new ObjectId()
//const venueID2 = new ObjectId()
const activityId1 = new ObjectId()
const activityId2 = new ObjectId()

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
        activity: [],
        // venueId: [venueID1]
    },
    data2: {
        //id: userId2,
        name: "Raphael",
        email: "raphael@gmail.com",
        password: "54321",
        wishList: ["2", "3"],
        //activity: [activityId2],
        // venueId: [venueID2]
    }
}

const venue = {
    data1: {
        //id: venueID1,
        name: "Play Center",
        email: "playcenter@gmail.com",
        description: "Write some descrition here",
        reviews: "Write some reviews here",
        logo: "http://logo.iplayed.com",
        mainPhoto: "http://mainphoto.iplayed.com",
        bannerPhoto: "http://bannerphoto.iplayed.com",
        userVenueId: userId1,
        activityVenueId: activityId1
    },
    data2: {
        //id: venueID2,
        name: "Game Show",
        email: "gameshow@gmail.com",
        description: "Write some descrition here",
        reviews: "Write some reviews here",
        logo: "http://logo.gameshow.com",
        mainPhoto: "http://mainphoto.gameshow.com",
        bannerPhoto: "http://bannerphoto.gameshow.com",
        userVenueId: userId2,
        activityVenueId: activityId2
    }

}

const activity = {
    data1: {
        id: activityId1,
        name: "play game 1",
        description: "write something about the activity",
        image: "http://www.playgame.com/image1",
        venueId: venueID1,
        duration: 45,
        category: "Indoor",
        numPlayers: 7,
        minPlayers: 2,
        maxPlayers: 10,
        difficultRating: "Normal",
        likeReview: 4.8,
        userId: userId1,
        location: locationId1
    },
    data2: {
        //id: activityId1,
        name: "play Shop",
        description: "write something about the activity",
        image: "http://www.gameshop.com/image1",
        venueId: venueID1,
        duration: 60,
        category: "Outdoor",
        numPlayers: 5,
        minPlayers: 4,
        maxPlayers: 12,
        difficultRating: "Bad",
        likeReview: 3.8,
        userId: userId2,
        location: locationId2 
    }
}


export const mockData = { location, venue, activity, user }