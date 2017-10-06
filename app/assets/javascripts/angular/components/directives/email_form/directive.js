(function () {
  'use strict';

  angular.module('app').directive('emailForm', emailForm);

  function emailForm() {
    return {
      restrict: 'E',
      scope: {
        model: '=model',
        form: '=form'
      },
      templateUrl: 'angular/components/directives/email_form/form.html'
    }
  }

})();
