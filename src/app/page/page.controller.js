(function() {
  'use strict';

  angular
    .module('govhack2015')
    .controller('PageController', PageController);

  /** @ngInject */
  function PageController($http) {
    var vm = this;

    vm.data = [
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
            "MediaRSS URL": "http://www.abc.net.au/local/photos/2014/05/26/4012255-mediarss.xml",
            "html": "<p class=\"first\">Southern Highlands building designer Andy Lemann is used to building energy efficient houses that can cope with extreme climates.</p><p>\"I'd been living in the United States for 20 years in Montana where it gets down to minus 50 degrees celsius at times, so energy efficiency is a whole different kettle of fish,\" he says.</p><p>\"Coming back here it seems really easy to do this.\"</p><p>After returning to Australia, he sized up his mother's backyard and designed and built his Greeny Flat - a two bedroom fully functional unit that is now producing almost twice as much energy as it's using.</p><p>He started with two main goals - to make it energy positive, and to show people that it can be affordable.</p><p>\"My philosophy is, regardless of what you think about global warming, at some point we have to learn to live without fossil fuels, because they won't last forever.</p><p>\"This experiment is to see if we can do it now, and if we can, why not do it?\"</p><p>The flat is meticulously designed to capitalise on available daylight for solar energy and natural heating, while shade and the floor slab will help regulate the inside temperate during the hottest and coldest parts of the year.</p><p>There's a water tank out the back to capture rain water, and last week the flat underwent a blower door test by University of Wollongong researchers to ensure it was airtight. </p><p>He and his girlfriend have just spent their first month living in the flat. </p><p>\"Early indications are that it will work really well,\" Andy says.</p><p>\"Winter will be the real test, but I have no doubts in the summer we'll make more energy than we're using. </p><p>\"Just over the last week since we had our solar panels installed we're making twice the energy we're using.\"</p><p>He says it's likely his mother will move into the flat in her later years, so he also designed the house to make it compatible for the elderly.</p><p>There are ramps, as well as sufficient door space to move a walking frame through, the indoor and outdoor space is low maintenance, and the corrugated iron cladding outside means not a drop of paint has been used outside. </p><p>\"I've been working on this full time for a year now in designing, planning and building it. </p><p>\"I've just finished it and I'm about to take a holiday, but when I get back I'll be thinking about what I'll do for a crust.\"</p><p>The Greeny Flat doesn't only just stand out for its striking metal design, it's miles more energy efficient than most houses built in Australia today.</p><p>Andy says when he left the country 20 years ago, Australia was ahead of the US on energy efficient housing design.</p><p>Now we have fallen behind, and we are even further behind Europe, where houses need to be designed to withstand extreme temperatures and make use of natural energy options.</p><p>\"We're an energy producing nation and we have cheap energy but we're all starting to realise energy prices are going up. </p><p>\"Threats of global warming are making people conscious of the energy we use and the carbon we produce.\"</p><p>You can stay up to date on how the Greeny Flat is performing with <a href=\"http://greenyflat.com.au/\">Andy's blog</a>. </p>"
        }
    ];

    console.log(vm.data[0].Keywords);

    vm.data[0].Keywords = vm.data[0].Keywords.split(", ");

    /* vm.addRandomParagraphStyling = function(){
      var $paragraphs = $('.story-html p');
      console.log("paragraphs: ", $paragraphs);
      var $selectedParagraph = $($paragraphs[Math.floor(Math.random()*$paragraphs.length)]);
      console.log("selectedParagraph: ", $selectedParagraph);
      $selectedParagraph.css({'font-size': '16px' });
    } */

    // $http.get('http://data.gov.au/dataset/3fd356c6-0ad4-453e-82e9-03af582024c3/resource/3182591a-085a-465b-b8e5-6bfd934137f1/download/Localphotostories2009-2014-JSON.json', { cache: true})
    // .success(function(data, status, headers, config) {
      // vm.data = data;
      // $http.get(data[0].URL).success(function(data, status, headers, config) {
      //   console.log(data);
      // }).error(function(data, status, headers, config) {
      //   alert("Error on inner HTML query");
      // });
    // })
    // .error(function(data, status, headers, config) {
    //   alert("Error on JSON file query");
    // });

  }
})();
