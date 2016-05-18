/**
 * Created by andreea.avram on 14.10.2015.
 */
travelApp.controller("HomeController", function ($scope, $http, ListModel, ListServices, HotelsModel) {

    /*Models*/
    $scope.List = ListModel;
    $scope.Hotels = HotelsModel;

    /* Services */
    $scope.ListS = ListServices;


});