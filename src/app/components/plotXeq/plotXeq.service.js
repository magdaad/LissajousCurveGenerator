(function () {
  'use strict';

  angular
    .module('lissajous')
    .factory('PlotXeqService', PlotXeqService);

  /** @ngInject */
  function PlotXeqService($log) {

    var factory = {
      plotXequation: plotXequation
    };
    return factory;

    function plotXequation(A1, W1, phase) {
      var model = {};

      model.A1 = A1;
      model.W1 = W1;
      model.phase = phase;

      $log.info(model.A1);

      //model.domainY = model.A1;
      //model.domainX = model.A1;

      model.xequation = model.A1 + '*sin(' + model.W1 + '*x +' + model.phase + ')';

      functionPlot({
        target: '#firstEquation',
        data: [{
          fn: model.xequation
        }]
      });
    }

    function displayError() {
      $log.debug('error');
    }

  }

})();

