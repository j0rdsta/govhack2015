(function() {
  'use strict';

  angular
    .module('govhack2015')
    .controller('PageController', PageController);

  /** @ngInject */
  function PageController($http) {
    var vm = this;

    var data = [
        {
            "Title": "Mittagong Greeny Flat shows eco-living made easy",
            "URL": "http://www.abc.net.au/local/photos/2014/05/26/4012255.htm",
            "Date": "26/05/2014",
            "Primary image": "http://www.abc.net.au/reslib/201405/r1280295_17329764.jpg",
            "Primary image caption": "Andy Lemann in front of his environmentally sustainable Greeny Flat in Mittagong.",
            "Primary image rights information": "Copyright: ABC | Source: ABC | Byline: Justin Huntsdale",
            "Subjects": "Business, Economics and Finance:Industry:Building and Construction, Business, Economics and Finance:Industry:Electricity Energy and Utilities, Environment:Alternative Energy:Solar Energy, Science and Technology:Energy",
            "Station": "ABC Illawarra NSW",
            "State": "NSW",
            "Place": "Mittagong",
            "Keywords": "greeny flat, andy lemann, mittagong, energy, building, efficiency, housing, southern highlands, abc illawarra, justin huntsdale",
            "Latitude": "-34.4516",
            "Longitude": "150.4445",
            "MediaRSS URL": "http://www.abc.net.au/local/photos/2014/05/26/4012255-mediarss.xml"
        }
    ];

    // $http.get('http://data.gov.au/dataset/3fd356c6-0ad4-453e-82e9-03af582024c3/resource/3182591a-085a-465b-b8e5-6bfd934137f1/download/Localphotostories2009-2014-JSON.json', { cache: true})
    // .success(function(data, status, headers, config) {
      // vm.data = data;
      $http.get(data[0].URL, {
        headers: {
         'X-Requested-With': 'XMLHttpRequest'
        }
      }).success(function(data, status, headers, config) {
        console.log(data);
      }).error(function(data, status, headers, config) {
        alert("Error on inner HTML query");
      });
    // })
    // .error(function(data, status, headers, config) {
    //   alert("Error on JSON file query");
    // });
  }
})();
