/**
 * Created by andreea.avram on 26.10.2015.
 */
travelApp.factory("BookingModel", function(){
    var Data = {
        Hotel:{
            hotelID:"",
            name:"",
            address:"",
            Room: {
                rateKey: "",
                roomTypeCode:"",
                rateCode:"",
                chargeableRate:"",
                RoomGroup:
                    //One room only
                    //[
                    {
                        firstName: "test",
                        lastName: "tester",
                        bedTypeId: "23",
                        smokingPreference: "NS"
                    }
                    //]

            }
        },
        Reservation:{
            email: "andreea.avram@xoomworks.com",
            firstName: "test",
            lastName: "tester",
            homePhone: "2145370159",
            workPhone: "2145370159",
            creditTypeCard: "CA",
            creditCardNumber: "5401999999999999",
            creditCardIdentifier: "123",
            creditCardExpirationMonth: "12",
            creditCardExpirationYear: "2017"
        },

        Address:{
            address1: "travelnow",
            address2: "travelnow",
            city: "Cluj",
            stateProvinceCode: "CJ",
            countryCode: "RO",
            postalCode: "123456"
        }
    }
    return Data;
});