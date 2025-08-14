// Show mobile nav only when clicked on
const mobileNav = document.getElementById("mobile-nav");
const navToggle= document.getElementById('nav-toggle')
const closeNav = document.getElementById("close-nav");
const navitems = document.getElementsByClassName("nav-links")

if (navToggle) { //show open nav menu
  navToggle.addEventListener('click', () => {
    mobileNav.classList.add('open');
  });
}

if (closeNav) { //close nav menu
  closeNav.addEventListener('click', () => {
    mobileNav.classList.remove('open');
  });
}
