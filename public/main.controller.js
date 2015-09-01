'use strict';

app.config(function($stateProvider) {
	$stateProvider.state('main', {
		url: '/',
		templateUrl: '/main.html',
		controller: 'MainController',
		resolve: {
			posts: function (Post) {
				return Post.findAll();
			},
			users: function(User){
				// GET - > '/api/users'
				return User.findAll();
			}			
		}
			// RESOLVE!
	})
})

app.controller('MainController', function($scope, posts) {

	$scope.allPosts = posts;

 	/*
		TODOS: 
		1 - use js-data to retrieve all users and all posts
		(HINT: if you want to be fancy, add a resolve block to this state 
		and retrieve the data there)

 	*/
})


