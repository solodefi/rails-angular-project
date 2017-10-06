(function () {
  'use strict';

  angular.module('app.jogs').directive('jogForm', jogForm);

  function jogForm() {
    return {
      restrict: 'E',
      controller: 'JogFormController',
      scope: {
        jog: '=jog'
      },
      templateUrl: 'angular/jogs/_form.html'
    }
  }

})();
