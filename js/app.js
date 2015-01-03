'use strict';

angular.module('home', [
  'ui.router',
  'foundation',
  'oc.lazyLoad',
  'home.background'
]).config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
   $urlRouterProvider.otherwise("/");
   $stateProvider
    .state('index', {
      url: "/",
      templateUrl: "partials/index.html"
    });
}]);
