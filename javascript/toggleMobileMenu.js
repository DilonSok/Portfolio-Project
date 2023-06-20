const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".mobile-menu-links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});