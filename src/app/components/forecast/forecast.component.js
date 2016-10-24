(function () {
  'use strict';

  angular.module('lissajous')
    .component('forecast', {
      templateUrl: 'app/components/forecast/forecast.template.html',
      controller: function ForecastController(ForecastService, $scope, $rootScope, $log) {

        var searchStart = $rootScope.$on('search-start', function (event, search) {
          $log.warn(search);
            $scope.getWeather(search.A1,search.A2, search.W1, search.W2, search.phase);
          });

        $rootScope.$on('$destroy', searchStart);

        $scope.getWeather = function (A1, A2, W1, W2, phase) {
          ForecastService.getWeatherForecast(A1, A2, W1, W2, phase);
        };

        $scope.getWeather(5, 8, 8, 4, 150);

/*////////////////////////////////////////////////////////////////////////////////////////////////////
        $scope.first = 3;
        $scope.A1 = 3;
        $scope.A2 = 1;

        $scope.W1 = 9;
        $scope.W2 = 1;

        $scope.phase = 150;

        $scope.domainY = $scope.A2;
        $scope.domainX = $scope.A1;

        $scope.xequation = $scope.A1 + '*sin(' + $scope.W1 + '*t +' + $scope.phase + ')';
        $scope.yequation = $scope.A2 + '*sin(' + $scope.W2 + '*t)';

        var options = {
          target: '#demo',
          yAxis: {domain: [-$scope.domainY, $scope.domainY]},
          xAxis: {domain: [-$scope.domainX, $scope.domainX]},
          data: [{
            // x: 'sin(t) * (exp(cos(t)) - 2 cos(4t) - sin(t/12)^5)',
            // y: 'cos(t) * (exp(cos(t)) - 2 cos(4t) - sin(t/12)^5)',
            x: $scope.xequation,
            y: $scope.yequation,
            range: [-10 * Math.PI, 10 * Math.PI],
            fnType: 'parametric',
            graphType: 'polyline'
          }]
        };

        functionPlot(options);

        $scope.myFunc = function () {
          functionPlot(options);
        }*/

      }

    });
})();

