(function() {
  'use strict';

  angular
    .module('govhack2015')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastr, MapConfigProvider, $httpProvider) {
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

    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $httpProvider.interceptors.push(function ($q, $location) {
      return {
        'request': function (config) {
          config.headers = config.headers || {};
          return config;
        },
        'responseError': function (response) {
          return $q.reject(response);
        }
      };
    });

  }

})();
