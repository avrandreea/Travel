/**
 * Created by andreea.avram on 19.10.2015.
 */
travelApp.factory("AvailabilityServices", function ($http, $location, AvailabilityModel, BookingModel) {
    var Data = {

        setSelectedRoomInfo: function (roomIndex) {
            BookingModel.Hotel.hotelID = AvailabilityModel.hotelRoomAvailability.HotelRoomAvailabilityResponse.hotelId;
            BookingModel.Hotel.name = AvailabilityModel.hotelRoomAvailability.HotelRoomAvailabilityResponse.hotelName;
            BookingModel.Hotel.address = AvailabilityModel.hotelRoomAvailability.HotelRoomAvailabilityResponse.hotelAddress;
            BookingModel.Hotel.Room.rateKey = AvailabilityModel.hotelRoomAvailability.HotelRoomAvailabilityResponse.
                HotelRoomResponse[roomIndex].RateInfos.RateInfo.RoomGroup.Room.rateKey;
            BookingModel.Hotel.Room.roomTypeCode = AvailabilityModel.hotelRoomAvailability.HotelRoomAvailabilityResponse.
                HotelRoomResponse[roomIndex].roomTypeCode;
            BookingModel.Hotel.Room.rateCode = AvailabilityModel.hotelRoomAvailability.HotelRoomAvailabilityResponse.
                HotelRoomResponse[roomIndex].rateCode;
            //BookingModel.Hotel.Room.chargeableRate TO DO
            BookingModel.Hotel.Room.chargeableRate = AvailabilityModel.hotelRoomAvailability.HotelRoomAvailabilityResponse.
                HotelRoomResponse[roomIndex].RateInfos.RateInfo.ChargeableRateInfo['@total'];
        },
        redirectToBookingPage: function (roomIndex) {
            Data.setSelectedRoomInfo(roomIndex);
            $location.path('/book');
        }
    }
    return Data;
})