(function () {
  'use strict';

  angular
    .module('lissajous')
    .factory('ForecastService', ForecastService);

  /** @ngInject */
  function ForecastService($http, $q, $log) {

    var factory = {
      getWeatherForecast: getWeatherForecast
    };
    return factory;

    function getWeatherForecast(A1, A2, W1, W2, phase) {
      var model = {};

      model.A1 = A1;
      model.A2 = A2;
      model.W1 = W1;
      model.W2 = W2;
      model.phase = phase;

      $log.info(model.A1);
      $log.info(model.A2);

      model.domainY = model.A2;
      model.domainX = model.A1;

      model.xequation = model.A1 + '*sin(' + model.W1 + '*t +' + model.phase + ')';
      model.yequation = model.A2 + '*sin(' + model.W2 + '*t)';

      var options = {
        target: '#demo',
        yAxis: {domain: [-model.domainY, model.domainY]},
        xAxis: {domain: [-model.domainX, model.domainX]},
        data: [{
         //  x: 'sin(t) * (exp(cos(t)) - 2 cos(4t) - sin(t/12)^5)',
          // y: 'cos(t) * (exp(cos(t)) - 2 cos(4t) - sin(t/12)^5)',
          x: model.xequation,
          y: model.yequation,
          fnType: 'parametric',
          graphType: 'polyline'
        }]
      };

      var Xoptions = {
        target: '#demo',
        yAxis: {domain: [-model.domainY, model.domainY]},
        xAxis: {domain: [-model.domainX, model.domainX]},
        data: [{
          //  x: 'sin(t) * (exp(cos(t)) - 2 cos(4t) - sin(t/12)^5)',
          // y: 'cos(t) * (exp(cos(t)) - 2 cos(4t) - sin(t/12)^5)',
          x: model.xequation,
          y: model.yequation,
          fnType: 'parametric',
          graphType: 'polyline'
        }]
      };

     functionPlot(options);

      functionPlot({
        target: '#firstEquation',
        data: [{
          fn: model.A1 + '*sin(' + model.W1 + '*x +' + model.phase + ')'
        }]
      });

      functionPlot({
        target: '#secondEquation',
        data: [{
          fn: model.A2 + '*sin(' + model.W2 + '*x)'
        }]
      });

    }

    function displayError() {
      $log.debug('error');
    }

  }

})();

