(function() {
  'use strict';

  angular
    .module('lissajous')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
