(function() {
  'use strict';

  angular
    .module('govhack2015')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      }).state('page', {
        url: '/page',
        templateUrl: 'app/page/page.html',
        controller: 'PageController',
        controllerAs: 'page'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
