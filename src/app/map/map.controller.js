(function() {
  'use strict';

  angular
    .module('govhack2015')
    .controller('MapController', MapController);

  /** @ngInject */
  function MapController($http) {
    var vm = this;

    vm.zoom = 10;
    vm.center = {
      lat: -34.4516,
      lng: 150.4445
    };
    vm.locations = [
      {
        coordinates: {
          lat: -34.4516,
          lng: 150.4445
        }
      }
    ];
    vm.icon = {
      template: '<img src="/assets/images/marker.png">',
      events: {
        tap: function(data, $compile) {
          var modalInstance = $modal.open({
            templateUrl: 'map_modal.html',
            // controller: 'ModalInstanceCtrl',
            resolve: {
              data: function () {
                return $scope.data;
              }
            }
          });
        }
      }
    };
  }
})();
