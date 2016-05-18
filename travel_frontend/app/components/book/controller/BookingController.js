/**
 * Created by andreea.avram on 26.10.2015.
 */
travelApp.controller("BookingController", function($scope, AvailabilityModel, AvailabilityServices, ListModel, HotelsModel, BookingModel, BookingService){

    /*Models*/
    $scope.Availability = AvailabilityModel;
    $scope.List = ListModel;
    $scope.Hotels = HotelsModel;
    $scope.Booking = BookingModel;

    /*Services*/

    $scope.AvailabilityS = AvailabilityServices;
    $scope.BookingS= BookingService;
})