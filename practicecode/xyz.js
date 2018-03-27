var app = angular.module("app", ['ngRoute']);
app.config(function($routeProvider){
    $routeProvider
    .when("/home", {
        templateUrl : "templates/home.html",
        controller : "appController"
    })
    .when("/about", {
        templateURL : "templates/about.html"
    })
    .when("/formulae", {
        templateURL : "templates/formulae.html"
    })
    .when("/basic", {
        templateURL : "templates/basic.html",
        controller : "basicController"
    })
    .when("/combustion", {
        templateURL : "templates/combustion.html",
        controller : "appController"
    })
    .when("/heattransfer", {
        templateURL : "templates/heattransfer.html",
        controller : "appController"
    })
    .otherwise({template: '<strong>No Contents Available Here</strong>'});
});
(function(myApp){
  "use strict";
  myApp.controller("appController", function($scope, $http){
    $http.get('json/problemtype.json').then(function(prd){
      $scope.prd = prd.data;
    });
  });
})(app); 
app.controller("basicController", function($scope, $http){
    $http.get('json/basic.json').then(function(response){
        $scope.basicData = response.data;
    })
});
