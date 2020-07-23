var app = angular.module('myApp', ['ngRoute']);
 
app.config(function($routeProvider) {
$routeProvider
 
.when('/', {
templateUrl : 'pages/first.html',
controller : 'FirstController'
})
 
.when('/login', {
templateUrl : 'pages/second.html',
controller : 'SecondController'
})
 
.when('/about', {
templateUrl : 'pages/third.html',
controller : 'ThirdController'
})
 
.otherwise({redirectTo: '/'});
});

app.controller('FirstController', function($scope) {
    $scope.message = 'Hello from FirstController';
});
     
app.controller('SecondController', function($scope) {
    $scope.message = 'Hello from SecondController';
});
     
app.controller('ThirdController', function($scope) {
    $scope.message = 'Hello from ThirdController';
});