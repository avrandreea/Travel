/**
 * Created by andreea.avram on 14.10.2015.
 */
travelApp.directive('ngHeader', function () {
    return {
        //only matches attribute name
        restrict: 'A',
        templateUrl: 'header/header.html'
    }
});

travelApp.directive('ngFooter', function () {
    return {
        restrict: 'A',
        templateUrl: 'footer/footer.html'
    }
});
