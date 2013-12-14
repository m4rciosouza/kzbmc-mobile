'use strict';

angular.module('LocalStorageModule').value('prefix', 'kzbmc');
angular.module('kzbmcMobileApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'LocalStorageModule',
  'ui.sortable'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/canvas/:id', {
        templateUrl: 'views/canvas.html',
        controller: 'CanvasCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
