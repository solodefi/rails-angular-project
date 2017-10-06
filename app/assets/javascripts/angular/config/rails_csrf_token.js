// Configure API calls to work properly with Rails.

(function () {
  'use strict';

  angular.module('app').config(config);

  function config($httpProvider, $locationProvider) {
    var defaults = $httpProvider.defaults;
    defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
    $locationProvider.hashPrefix('');
  }

})();
