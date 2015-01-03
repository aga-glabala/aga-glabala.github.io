'use strict';

angular.module('home.background', [])
  .directive('background', [function() {
    return {
      replace: true,
      templateUrl: 'partials/directives/background.html',
      controller: ['$scope', function($scope) {
        var count = 20;
        var colors = ['#2196F3', '#00BCD4', '#009688', '#4CAF50', '#CDDC39', '#FFEB3B',
            '#FFC107', '#FF5722', '#E91E63', '#E91E63', '#4DB6AC',
            '#81C784', '#FFF176', '#B2FF59', '#FF4081', '#2E7D32', '#2E7D32'];
        $scope.dots = [];

        for(var i = 0; i < count; i++) {
            $scope.dots.push({x: Math.random() * 100, y: Math.random() * 100, color: colors[i % colors.length]});
        }
      }]
    }
  }]);