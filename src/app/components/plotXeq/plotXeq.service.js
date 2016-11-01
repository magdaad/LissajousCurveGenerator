(function () {
  'use strict';

  angular
    .module('lissajous')
    .factory('PlotXeqService', PlotXeqService);

  /** @ngInject */
  function PlotXeqService($window) {

    var factory = {
      plotXequation: plotXequation
    };
    return factory;

    function plotXequation(A1, W1, phase) {
      var model = {};

      model.A1 = A1;
      model.W1 = W1;
      model.phase = phase;

      var domain = parseInt(model.A1);

      function getPlotWidth(){
        var plotwidth;
        var screenW = $window.innerWidth;
        if(screenW>=1000) {plotwidth = 650}
        else
        if(screenW>767) {plotwidth = 500}
        else
        if(screenW<=767){plotwidth = screenW - 50}

        return plotwidth
      }

      model.xequation = model.A1 + '*sin(' + model.W1 + '*x +' + model.phase + ')';

      functionPlot({
        target: '#firstEquation',
        yAxis: {domain: [-domain-1, domain+1]},
        xAxis: {domain: [-3, 3]},
        width:getPlotWidth(),
        data: [{
          fn: model.xequation
        }]
      });
    }

  }

})();

