angular.module("zyringApp")
.factory("apartmentService", ["$resource", function($resource) {
    return $resource("http://spidey.zyring.com/apartments/:apartmentId");
}]);