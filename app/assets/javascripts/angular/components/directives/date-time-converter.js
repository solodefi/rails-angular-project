(function () {
  'use strict';

  angular.module('app').directive('datetimeConverter', datetimeConverter);

  function datetimeConverter($filter) {
    return {
      restrict: 'A',
      require: 'ngModel',
      priority: 1,
      link: function (scope, element, attr, ngModel) {

        function toModel(value) {
          return moment(value).toISOString();
        }

        function toView(value) {
          return $filter('date')(value, 'short'); // reformat date
        }

        ngModel.$formatters.push(toView);
        ngModel.$parsers.push(toModel);
      }
    };
  }

})();