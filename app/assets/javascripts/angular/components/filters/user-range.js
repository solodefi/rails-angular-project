(function () {
  'use strict';

  angular.module('app').filter('userRange', userRange);

  function userRange() {
    return function (items, user_type) {
      return items.filter(function (item) {
        if(user_type == "administrator")
          return true;
        else if(user_type == "user_manager"){
          return item.user_type == "regular";
        } 
        else{
         return false; 
        }
      });
    };
  }

})();
