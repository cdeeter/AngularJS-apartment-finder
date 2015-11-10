angular.module("zyringApp")
.controller("CityCtrl", ["$scope", "$rootScope", "$routeParams", "$window", "cityService", function($scope, $rootScope, $routeParams, $window, cityService) {
    var cityName = $routeParams.cityName; 
    
    var cityDetails = cityService.query({cityName: cityName});
    
    var maxSize = 8;
    
    $scope.pages = [];
    
    $scope.markers = [];
    
    $scope.cityName = cityName;
    
    $scope.cityDetails = cityDetails;
    
    $scope.cityDetails.$promise.then(function(result) {

        var allItems = result;
        //find the total number of pages needed.
        //In our example, floor of 5 / 3 is 1 
        var totalPages = parseInt(allItems.length / maxSize);
        
        $scope.totalItems = allItems.length;

        //start from 0 and for each possible page,
        //add an empty array to the pages array
        var totalPageCounter = 0;
        while (totalPageCounter <= totalPages) {
            $scope.pages.push([]);
            totalPageCounter += 1;
        }

        //start from 0 and for each index in the allItems,
        //calculate its page number. Now having the page number of
        //the element at hand, push the element to the end of its
        //correct page
        var elementCounter = 0 ;
        while(elementCounter < allItems.length) {
            var pageNo = parseInt(elementCounter / maxSize);
            $scope.pages[pageNo].push(allItems[elementCounter]);
            elementCounter += 1;
        }
        
        $rootScope.list = $scope.pages[0];
    });
    
    $scope.setPage = function(pageNum) {
        $rootScope.list = $scope.pages[pageNum-1];
        $window.initialize();
    };
    
}])

.directive("googleMapAuth", ["$window", "$rootScope", function($window, $rootScope) {
    var script = $window.document.createElement("script");

    $window.initialize = function() {
        var map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 47.6, lng: -122},
            scrollwheel: false,
            zoom: 10
        });
        angular.forEach($rootScope.list, function(item) {
            console.log(item);
            var lat = parseFloat(item.latitude),
                long = parseFloat(item.longitude),
                point = new google.maps.LatLng(lat, long),
                features = "";
            
            angular.forEach(item.features, function(feature) {
                features += feature+"<br/>";
            });
            
            new google.maps.Marker({
                position: point,
                map: map,
                title: item.title,
                label: item.title,
            });
        });
    };

    return {
        restrict: "A",
        transclude: false,
        scope: false,
        link: function($scope, element, attributes) {
            var myKey = "AIzaSyAD-xO2b-Uq-Qe-kdBInmTFevdeoCV_uok";

            if (navigator.onLine) {
                appendScript();
            } else {
                $window.addEventListener("online", appendScript);
            }

            function appendScript() {
                script.type = 'text/javascript';
                script.src = "https://maps.googleapis.com/maps/api/js?key=" + myKey + "&callback=initialize";
                $window.document.body.appendChild(script);
            }
        }
    };
}]);