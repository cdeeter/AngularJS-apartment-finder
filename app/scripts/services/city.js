angular.module("zyringApp")
.factory("cityService", ["$resource", function($resource) {
    return $resource("http://spidey.zyring.com/cities/:cityName");
}]);