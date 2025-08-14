// Show mobile nav only when clicked on
const mobileNav = document.getElementById("mobile-nav");
const navToggle= document.getElementById('nav-toggle')
const closeNav = document.getElementById("close-nav");
const navitems = document.getElementsByClassName("nav-links");
const links = document.querySelectorAll(".nav-links li"); // returns a node list 

if (navToggle) { //show open nav menu
  navToggle.addEventListener('click', () => {
    mobileNav.classList.add('open'); // displays menu
    navToggle.style.display = 'none';    // Hide hamburger
    closeNav.style.display = 'block';    // Show close icon
  });
}

if (closeNav) { //close nav menu
  closeNav.addEventListener('click', () => {
    mobileNav.classList.remove('open'); //hide menu
    navToggle.style.display = 'block';  // Show hamburger
    closeNav.style.display = 'none';    // Hide close icon
  });
}

//close menu when list item is click
for (const link of links){
  link.addEventListener('click', () => {
    if (mobileNav.classList.contains('open')){
      mobileNav.classList.remove('open'); //hide menu
      navToggle.style.display = 'block';  // Show hamburger
      closeNav.style.display = 'none';    // Hide close icon
    }
  })
}