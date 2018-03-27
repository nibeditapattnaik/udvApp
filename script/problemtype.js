var app = angular.module("appmodule",['ngRoute']);
            app.config(function($routeProvider){
                
                $routeProvider
                .when("/home", {
                    templateUrl : "templates/home.html",
                    controller : "appController"
                })
                .when("/about", {
                    templateUrl : "templates/about.html"
                })
                .when("/formulae", {
                    templateUrl : "templates/formulae.html"
                })
                .when("/course", {
                    templateUrl : "templates/course.html",
                    controller : "appController"
                })
                .when("/basic", {
                    templateUrl : "templates/basic.html",
                    controller : "problemtypeController"
                })
                .when("/combustion", {
                    templateUrl: "templates/combustion.html",
                    controller : "problemtypeController"
                })
                .when("/compressible", {
                    templateUrl : "templates/compressible.html",
                    controller : "problemtypeController"
                })
                .when("/discreteMethods", {
                    templateUrl : "templates/discreteMethods.html",
                    controller : "problemtypeController"
                })
                .when("/DNS", {
                    templateUrl : "templates/DNS.html",
                    controller : "problemtypeController"
                })
                .when("/electromagnetics", {
                    templateUrl : "templates/electromagnetics.html",
                    controller : "problemtypeController"
                })
                .when("/financial", {
                    templateUrl : "templates/financial.html",
                    controller : "problemtypeController"
                })
                .when("/heatTransfer", {
                    templateUrl: "templates/heattransfer.html",
                    controller : "problemtypeController"
                })
                .when("/incompressible", {
                    templateUrl : "templates/incompressible.html",
                    controller : "problemtypeController"
                })
                .when("/IO", {
                    templateUrl : "templates/IO.html",
                    controller : "problemtypeController"
                })
                .when("/lagrangian", {
                    templateUrl : "templates/lagrangian.html",
                    controller : "problemtypeController"                
                })
                .when("/mesh", {
                    templateUrl: "templates/mesh.html",
                    controller : "problemtypeController"
                })
                .when("/multiphase", {
                    templateUrl : "templates/multiphase.html",
                    controller : "problemtypeController"
                })
                .when("/problemtype", {
                    templateUrl : "templates/problemtype.html",
                    controller : "problemtypeController"
                })
                .when("/resources", {
                    templateUrl : "templates/resources.html",
                    controller : "problemtypeController"
                })
                .when("/stressAnalysis", {
                    templateUrl : "templates/stressAnalysis.html",
                    controller : "problemtypeController"
                })
                /*.when("/heatTransfer", {
                    templateUrl: "templates/combustion.html",
                    controller : "appController"
                })
                .when("/incompressible", {
                    templateUrl : "templates/heattransfer.html",
                    controller : "appController"
                })*/
                .otherwise({template: '<h3><strong>Welcome to <h1>udvProduct</h1></strong></h3>'});
            });
                app.controller("appController", function($scope,$http,$routeParams){
                    console.log($routeParams);
                    $http.get('json/problemtype.json').then(function(response){
                        $scope.appData = response.data;
                        console.log($scope.appData[1].problemtype);
                        console.log(response);
                                });

                   $http.get('json/sidebar.json').then(function(response){
                        $scope.barData = response.data;
                        console.log($scope.barData);
                        console.log(response);
                    });
                    $http.get('php/course.php').then(function(response) {
                            $scope.nameData=response.data.records;
                            console.log(response);
                            console.log(response.data);
                            console.log(response.data.records);
                            //console.log($scope.nameData.length);
                    });
            })
                .controller("problemtypeController", function($scope, $http){
                    $http.get('json/basic.json').then(function(response){
                        $scope.basicData = response.data;
                    })
                    $http.get('json/combustion.json').then(function(response){
                        $scope.combustionData = response.data;
                        //console.log($scope.combustionData);
                    })
                    $http.get('json/compressible.json').then(function(response){
                        $scope.compressibleData = response.data;
                        //console.log($scope.compressibleData);
                    })
                    $http.get('json/discreteMethods.json').then(function(response){
                        $scope.discreteData = response.data;
                        //console.log($scope.discreteData);
                    })
                    $http.get('json/DNS.json').then(function(response){
                        $scope.DNSData = response.data;
                        //console.log($scope.DNSData);
                    })
                    $http.get('json/electromagnetics.json').then(function(response){
                        $scope.emagneticsData = response.data;
                        //console.log($scope.emagneticsData);
                    })
                    $http.get('json/financial.json').then(function(response){
                        $scope.financialData = response.data;
                        //console.log($scope.financialData);
                    })
                    $http.get('json/heatTransfer.json').then(function(response){
                        $scope.heatData = response.data;
                      //  console.log($scope.heatData);
                    })
                    $http.get('json/incompressible.json').then(function(response){
                        $scope.incompData = response.data;
                        console.log($scope.incompData);
                    })
                    $http.get('json/IO.json').then(function(response){
                        $scope.IOData = response.data;
                       // console.log($scope.IOData);
                    })
                    $http.get('json/lagrangian.json').then(function(response){
                        $scope.lagrangianData = response.data;
                        //console.log($scope.lagrangianData);
                    })
                    $http.get('json/mesh.json').then(function(response){
                        $scope.meshData = response.data;
                        //console.log($scope.meshData);
                    })
                    $http.get('json/multiphase.json').then(function(response){
                        $scope.multiphaseData = response.data;
                        //console.log($scope.multiphaseData);
                    })
                    $http.get('json/problemtype.json').then(function(response){
                        $scope.problemtypeData = response.data;
                        //console.log($scope.problemtypeData);
                    })
                    $http.get('json/resources.json').then(function(response){
                        $scope.resourcesData = response.data;
                        //console.log($scope.resourcesData);
                    })
                    $http.get('json/stressAnalysis.json').then(function(response){
                        $scope.stressData = response.data;
                        //console.log($scope.stressData);
                    })
                });
                
    
   /* $scope.removeName = function(row){
        $scope.appData.splice($scope.appData.indexOf(row),1);
    }
    */
