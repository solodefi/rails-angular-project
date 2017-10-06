(function () {
  'use strict';

  angular.module('app.jogs').factory('jogService', jogService);

  function jogService($resource) {

    var resourceForUser = function (userId) {
      return $resource('/api/users/:user_id/jogs/:id.json', { id: '@id', user_id: userId }, {
        update: {
          method: 'PATCH'
        }});
    };

    return {
      resourceForUser: resourceForUser
    }
  }

})();
