'use strict';

/* App Module */

var softwareDevApp = angular.module('softwareDevApp', [
    'ngRoute',
    'ngVis',
    'n3-line-chart',
    'nvd3',
    'appControllers'
]);

softwareDevApp.config(['$routeProvider',
     function($routeProvider) {
       $routeProvider.
         when('/', {
             templateUrl: 'partials/dashboard.htm',
             controller: 'dashboardController'
         }).
         when('/Vision', {
             templateUrl: 'partials/vision.htm',
             controller: 'visionController'
         }).
         when('/Methodology', {
             templateUrl: 'partials/methodology.htm',
             controller: 'methodologyController'
         }).
         when('/ArchitectureOverview', {
             templateUrl: 'partials/architectureOverview.htm',
             controller: 'architectureOverviewController'
         }).
         when('/ArchitectureTimeLine', {
             templateUrl: 'partials/architectureTimeLine.htm',
             controller: 'architectureTimeLineController'
         }).
         when('/TeamFalcon', {
             templateUrl: 'partials/team.htm',
             controller: 'teamController'
         }).
         otherwise({
          redirectTo: '/'
         });
 }]);
