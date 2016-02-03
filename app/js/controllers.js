'use strict';

/* Main App Controllers */

var appControllers = angular.module('appControllers',[]);

appControllers.controller('dashboardController', function($scope, $http) {

    $scope.depName = "Software Development";
    $scope.dashboardName = "Software Development Dashborad";
    $scope.date = new Date();

    $http.get('data/releasedata.json').success(function(data) {
       $scope.releaseData = data;
    });

    $http.get('data/upcomingreleases.json').success(function(data) {
       $scope.upcomingReleaseData = data;
    });
});

appControllers.controller('teamController', function($scope) {
    $scope.depName = "Software Development";
    $scope.dashboardName = "Team Falcon";
});

appControllers.controller('visionController', function($scope) {
    $scope.depName = "Software Development";
    $scope.dashboardName = "Vision";

});

appControllers.controller('methodologyController', function($scope) {
    $scope.depName = "Software Development";
    $scope.dashboardName = "Development Methodology";
});

appControllers.controller('architectureOverviewController', function($scope, $http) {
    $scope.depName = "Software Development";
    $scope.dashboardName = "Crown Connect Architecture Overview";

    $scope.onSelect = function(items) {
      // debugger;
      alert('select');
    };

    $scope.onClick = function(props) {
      //debugger;
      alert('Click');
    };

    $scope.onDoubleClick = function(props) {
      // debugger;
      alert('DoubleClick');
    };

    $scope.rightClick = function(props) {
      alert('Right click!');
      props.event.preventDefault();
    };

    $scope.options = {
      autoResize: true,
      height: '400',
      width: '100%'
    };

    $http.get('data/cc_version40.json').success(function(data) {
       $scope.ccversion40 = data;
    });

    $http.get('data/cc_version41.json').success(function(data) {
       $scope.ccversion41 = data;
    });

    $http.get('data/cc_version42.json').success(function(data) {
       $scope.ccversion42 = data;
    });

});

appControllers.controller('architectureTimeLineController', function($scope) {

    $scope.depName = "Software Development";
    $scope.dashboardName = "Crown Connect Architecture";

});

/* App Directives */
appControllers.directive('pageheader', function () {
    return {
        //This menas that it will be used as an attribute and NOT as an element. I don't like creating custom HTML elements
        restrict: 'A',
        replace: false,
        templateUrl: "partials/pageheader.htm"
    };
});

appControllers.directive('sidemenu', function () {
    return {
        //This menas that it will be used as an attribute and NOT as an element. I don't like creating custom HTML elements
        restrict: 'A',
        replace: false,
        templateUrl: "partials/sidemenu.htm"
    };
});
