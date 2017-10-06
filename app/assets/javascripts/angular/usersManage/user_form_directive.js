(function () {
  'use strict';

  angular.module('app.usersManage').directive('userForm', userForm);

  function userForm() {
    return {
      restrict: 'E',
      controller: 'UserFormController',
      scope: {
        user: '=user',
        form: '=form',
        usertype: "=usertype"
      },
      templateUrl: 'angular/usersManage/_form.html'
    }
  }

})();
