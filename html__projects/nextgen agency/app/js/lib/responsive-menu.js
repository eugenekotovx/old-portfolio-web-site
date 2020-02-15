    var openMenu = function () {
    var x = document.querySelector(".menu");
    if (x.className === "menu") {
      x.className += " responsive";
      document.querySelector('.logo').style.display = 'none';
      document.querySelector('.hamburger-button').className +="--active";
      document.querySelector('.header-wrapper').style.padding="0"
    } else {
      x.className = "menu";
      document.querySelector('.logo').style.display = 'block';
      document.querySelector('.hamburger-button--active').className = "hamburger-button";
      document.querySelector('.header-wrapper').style.padding="20px"
    }
  }
  
window.onload = function () {
       document.querySelector(".menu__item").addEventListener('click', openMenu)
}