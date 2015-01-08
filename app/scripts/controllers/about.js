'use strict';

/**
 * @ngdoc function
 * @name clsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the clsApp
 */
angular.module('clsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
