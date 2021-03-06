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
        url: '/page/:id',
        templateUrl: 'app/page/page.html',
        controller: 'PageController',
        controllerAs: 'page'
      }).state('map', {
        url: '/map',
        templateUrl: 'app/map/map.html',
        controller: 'MapController',
        controllerAs: 'map'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
