/**
 * Created by andreea.avram on 26.10.2015.
 */
travelApp.factory("BookingService", function ($http, AvailabilityModel, BookingModel, ListModel) {
    var Data = {
        bookRoom: function () {
            //create String
            var mylink = "&hotelId=" + BookingModel.Hotel.hotelID
                + "&arrivalDate=" + ListModel.arrivalDate
                + "&departureDate=" + ListModel.departureDate
                + "&supplierType=E"
                + "&rateKey=" + BookingModel.Hotel.Room.rateKey
                + "&roomTypeCode=" + BookingModel.Hotel.Room.roomTypeCode
                + "&rateCode=" + BookingModel.Hotel.Room.rateCode
                + "&chargeableRate=" + BookingModel.Hotel.Room.chargeableRate
                + ListModel.roomGroupToString
                + "&room1FirstName=" + BookingModel.Hotel.Room.RoomGroup.firstName
                + "&room1LastName=" + BookingModel.Hotel.Room.RoomGroup.lastName
                + "&room1BedTypeId=" + BookingModel.Hotel.Room.RoomGroup.bedTypeId
                + "&room1SmokingPreference=" + BookingModel.Hotel.Room.RoomGroup.smokingPreference
                + "&email=" + BookingModel.Reservation.email
                + "&firstName=" + BookingModel.Reservation.firstName
                + "&lastName=" + BookingModel.Reservation.lastName
                + "&homePhone=" + BookingModel.Reservation.homePhone
                + "&workPhone=" + BookingModel.Reservation.workPhone
                + "&creditCardType=" + BookingModel.Reservation.creditTypeCard
                + "&creditCardNumber=" + BookingModel.Reservation.creditCardNumber
                + "&creditCardIdentifier=" + BookingModel.Reservation.creditCardIdentifier
                + "&creditCardExpirationMonth=" + BookingModel.Reservation.creditCardExpirationMonth
                + "&creditCardExpirationYear=" + BookingModel.Reservation.creditCardExpirationYear
                + "&address1=" + BookingModel.Address.address1
                + "&city=" + BookingModel.Address.city
                + "&stateProvinceCode=" + BookingModel.Address.stateProvinceCode
                + "&countryCode=" + BookingModel.Address.countryCode
                + "&postalCode=" + BookingModel.Address.postalCode

            var myGoodLink = "&hotelId=164122&arrivalDate=12/6/2015&departureDate=12/7/2015&supplierType=E&rateKey=7d5aeae1-de7a-43f9-9a46-2bee6f6daa26&roomTypeCode=200759980&rateCode=203779424&chargeableRate=237.40&room1=2&room1FirstName=test&room1LastName=tester&room1BedTypeId=23&room1SmokingPreference=NS&email=andreea.avram@xoomworks.com&firstName=test&lastName=tester&homePhone=2145370159&workPhone=2145370159&creditCardType=CA&creditCardNumber=5401999999999999&creditCardIdentifier=123&creditCardExpirationMonth=12&creditCardExpirationYear=2017&address1=travelnow&city=Cluj&stateProvinceCode=CJ&countryCode=RO&postalCode=123456"
            //$http({
            //    method: "POST",
            //    url: "https://book.api.ean.com/ean-services/rs/hotel/v3/res?cid=55505&minorRev=99&apiKey=custom&hotelId=" +
            //    "164122&arrivalDate=12/6/2015&departureDate=12/7/2015&supplierType=E&rateKey=7d5aeae1-de7a-43f9-9a46-2be" +
            //    "e6f6daa26&roomTypeCode=200759980&rateCode=203779424&chargeableRate=237.40&room1=2&room1FirstName=test&" +
            //    "room1LastName=tester&room1BedTypeId=23&room1SmokingPreference=NS&email=andreea.avram@xoomworks.com&first" +
            //    "Name=test&lastName=tester&homePhone=2145370159&workPhone=2145370159&creditCardType=CA&creditCardNumber=" +
            //    "5401999999999999&creditCardIdentifier=123&creditCardExpirationMonth=12&creditCardExpirationYear=2017" +
            //    "&address1=travelnow&city=Cluj&stateProvinceCode=CJ&countryCode=RO&postalCode=123456",
            //})
            //    .success(function (data, status, headers, config) {
            //        console.log(data);
            //    })
            //    .error(function (data, status, headers, config) {
            //        console.log(data);
            //    });

            $http({
                method: "POST",
                url: "http://localhost:8080/res?" + myGoodLink
            })
                .then(function successCallback(response) {
                    console.log(response);
                    console.log("https://book.api.ean.com/ean-services/rs/hotel/v3/" + "cid=55505&minorRev=99&apiKey=custom" + myGoodLink);

                }, function errorCallback(response) {
                    console.log(response);
                })

        }
    }

    return Data;
})