'use strict';

/**
 * @ngdoc function
 * @name clsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clsApp
 */
angular.module('clsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
