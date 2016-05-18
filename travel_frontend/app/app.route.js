/**
 * Created by andreea.avram on 14.10.2015.
 */
travelApp.config(function($routeProvider, $locationProvider, $httpProvider) {
    $routeProvider
        .when('/',{
            templateUrl: 'components/home/home.html',
            controller: 'HomeController',
        })
        .when('/list',{
            templateUrl: 'components/list/list.html',
            controller: 'ListController',
        })
        .when('/avail',{
            templateUrl: 'components/availability/availability.html',
            controller: 'AvailabilityController',
        })
        .when('/book',{
            templateUrl: 'components/book/booking.html',
            controller: 'BookingController',
        })
        .otherwise({
            redirectTo: '/'
        });
});

