var hamburger = document.querySelector(".navbar__hamburger");
var menu = document.querySelector(".navbar__menu");
hamburger.addEventListener(
  "click",
  function (e) {
    menu.classList.toggle("mobile-nav");
    hamburger.classList.toggle("is-active");
  },
  false
);
