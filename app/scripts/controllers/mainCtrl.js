/**
 * @ngdoc function
 * @name clsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clsApp
 */
angular.module('clsApp').controller('MainCtrl', function ($scope, $sce) {
    'use strict';

    function getLocations(locations, searchType, query) {
        var locArr = locations.replace(/ /g, '').split(',');
        return locArr.map(function (loc) {
            return $sce.trustAsResourceUrl('http://' + loc + '.craigslist.org/search/' + searchType + '?' + query);
        });
    }

    function computeUrlsArr() {
        $scope.model.urlsArr = getLocations($scope.model.locations, $scope.model.searchType, $scope.model.query);
    }

    function onTyping(evt) {
        if (evt.which === 13) {
            computeUrlsArr();
        }
    }

    $scope.model = {
        locations: 'sfbay,losangeles,phoenix,dallas,denver',
        urlsArr: [],
        searchType: 'mcy',
        query: 'query=r1200gs'
    };

    $scope.onTyping = onTyping;

    computeUrlsArr();
});
