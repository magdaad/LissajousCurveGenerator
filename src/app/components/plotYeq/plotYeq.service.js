(function () {
  'use strict';

  angular
    .module('lissajous')
    .factory('PlotYeqService', PlotYeqService);

  /** @ngInject */
  function PlotYeqService($log) {

    var factory = {
      plotYequation: plotYequation
    };
    return factory;

    function plotYequation(A2, W2) {
      var model = {};

      model.A2 = A2;
      model.W2 = W2;

      $log.info(model.A2);

      //model.domainY = model.A1;
      //model.domainX = model.A1;

      model.yequation = model.A2 + '*sin(' + model.W2 + '*x)';

      functionPlot({
        target: '#secondEquation',
        data: [{
          fn: model.yequation
        }]
      });
    }

    function displayError() {
      $log.debug('error');
    }

  }

})();

