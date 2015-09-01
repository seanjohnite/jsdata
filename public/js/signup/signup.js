'use strict';

app.config(function($stateProvider) {

	$stateProvider.state('signup', {
		url: '/signup',
		templateUrl: 'js/signup/signup.html',
		controller: 'SignupCtrl'
	})
})

// add necessary dependencies here
app.controller('SignupCtrl', function($scope, User) {

  $scope.userCreated = false;

  $scope.sendSignup = function (signup) {
    console.log("signup:", signup);
    User.create(signup)
    .then(function () {
      $scope.userCreated = true;
    })
    .then(null, function (error) {
      console.error(error);
    });
  };

  /*
  TODOS: 
  1 - create the signup object for ng-modelling
  2 - create a `sendSignup` function that
      a) persists the user data 
      b) changes the state to  'create' while sending along important user data
      (HINT: $stateParams)

  */

})