(function () {
  'use strict';

  angular.module('app.login').controller('LoginController', LoginController);

  LoginController.$inject = ['$scope', 'loginService', '$state'];

  function LoginController($scope, loginService, $state) {
    var vm = this;

    vm.credentials = {};

    vm.login = function () {
      var promise = loginService.login(vm.credentials.email, vm.credentials.password);

      promise.then(
        function (result) {

          $scope.currentUserService.setCurrentUser(result.data);

          $scope.showAlert('Logged in successfully.');

          var currentUser = $scope.currentUserService.getCurrentUser();

          if (currentUser && currentUser.user_type == "regular") {
            $state.go('jogs');
          } else if (currentUser && (currentUser.user_type == "user_manager" ||  currentUser.user_type == "administrator") ) {
            $state.go('usersManage');
          }
          

        }, function (err) {
          $scope.showAlert('Incorrect email or password.', 'danger');
        });
    };

    vm.logout = function () {
      var promise = loginService.logout();
      promise.finally(
        function (result) {
          $scope.currentUserService.setCurrentUser(null);
          $scope.currentUserService.setManageJog(null);
          $scope.showAlert('Logged out successfully, bye!');
          $state.go('login');
        });
    };
  }

})();
