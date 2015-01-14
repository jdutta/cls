'use strict';

/**
 * @ngdoc overview
 * @name clsApp
 * @description
 * # clsApp
 *
 * Main module of the application.
 */
angular
    .module('clsApp', [
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
            .otherwise({
                redirectTo: '/'
            });
    });
