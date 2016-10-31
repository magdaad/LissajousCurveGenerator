(function () {
  'use strict';

  angular
    .module('lissajous')
    .factory('LissajousCurveService', LissajousCurveService);

  /** @ngInject */
  function LissajousCurveService($log) {

    var factory = {
      plotLissajousCurve: plotLissajousCurve
    };
    return factory;

    function plotLissajousCurve(A1, A2, W1, W2, phase) {
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

        functionPlot(options);
    }

    function displayError() {
      $log.debug('error');
    }

  }

})();

