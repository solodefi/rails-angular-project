(function () {
  'use strict';

  angular.module('app').controller('GenericFormController', GenericFormController);

  function GenericFormController($scope) {
    var vm = this;
    vm.error = function (name) {
      var f = $scope.form[name];
      return f.$invalid && f.$dirty ? "has-error" : "";
    };
  }

})();
