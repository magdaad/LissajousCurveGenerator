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

      .when('/forecast', {
        template:' <forecast></forecast>'
      })

      .otherwise({
        redirectTo: '/'
      });
  }

})();
