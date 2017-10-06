(function () {
  'use strict';

  angular.module('app').run(run);

  function run($rootScope, $location, $state) {
    $rootScope.$on("$stateChangeError", function (event, toState, toParams, fromState, fromParams, error) {
      if (error && !error.authenticated) {
        $state.go('login');
      }
    })
  }

})();