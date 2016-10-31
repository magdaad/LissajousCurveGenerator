(function () {
  'use strict';

  angular.module('lissajous')
    .component('lissajousCurve', {
      templateUrl: 'app/components/lissajousCurve/lissajousCurve.template.html',
      controller: function LissajousCurveController(LissajousCurveService, $scope, $rootScope, $log) {

        var searchStart = $rootScope.$on('search-start', function (event, search) {
          $log.warn(search);
            $scope.plotLissajousCurve(search.A1,search.A2, search.W1, search.W2, search.phase);
          $scope.A1= search.A1;
          });



        $rootScope.$on('$destroy', searchStart);

        $scope.plotLissajousCurve = function (A1, A2, W1, W2, phase) {
          LissajousCurveService.plotLissajousCurve(A1, A2, W1, W2, phase);
        };

        $scope.plotLissajousCurve(5, 8, 8, 4, 150);

      }

    });
})();

