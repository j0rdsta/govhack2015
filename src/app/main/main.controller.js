(function() {
  'use strict';

  angular
    .module('govhack2015')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($http) {
    var vm = this;

    vm.init = function()
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

      vm.stories = [];

      $http.get('http://dev01.jahead.io/articles', { cache: true})
      .success(function(data, status, headers, config) {
        vm.stories = data;

        vm.keywords = [];
        angular.forEach(data, function(item){
          // var split = item.Keywords.split(", ");
          // vm.keywords.push(split);
          vm.keywords.push(item.Keywords);
        });
        console.log(vm.keywords);
      }).error(function(data, status, headers, config) {
        console.log("Error on JSON file query");
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

    /* Example article subjects. Given more time we could've grabbed the keywords from the ABC data */
    vm.articles = [
      "aboriginal",
      "environment",
      "transport",
      "drought",
      "mackay",
      "tourism",
      "history",
      "summer",
      "landscape",
      "photography",
      "urban",
      "rescue",
      "people"
    ];
  }
})();
