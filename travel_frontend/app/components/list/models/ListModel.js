/**
 * Created by andreea.avram on 15.10.2015.
 */
travelApp.factory("ListModel", function () {
    var today = new Date();
    var currentDay = today.getDate();
    var currentMonth = today.getMonth() + 1;
    var currentYear = today.getFullYear();
    var tomorrow = currentDay + 1;
    var theDayAfterTomorrow = tomorrow + 1;

    var Data = {
        destination: "",
        destinationCategory: "",
        arrivalDate: currentMonth + "/" + tomorrow + "/" + currentYear,
        departureDate: currentMonth + "/" + theDayAfterTomorrow + "/" + currentYear,
        numberOfRooms: 1,
        dateless: false,
        roomGroup: [
            {
                adults: 2,
                children: 0,
                ages: []
            }
        ],
        roomGroupToString:"",
        searchingCriteria:"",
    }
    return Data;
});