//creating a module
var app = angular.module("mymodule",[]);

//creating controller
app.controller("mycontroller", function($scope){
//$scope represents the current model 
$scope.employee = { "empid":101, "empname":"scott", "salary":10000};
$scope.student = { "studentid": 101, "studentname": "john","marks": 80}; 
});