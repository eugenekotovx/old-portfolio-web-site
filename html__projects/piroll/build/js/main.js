$(function () {
    $(".gallery__image").slice(0, 4).show();
    $(".load-more__button").on('click', function (e) {
        e.preventDefault();
        $(".gallery__image:hidden").slice(0, 4).slideDown();
        if ($(".gallery__image:hidden").length == 0) {
            $(".load-more__button").fadeOut('slow');
        }
        $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 500);
    });
});

var openMenu = function () {
    var x = document.querySelector(".nav-bar");
    if(window.innerWidth < 767){
    if (x.className === "nav-bar") {
      x.className += " responsive";
      document.querySelector('.menu-button').className +="--active";
    } else {
      x.className = "nav-bar responsive";
      x.className = "nav-bar";
      document.querySelector('.menu-button--active').className = "menu-button";
      document.querySelector('.menu-button').className = "nav-bar__item menu-button";
    }
  }
}

  
window.onload = function () {
       document.querySelector(".menu-button").addEventListener('click', openMenu);
}



!function(e){"function"!=typeof e.matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),n=0;o[n]&&o[n]!==t;)++n;return Boolean(o[n])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null})}(window.Element.prototype);


document.addEventListener('DOMContentLoaded', function() {
   var modalButtons = document.querySelectorAll('.js-open-modal'),
       overlay      = document.querySelector('.js-overlay-modal'),
       closeButtons = document.querySelectorAll('.js-modal-close');
   modalButtons.forEach(function(item){
      item.addEventListener('click', function(e) {
         e.preventDefault();
         var modalId = this.getAttribute('data-modal'),
             modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');
         modalElem.classList.add('active');
         overlay.classList.add('active');
      });

   }); 


   closeButtons.forEach(function(item){

      item.addEventListener('click', function(e) {
         var parentModal = this.closest('.modal');
         parentModal.classList.remove('active');
         overlay.classList.remove('active');
      });

   }); 


    document.body.addEventListener('keyup', function (e) {
        var key = e.keyCode;

        if (key == 27) {

            document.querySelector('.modal.active').classList.remove('active');
            document.querySelector('.overlay').classList.remove('active');
        };
    }, false);
    
    overlay.addEventListener('click', function() {
        document.querySelector('.modal.active').classList.remove('active');
        this.classList.remove('active');
    });
});
$('.slider__inner').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });
$(function() {
    new WOW().init();
})