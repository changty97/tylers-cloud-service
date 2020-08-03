var app = angular.module('myApp', ['ngRoute', 'ngCookies']);

//This service to keep track of the Movie Title's for each page
//By setting a movie title it allows the page to dynamically change the local variable movie_title
app.service('sharedProperties', function () {
    var title = [];

    return {
        getProperty: function () {
            return title;
        },
        setProperty: function(value) {
            title = value;
            // for(var i = 0; i < 5; i++) {
            //     console.log(i);
            //     if(title[i] == null) {
            //         console.log(title[i]);
            //         title[i] = value;
            //     } else {
            //         console.log(title[i]);
            //         title[i+1] = value;
            //     }
            // }
        }
    };
});

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
 
.when('/movie', {
    templateUrl : 'pages/third.html',
    controller : 'ThirdController'
})

.otherwise({redirectTo: '/'});
});

app.controller('FirstController', function($scope, sharedProperties) {
    $scope.message = "Welcome to Tyler's Cloud Service";

    function setMovieTitle($title) {
        sharedProperties.setProperty($title);
        $scope.movie_title = sharedProperties.getProperty();
    }

    setMovieTitle("Harry Potter and the Philosopher's Stone (2001)");
    setMovieTitle("Harry Potter and the (2002)");
    
});
     
app.controller('SecondController', function($scope, $cookies) {

    $scope.SetCookies = function () {
        $cookies.put("username", 'changt');
        console.log($cookies);
    };

    $scope.GetCookies = function () {
        console.log($cookies.get('username'));
    };

    $scope.ClearCookies = function () {
        $cookies.remove('username');
    };
});
     
app.controller('ThirdController', function($scope, sharedProperties) {
    $scope.movie_title = sharedProperties.getProperty();
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

// https://stackoverflow.com/questions/35691498/add-buttons-dynamically-which-also-add-textboxes-dynamically-angularjs
// app.controller('MainCtrl', function($scope) {

//     $scope.choicesA = [{
//       id: 'choice1',
//       choicesB:[]
//     }, {
//       id: 'choice2',
//       choicesB:[]
//     }];
  
  
//     $scope.addNewChoice = function() {
//       var newItemNo = $scope.choicesA.length + 1;
//       $scope.choicesA.push({
//         'id': 'choice' + newItemNo,
//         choicesB:[]
//       });
//     };
  
//     $scope.removeChoice = function(ind) {
//       $scope.choicesA.splice(ind,1);
//     };
  
//     $scope.addNewChoiceB = function(choice) {
//       var newItemNo = choice.choicesB.length + 1;
//       choice.choicesB.push({
//         'id': 'choice' + newItemNo
//       });
//     };
  
//     $scope.removeChoiceB = function(choice,ind) {
//       choice.choicesB.splice(ind,1);
//     };
  
//   });