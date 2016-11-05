(function () {
  'use strict';

  angular
    .module('lissajous')
    .factory('PlotYeqService', PlotYeqService);

  /** @ngInject */
  function PlotYeqService($window) {

    var factory = {
      plotYequation: plotYequation
    };
    return factory;

    function plotYequation(A2, W2) {
      var model = {};

      model.A2 = A2;
      model.W2 = W2;

      var domain = parseInt(model.A2);
      model.yequation = model.A2 + '*sin(' + model.W2 + '*x)';


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

      //noinspection JSUnresolvedFunction
      functionPlot({
        target: '#secondEquation',
        yAxis: {domain: [-domain - 1, domain + 1]},
        xAxis: {domain: [-3, 3]},
        height:355,
        width:getPlotWidth(),
        data: [{
          fn: model.yequation
        }]
      });
    }

  }

})();

