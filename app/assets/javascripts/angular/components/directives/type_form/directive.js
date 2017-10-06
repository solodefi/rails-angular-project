(function () {
  'use strict';

  angular.module('app').directive('typeForm', typeForm);

  function typeForm() {
    return {
      restrict: 'E',
      scope: {
        model: '=model',
        form: '=form',
        includeConfirmation: '=includeConfirmation'
      },
      templateUrl: 'angular/components/directives/type_form/form.html'
    }
  }

})();
