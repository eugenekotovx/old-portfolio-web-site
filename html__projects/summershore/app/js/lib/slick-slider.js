$(window).on('load resize', function(e){
    var init = $(".section-skills__mobile-slider").data('init-slider');
    if(window.innerWidth < 767){
      if(init != 1){
        $('.section-skills__mobile-slider').slick({
          draggable: true,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 2000,
          dots: true
        }).data({'init-slider': 1});
      }
    }
    else {
      if(init == 1){
        $('.section-skills__mobile-slider').slick('unslick').data({'init-slider': 0});
      }
    }
  }).trigger('load resize');

