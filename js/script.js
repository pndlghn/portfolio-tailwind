document.addEventListener("DOMContentLoaded", function () {
  var typed = new Typed("#typed", {
    strings: [
      "I am Pandu Alghani.",
      "I am pndlghn.",
      "I build awesome websites.",
    ],
    typeSpeed: 50,
    backSpeed: 25,
    loop: true,
  });
});

// hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("is-active");
  navMenu.classList.toggle("hidden");
});
