(function () {
  'use strict';

  angular.module('app')
    .factory('authenticationHttpInterceptor', interceptor)
    .config(config);

  function interceptor(currentUserService) {
    return {
      request: function (config) {
        var currentUser = currentUserService.getCurrentUser();
        if (currentUser) {
          config.headers.Authorization = 'Token token="' + currentUser.token + '"';
        }
        return config;
      }
    };
  }

  function config($httpProvider) {
    $httpProvider.interceptors.push('authenticationHttpInterceptor');
  }

})();
