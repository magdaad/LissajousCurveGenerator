(function () {
  'use strict';

  angular.module('lissajous')
    .component('lissajousCurve', {
      templateUrl: 'app/components/lissajousCurve/lissajousCurve.template.html',
      controller: function LissajousCurveController(LissajousCurveService, $scope, $window, $rootScope, $log) {

        var searchStart = $rootScope.$on('search-start', function (event, search) {
          $log.warn(search);
          $scope.A1 = search.A1;
          $scope.W1 = search.W1;
          $scope.phase = search.phase;
          $scope.A2 = search.A2;
          $scope.W2 = search.W2;
          $scope.plotLissajousCurve(search.A1, search.A2, search.W1, search.W2, search.phase);
        });


        $rootScope.$on('$destroy', searchStart);

        $scope.plotLissajousCurve = function (A1, A2, W1, W2, phase) {
          LissajousCurveService.plotLissajousCurve(A1, A2, W1, W2, phase);
        };

        $scope.A1 = 5;
        $scope.W1 = 5;
        $scope.phase = 150;
        $scope.A2 = 8;
        $scope.W2 = 8;

        $scope.plotLissajousCurve($scope.A1, $scope.A2, $scope.W1, $scope.W2, $scope.phase);

        angular.element($window).bind('resize', function () {
          $scope.plotLissajousCurve($scope.A1, $scope.A2, $scope.W1, $scope.W2, $scope.phase);
        })
      }

    });
})();

