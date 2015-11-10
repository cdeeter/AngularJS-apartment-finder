angular.module("zyringApp")
.controller("ApartmentCtrl", ["$scope", "$routeParams", "apartmentService", function($scope, $routeParams, apartmentService) {
    
    var apartmentId = $routeParams.apartmentId;
    
    var apartment = apartmentService.get({apartmentId: apartmentId});
    
    $scope.apartment = apartment;
    
    $scope.apartment.$promise.then(function(result) {

        $scope.apartmentDetails = result;
    
        console.log($scope.apartmentDetails);
    });
    
}]);