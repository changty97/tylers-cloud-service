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

app.controller('MyCtrl',['$scope',function($scope)
 {
    $scope.firstPage = function() {
        // if(document.getElementById('navbar')) {
            console.log('hello');
        // }
    }
}]);

app.controller('FirstController', function($scope) {
    $scope.message = "Welcome to Tyler's Cloud Service";
});
     
app.controller('SecondController', function($scope) {
    $scope.message = 'Hello from SecondController';
});
     
app.controller('ThirdController', function($scope) {
    $scope.message = 'Hello from ThirdController';
});

app.controller('myController', function ($scope) {
    $scope.isDisabled = false;
    $scope.Second = true;
    $scope.save = function () {
      $scope.isDisabled = true;
      $scope.firts =true;
      $scope.Second = false;
    }
});