'use strict'; 

app.config(function($stateProvider) {
	$stateProvider.state('post', {
		url: '/post/:postId',
		templateUrl: 'js/post/post.html',
		controller: 'PostCtrl'
		, 
		resolve: {
			users: function(User){
				// GET - > '/api/users'
				return User.findAll();
			},
			post: function (Post, $stateParams) {
				return Post.find($stateParams.postId);
			}
		}
	})
});


// add necessary dependencies 
app.controller('PostCtrl', function($scope, $stateParams, $state, Post, users, post) {


	/* 1. FIND POST
		use state params to retrieve the post id and attach post object to scope 
		on controller load 
	*/
	$scope.post = post;

	/*
		2. DELETE POST 
		create a function that destroys the post, adds an alert that the post has been 
		successfully deleted, and redirects to the main state. 
	*/
	$scope.deletePost = function () {
		Post.destroy($stateParams.postId)
		.then(function () {
			$state.go("main");
		})
		.catch(function (error) {
			console.error(error);
		});
	};




	/*
		3. EDIT POST 
		create a function that edits the post, adds an alert that the post has been 
		successfully edited, and displays the edited post.  

	*/

})