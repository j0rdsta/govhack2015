(function() {
  'use strict';

  angular
    .module('govhack2015')
    .controller('MapController', MapController);

  /** @ngInject */
  function MapController($http, $modal) {
    var vm = this;

    vm.zoom = 4;
    vm.center = {
      lat: -34.4516,
      lng: 150.4445
    };
    vm.locations = [];

    vm.data = {};

    $http.get('http://dev01.jahead.io/articles?take=50', { cache: true})
    .success(function(data, status, headers, config) {
      vm.locations = [];
      vm.center = {
        lat: data[0].Latitude,
        lng: data[0].Longitude
      }
      vm.data = data;
      for(var i = 0; i < data.length; i++) {
        var coordinates = {
          lat: data[i]["Latitude"],
          lng: data[i]["Longitude"]
        };
        vm.locations.push({"coordinates": coordinates, id: i});
      }
    }).error(function(data, status, headers, config) {
      console.log("Error on JSON file query");
    });

    vm.icon = {
      template: '<img src="/assets/images/marker.png">',
      events: {
        tap: function(data, $compile) {
          var modalInstance = $modal.open({
            templateUrl: 'map_modal.html',
            controller: 'MapModalInstanceCtrl',
            resolve: {
              data: function () {
                for(var i = 0; i < vm.data.length; i++) {
                  if(parseFloat(vm.data[i]["Latitude"]) == data.lat && parseFloat(vm.data[i]["Longitude"]) == data.lng) {
                    return vm.data[i];
                  }
                }
              }
            }
          });
        }
      }
    };
  }
})();

angular.module('govhack2015').controller('MapModalInstanceCtrl', function ($scope, $modalInstance, data) {
  'use strict';

  $scope.data = data;

  $scope.ok = function () {
    $modalInstance.close();
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});
