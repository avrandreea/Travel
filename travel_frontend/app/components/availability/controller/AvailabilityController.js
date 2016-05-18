/**
 * Created by andreea.avram on 19.10.2015.
 */
travelApp.controller("AvailabilityController", function ($scope, AvailabilityModel, AvailabilityServices, ListModel, HotelsModel, BookingModel) {
    /*Models*/
    $scope.Availability = AvailabilityModel;
    $scope.List = ListModel;
    $scope.Hotels = HotelsModel;
    $scope.Booking = BookingModel;

    /*Services*/

    $scope.AvailabilityS = AvailabilityServices;
})