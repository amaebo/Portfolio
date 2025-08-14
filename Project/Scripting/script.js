// Show mobile nav only when clicked on
const mobileNav = document.getElementById("mobile-nav");
const navToggle= document.getElementById('nav-toggle')
const closeNav = document.getElementById("close-nav");
const navitems = document.getElementsByClassName("nav-links")

if (navToggle) {
  navToggle.addEventListener('click', () => {
    mobileNav.style.display = 'grid';
    navToggle.style.display = 'none';
    closeNav.style.display = 'block';
  });
} else console.log("navToggle not found")

if (closeNav) {
  closeNav.addEventListener('click', () => {
    mobileNav.style.display = 'none';
    navToggle.style.display = 'block';
    closeNav.style.display = 'none';
  });
}
