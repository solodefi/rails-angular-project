angular.module('app',
  [
    'ui.bootstrap',
    'ui.router',
    'templates',
    'ngMessages',

    'app.jogs',
    'app.login',
    'app.report',
    'app.users',
    'app.usersManage'
  ]);

angular.module('app.jogs', [
  'ui.bootstrap.datetimepicker',
  'ngResource'
]);

angular.module('app.login', []);
angular.module('app.report', []);
angular.module('app.users', []);
angular.module('app.usersManage', []);
