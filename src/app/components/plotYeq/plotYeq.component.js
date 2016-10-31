(function () {
  'use strict';

  angular.module('lissajous')
    .component('plotYeq', {
      templateUrl: 'app/components/plotYeq/plotYeq.template.html',
      controller: function plotYeqController(PlotYeqService, $scope, $rootScope, $log) {

        var searchStart = $rootScope.$on('search-start', function (event, result) {
          $log.warn(result);
            $scope.plotY(result.A2, result.W2);
          $scope.A2=result.A2;
          $scope.W2=result.W2;
          });

        $rootScope.$on('$destroy', searchStart);

        $scope.plotY = function (A2, W2) {
          PlotYeqService.plotYequation(A2, W2);
        };

        $scope.A2=8;
        $scope.W2=4;

        $scope.plotY(8, 4);

      }

    });
})();

