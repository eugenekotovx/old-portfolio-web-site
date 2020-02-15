$(document).ready(function(){
    
    $('.slider-card__img').slick({
        slidesToShow: 1,
        dots: true,
        arrows: true,
        cssEase: 'linear',
        responsive: [
            {
              breakpoint: 767,
              settings: {
                arrows: false,
              }
            }
            ]

    });
    if(window.innerWidth < 991){
      $('.slick-prev').show();
    } else{
    $('.slick-prev').hide();
  }
  });