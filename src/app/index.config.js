(function() {
  'use strict';

  angular
    .module('govhack2015')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastr, MapConfigProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastr.options.timeOut = 3000;
    toastr.options.positionClass = 'toast-top-right';
    toastr.options.preventDuplicates = true;
    toastr.options.progressBar = true;

    MapConfigProvider.setOptions({
        appId: 'jbjMu5QQ2zgxPfSZCLHy',
        appCode: 'uHHw2vd6q-nCsqyU3KXPFw',
        libraries: 'ui,mapevents,pano',
        pixelRatio: 2, // Optional (Default: 1)
        pixelPerInch: 320 // Optional (Default: 72)
    });
  }

})();
