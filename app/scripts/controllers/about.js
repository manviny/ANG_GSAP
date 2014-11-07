'use strict';

/**
 * @ngdoc function
 * @name tweenLiteApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the tweenLiteApp
 */
angular.module('tweenLiteApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
