/* SHOW MENU */
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

// Showing Menu
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
// Menu Hide
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/* REMOVE MENU MOBILE */
const navLink = document.querySelectorAll(".nav__link");
const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  // click each nav__link to remove the show-menu class
  navMenu.classList.remove("show-menu");
};
navLink.forEach((event) => {
  event.addEventListener("click", linkAction);
});

/* ADD BLUR TO HEADER */
const blurHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("blur-header")
    : header.classList.remove("blur-header");
};
window.addEventListener("scroll", blurHeader);
