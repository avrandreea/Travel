/**
 * Created by andreea.avram on 19.10.2015.
 */
travelApp.factory("AvailabilityModel", function(){

    Data = {
        //destinationString: "",
        //destinationCategory: "",
        //arrivalDate: "",
        //departureDate: "",
        //numberOfRooms: "",

        hotelRoomAvailability: "",
        stars: "",
        Hotel: "",
        images: [],

        rooms:
            {
                hotelName:"",
                hotelRating:"",
                hotelCity:"",
                hotelCountry:"",
                hotelAddress:"",
                room:[{
                    roomID:"",
                    roomTypeDescription:"",
                    BedType:[],
                    price:"",
                    currencyCode:"",
                    nonRefundable: "",
                    images:""
                }]
            }

    }
    return Data;
});