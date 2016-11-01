(function () {
  'use strict';

  angular.module('lissajous')
    .component('plotYeq', {
      templateUrl: 'app/components/plotYeq/plotYeq.template.html',
      controller: function plotYeqController(PlotYeqService, $window, $scope, $rootScope) {

        var searchStart = $rootScope.$on('search-start', function (event, result) {
          $scope.plotY(result.A2, result.W2);
          $scope.A2 = result.A2;
          $scope.W2 = result.W2;
        });

        $rootScope.$on('$destroy', searchStart);

        $scope.plotY = function (A2, W2) {
          PlotYeqService.plotYequation(A2, W2);
        };

        $scope.A2 = 8;
        $scope.W2 = 8;

        $scope.plotY($scope.A2, $scope.W2);

        angular.element($window).bind('resize', function () {
          $scope.plotY($scope.A2, $scope.W2);
        })

      }

    });
})();

