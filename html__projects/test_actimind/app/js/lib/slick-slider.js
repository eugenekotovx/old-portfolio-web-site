$(document).ready(function(){
    $('.features__slider').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        infinite: false,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true
              }
            }
            ]
    });
  });

  