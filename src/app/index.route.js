(function() {
  'use strict';

  angular
    .module('lissajous')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
      templateUrl: 'app/main/main.html'
    })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
