(function() {
  'use strict';

  angular
    .module('govhack2015')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
