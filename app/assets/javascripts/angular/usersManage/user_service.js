(function () {
  'use strict';

  angular.module('app.usersManage').factory('userService', userService);

  function userService($resource) {

    var resource = function (user) {
      return $resource('/api/users/:id.json', { id: user.id }, {
        update: {
          method: 'PATCH'
        }});
    };

    return {
      resource: resource
    }
  }

})();
