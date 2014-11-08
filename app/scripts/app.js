'use strict';

/**
 * @ngdoc overview
 * @name tweenLiteApp
 * @description
 * # tweenLiteApp
 *
 * Main module of the application.
 */
angular
  .module('tweenLiteApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/slideFade', {
        templateUrl: 'views/slidefade.html',
        controller: 'SlidefadeCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
