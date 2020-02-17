    var openMenu = function () {
    var x = document.querySelector(".menu");
    if (x.className === "menu") {
      x.className += " responsive";
      document.querySelector('.logo').style.display = 'none';
      document.querySelector('.hamburger-button').className +="--active";
    } else {
      x.className = "menu";
      document.querySelector('.logo').style.display = 'block';
      document.querySelector('.hamburger-button--active').className = "hamburger-button";
    }
  }
  
window.onload = function () {
       document.querySelector(".menu__item").addEventListener('click', openMenu)
}

    ScrollReveal().reveal('.promo__title', {delay: 600, distance: '100px'});
    ScrollReveal().reveal('.promo__text',  {delay: 500, distance: '60px'});
    ScrollReveal().reveal('.service__title', {delay: 600, distance: '100px'});
    ScrollReveal().reveal('.section-skills__mobile-slider',  {delay: 500, distance: '60px'})
    ScrollReveal().reveal('.about__content', {delay: 600, distance: '100px'});
    ScrollReveal().reveal('.about__aside',  {delay: 500, distance: '60px'});
    ScrollReveal().reveal('.banner', {delay: 600, distance: '100px'});

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