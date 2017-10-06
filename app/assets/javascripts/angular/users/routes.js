(function () {
  'use strict';

  angular.module('app.users').config(config);

  function config($stateProvider, $urlRouterProvider) {
    $stateProvider.state('createUser', {
      url: '',
      templateUrl: 'angular/users/_form.html'
    })
  }

})();
