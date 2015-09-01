'use  strict';

app.factory('User', function(DS) {
	
  /*
    create a User jsdata resource 
  */

  var user = DS.defineResource({
    name: 'users',
    relations: {
      hasMany: {
        posts: {
          localField: 'posts',
          foreignKey: 'author'
        }
      }
    }
  });

  return user;

}).run(function(User) {});

