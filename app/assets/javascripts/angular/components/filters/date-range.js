(function () {
  'use strict';

  angular.module('app').filter('dateRange', dateRange);

  function dateRange() {
    return function (items, field, rangeDescriptor, fromDate, toDate) {
      return items.filter(function (item) {
        var date = new Date(item[field]);
        if (rangeDescriptor === 'custom'){
          var _toDate = new Date(toDate);
          var _fromDate = new Date(fromDate);
          return (date < _toDate && date > _fromDate);
        } else if (rangeDescriptor === 'all') {
          return true;
        }
      });
    };
  }

})();
