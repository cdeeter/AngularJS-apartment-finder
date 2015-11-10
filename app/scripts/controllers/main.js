'use strict';

/**
 * @ngdoc function
 * @name zyringApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the zyringApp
 */
angular.module("zyringApp")
    
.controller("MainCtrl", function ($scope) {
    $scope.awesomeThings = [
      "HTML5 Boilerplate",
      "AngularJS",
      "Karma"
    ];
    
    $scope.cityDictionary = [
        {
            "name": "Seattle",
            "image": "../images/seattle.jpg"
        },
        {
            "name": "Redmond",
            "image": "../images/redmond.jpg"
        },
        {
            "name": "Bellevue",
            "image": "../images/bellevue.jpg"
        },
        {
            "name": "Kirkland",
            "image": "../images/kirkland.jpg"
        },
        {
            "name": "Tacoma",
            "image": "../images/tacoma.jpg"
        },
        {
            "name": "Olympia",
            "image": "../images/olympia.jpg"
        }
    ]
  });
