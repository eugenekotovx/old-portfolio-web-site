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


