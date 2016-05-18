var travelApp = angular.module("travelApp", ['ngRoute']);
travelApp.config(function ($httpProvider, $sceProvider) {
    //Enable cross domain calls
    $httpProvider.defaults.useXDomain = true;

    delete $httpProvider.defaults.headers.common['X-Requested-With'];
});