'use strict';

app.factory('Post', function(DS, $state) {

	/*

		TODOS: 
		1) create a js-data POST resource that establishes a relationship 
		between posts and users

		2) add a methods object to the resource
				a) add a `go` method that takes each post to the individual post page 
				(HINT: see post.js)
  */

  var Post = DS.defineResource({
    name: 'posts',
    relations: {
      belongsTo: {
        users: {
          localField: 'author',
          localKey: 'authorId'
        }
      }
    },
    methods: {
      go: function () {
        $state.go('post', {postId: this._id});
      }
    }
  });

  return Post;

})
.run(function(Post) {});

