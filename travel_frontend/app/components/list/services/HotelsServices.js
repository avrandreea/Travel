/**
 * Created by andreea.avram on 20.10.2015.
 */
travelApp.factory("HotelsServices", function ($http, $location, ListModel, HotelsModel, AvailabilityModel) {

    var Data = {

        redirectRoAvailabilityPage: function (hotelIndex) {
            AvailabilityModel.Hotel = HotelsModel.list.HotelListResponse.HotelList.HotelSummary[hotelIndex];

            /*option one*/
            $http({
                method: 'GET',
                url: "http://localhost:8080/avail?"
                + "&city=" + AvailabilityModel.Hotel.city
                + "&hotelId=" + AvailabilityModel.Hotel.hotelId
                + "&arrivalDate=" + ListModel.arrivalDate
                + "&departureDate=" + ListModel.departureDate
                + "&includeDetails=true"
                + "&includeRoomImages=true"
            }).then(function successCallback(response) {
                AvailabilityModel.hotelRoomAvailability = response.data;
                //AvailabilityModel.rooms.hotelName=response.data.HotelRoomAvailabilityResponse.hotelName;
                ////AvailabilityModel.rooms.hotelRating=Availability.Hotel.hotelRating;
                //AvailabilityModel.rooms.hotelCity=response.data.HotelRoomAvailabilityResponse.hotelCity;
                //AvailabilityModel.rooms.hotelCountry=response.data.HotelRoomAvailabilityResponse.hotelCountry;
                //AvailabilityModel.rooms.hotelAddress=response.data.HotelRoomAvailabilityResponse.hotelAddress;
                //console.log(response.data.HotelRoomAvailabilityResponse.HotelRoomResponse.length);
                //
                //for(i=0;i<response.data.HotelRoomAvailabilityResponse.HotelRoomResponse.length;i++){
                //    AvailabilityModel.rooms.room.push();
                //    AvailabilityModel.rooms.room[i].roomID=response.data.HotelRoomAvailabilityResponse.HotelRoomResponse[i].roomTypeCode;
                //    console.log(AvailabilityModel.rooms.room[i].roomID);
                //    console.log(response.data.HotelRoomAvailabilityResponse.HotelRoomResponse[i].roomTypeCode);
                //}
                //
                //console.log("test"+AvailabilityModel.rooms.hotelName);
                //console.log(response.data);
            }, function errorCallback(response) {
                console.log(response);

            });

            /*option two*/
            //$http.jsonp("http://localhost:8080/avail?"
            //    + "&city=" + AvailabilityModel.Hotel.city
            //    + "&hotelId=" + AvailabilityModel.Hotel.hotelId
            //    + "&arrivalDate=" + ListModel.arrivalDate
            //    + "&departureDate=" + ListModel.departureDate
            //    + "&includeDetails=true"
            //    + "&includeRoomImages=true" +
            //    "&callback=JSON_CALLBACK")
            //    .success(function (data) {
            //        AvailabilityModel.hotelRoomAvailability = data;
            //        $location.path('/avail');
            //    })
            //    .error(function (error) {
            //        console.log(error);
            //    });

            /*option one*/
            $http.jsonp("http://api.ean.com/ean-services/rs/hotel/v3/roomImages?cid=55505&minorRev=99&apiKey=custom&hotelId=" +
                "" + AvailabilityModel.Hotel.hotelId + "&callback=JSON_CALLBACK")
                .success(function (data) {
                    AvailabilityModel.images = data.HotelRoomImageResponse.RoomImages;
                    console.log(AvailabilityModel.images);
                    console.log(data.HotelRoomImageResponse.RoomImages.RoomImage[0]);
                    console.log(data.HotelRoomImageResponse.RoomImages.RoomImage[1]);
                }).error(function (error) {
                    console.log(error);
                })

            /*option two*/
            //$http({
            //    method: 'GET',
            //    url:"http://api.ean.com/ean-services/rs/hotel/v3/roomImages?cid=55505&minorRev=99&apiKey=custom&hotelId="+AvailabilityModel.Hotel.hotelId
            //}).then(function successCallback(response) {
            //    AvailabilityModel.images = response.data;
            //    console.log(AvailabilityModel.images);
            //}, function errorCallback(response) {
            //    console.log(response);
            //
            //});
            $location.path('/avail');
        }
    }
    return Data;

})

