document.addEventListener("DOMContentLoaded", function () {
  var typed = new Typed("#typed", {
    strings: [
      "I am Pandu Alghani.",
      "I am WordPress Developer.",
      "I am Full-Stack Developer.",
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

// see more button function
document.getElementById("seeMoreButton").addEventListener("click", function () {
  const hiddenCards = document.querySelectorAll("#cardContainer .hidden");
  hiddenCards.forEach((card, index) => {
    if (index < 3) {
      card.classList.remove("hidden");
    }
  });
  if (document.querySelectorAll("#cardContainer .hidden").length === 0) {
    this.style.display = "none";
  }
});

// Menambahkan efek parallax saat halaman di-scroll
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY; // Posisi scroll
  const parallaxSection = document.getElementById("parallaxSection");
  parallaxSection.style.backgroundPositionY = `${scrollY * 0.0}px`; // Gerakan lebih lambat (0.5 adalah kecepatan)
});
