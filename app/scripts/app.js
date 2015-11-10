"use strict";

/**
 * @ngdoc overview
 * @name zyringApp
 * @description
 * # zyringApp
 *
 * Main module of the application.
 */
angular.module("zyringApp", [
    "ngAnimate",
    "ngResource",
    "ngRoute",
    "ngTouch",
    "wu.masonry",
    "ui.bootstrap",
    "uiGmapgoogle-maps"
])
.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "views/main.html",
        controller: "MainCtrl"
    })
    .when("/about", {
        templateUrl: "views/about.html",
        controller: "AboutCtrl"
    })
    .when("/city/:cityName", {
        templateUrl: "views/city.html",
        controller: "CityCtrl"
    })
    .when("/apartment/:apartmentId", {
        templateUrl: "views/apartment.html",
        controller: "ApartmentCtrl"
    })
    .otherwise({
        redirectTo: "/"
    });
}]);
