(function () {
  'use strict';

  angular.module('app').directive('floatConverter', floatConverter);

  function floatConverter() {
    return {
      restrict: 'A',
      require: 'ngModel',
      priority: 1,
      link: function (scope, element, attr, ngModel) {

        function toModel(value) {
          return "" + value; // convert to string
        }

        function toView(value) {
          return parseFloat(value); // convert to number
        }

        ngModel.$formatters.push(toView);
        ngModel.$parsers.push(toModel);
      }
    };
  }

})();
