angular.module('listings').factory('Listings', ['$http', 
  function($https) {
    var methods = {
      getAll: function() {
        return $https.get('https://stark-savannah-38279.herokuapp.com/api/listings');
      },

      create: function(listing) {
        return $https.post('https://stark-savannah-38279.herokuapp.com/api/listings', listing);
      }, 

      read: function(id) {
        return $https.get('https://stark-savannah-38279.herokuapp.com/api/listings/' + id);
      }, 

      update: function(id, listing) {
        return $https.put('https://stark-savannah-38279.herokuapp.com/api/listings/' + id, listing);
      }, 

      delete: function(id) {
        return $https.delete('https://stark-savannah-38279.herokuapp.com/api/listings/' + id);
      }
    };

    return methods;
  }
]);