(function () {
  'use strict';

  angular.module('app').directive('passwordForm', passwordForm);

  function passwordForm() {
    return {
      restrict: 'E',
      scope: {
        model: '=model',
        form: '=form',
        includeConfirmation: '=includeConfirmation'
      },
      templateUrl: 'angular/components/directives/password_form/form.html'
    }
  }

})();
