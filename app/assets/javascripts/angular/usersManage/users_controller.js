(function () {
  'use strict';

  angular.module('app.usersManage').controller('UsersController', UsersController);

  function UsersController($scope, userService, $state) {
    var vm = this;

    var userResource = userService.resource($scope.currentUserService.getCurrentUser());
    var updateResource;
    
    $scope.currentUserService.setManageJog(null);
    vm.user_type = $scope.currentUserService.getCurrentUser().user_type;
    vm.users = userResource.query();

    vm.new = function () {
      vm.newUser = {
        email: "new@example.com",
        password: "password"
      };
    };

    vm.newCancel = function () {
      vm.newUser = null;
    };

    vm.create = function () {
      var user_info={
       user:{
          email: vm.newUser.email,
          password: vm.newUser.password,
          password_confirmation: vm.newUser.password,
          user_type: vm.newUser.type
       }
      };
      if( vm.newUser.type == null)
        user_info.user.user_type = "regular";

      var user = userResource.save(user_info);

      vm.users.push(user);
      vm.newUser = null;
    };

    vm.edit = function (user) {
      updateResource = userService.resource(user);
      vm.editedUserMarker = user;
      vm.clonedUser = angular.extend({}, user);
      vm.clonedUser.type = vm.clonedUser.user_type;
    };
    vm.editJog = function (user) {
      $scope.currentUserService.setManageJog(user);
      $state.go('jogs');
    };

    vm.editCancel = function () {
      vm.editedUserMarker = null;
      vm.clonedUser = null;
    };

    vm.update = function () {
      var user_info={
       user:{
          email: vm.clonedUser.email,
          password: vm.clonedUser.password,
          password_confirmation: vm.clonedUser.password,
          user_type: vm.clonedUser.type
       }
      };
      vm.clonedUser.user_type = vm.clonedUser.type;
      updateResource.update(user_info);
      vm.users.splice(vm.users.indexOf(vm.editedUserMarker), 1, vm.clonedUser);
      vm.editedUserMarker = null;
      vm.clonedUser = null;
    };

    vm.destroy = function (user) {
      var destroyResource = userService.resource(user);
      destroyResource.delete();
      vm.users.splice(vm.users.indexOf(user), 1);
    }
  }

})();
