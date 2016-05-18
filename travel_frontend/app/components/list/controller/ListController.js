/**
 * Created by andreea.avram on 15.10.2015.
 */
travelApp.controller("ListController", function ($scope, ListModel, ListServices, HotelsModel, HotelsServices) {

    /*Models*/
    $scope.List = ListModel;
    $scope.Hotels = HotelsModel;

    /* Services */
    $scope.ListS = ListServices;
    $scope.HotelsS = HotelsServices;

});