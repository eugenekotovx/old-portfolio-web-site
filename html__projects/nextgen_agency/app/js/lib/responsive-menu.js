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