(function() {
  'use strict';

  angular
    .module('govhack2015')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController() {
    var vm = this;

    vm.map = {
      zoom : 14,
      center : {
        lng: -0.135559,
        lat: 51.513872
      }
    };
  }
})();
