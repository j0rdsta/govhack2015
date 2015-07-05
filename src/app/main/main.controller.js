(function() {
  'use strict';

  angular
    .module('govhack2015')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($http) {
    var vm = this;

    vm.map = {
      zoom : 14,
      center : {
        lng: -0.135559,
        lat: 51.513872
      }
    };

    vm.startVideo = function()
    {
      vm.scaleVideoContainer();

      vm.initBannerVideoSize('.video-container .poster img');
      vm.initBannerVideoSize('.video-container .filter');
      vm.initBannerVideoSize('.video-container video');

      $(window).on('resize', function() {
          vm.scaleVideoContainer();
          vm.scaleBannerVideoSize('.video-container .poster img');
          vm.scaleBannerVideoSize('.video-container .filter');
          vm.scaleBannerVideoSize('.video-container video');
      });

      var container = document.querySelector('.packery');

      var pckry = new Packery( container, {
          itemSelector: '.item',
          columnWidth: '.grid-sizer',
          gutter: 10
      });

      $('.packery img').bind('load', function() {
          //when an image inside the packery class loads loads trigger pckry to re layout the images
          pckry.layout();
      });
    }


    vm.scaleVideoContainer = function() {

        var height = $(window).height() + 5;
        var unitHeight = parseInt(height) + 'px';
        $('.homepage-hero-module').css('height',unitHeight);

    }

    vm.initBannerVideoSize = function(element){

        $(element).each(function(){
            $(this).data('height', $(this).height());
            $(this).data('width', $(this).width());
        });

        vm.scaleBannerVideoSize(element);

    }

    vm.scaleBannerVideoSize = function(element){

        var windowWidth = $(window).width(),
        windowHeight = $(window).height() + 5,
        videoWidth,
        videoHeight;

        console.log(windowHeight);

        $(element).each(function(){
            var videoAspectRatio = $(this).data('height')/$(this).data('width');

            $(this).width(windowWidth);

            if(windowWidth < 1000){
                videoHeight = windowHeight;
                videoWidth = videoHeight / videoAspectRatio;
                $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});

                $(this).width(videoWidth).height(videoHeight);
            }

            $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

        });
    };

    vm.getLocation = function(val) {
      return [
        "test", "hello"
      ];
      /* return $http.get('http://maps.googleapis.com/maps/api/geocode/json')
      .success(function(data, status, headers, config) {
        var addresses = [];
        angular.forEach(data.results, function(item){
          addresses.push(item.formatted_address);
        });
        return addresses;
      }); */
    };
  }
})();
