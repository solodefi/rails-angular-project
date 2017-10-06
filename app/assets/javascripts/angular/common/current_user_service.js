(function () {
  'use strict';

  angular.module('app').factory('currentUserService', currentUserService);

  function currentUserService($window) {
    var currentUser = null;
    var manageJog = null;

    function getCurrentUser() {
      return currentUser;
    }

    function setCurrentUser(user) {
      currentUser = user;
      if (user) {
        $window.sessionStorage["currentUser"] = JSON.stringify(currentUser);
      } else {
        $window.sessionStorage["currentUser"] = null;
      }
    }

    function setManageJog(joguser) {
      manageJog = joguser;
      if (joguser) {
        $window.sessionStorage["manageJog"] = JSON.stringify(joguser);
      } else {
        $window.sessionStorage["manageJog"] = null;
      }
    }
    function getManageJog(){
      return manageJog;
    }

    function init() {
      if ($window.sessionStorage["currentUser"]) {
        currentUser = JSON.parse($window.sessionStorage["currentUser"]);
      }
      if ($window.sessionStorage["manageJog"]) {
        manageJog = JSON.parse($window.sessionStorage["manageJog"]);
      }
    }

    init();

    return {
      setCurrentUser: setCurrentUser,
      getCurrentUser: getCurrentUser,
      setManageJog: setManageJog,
      getManageJog: getManageJog
    };
  }

})();