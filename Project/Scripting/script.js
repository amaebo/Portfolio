// Show mobile nav only when clicked on
const mobileNav = document.getElementById("mobile-nav");
const navOpenIcon= document.getElementById('nav-open-icon')
const navCloseIcon = document.getElementById("nav-close-icon");
const navitems = document.getElementsByClassName("nav-links");
const links = document.querySelectorAll(".nav-links li"); // returns a node list of li links

if (navOpenIcon) { //show open nav menu
  navOpenIcon.addEventListener('click', () => {
    mobileNav.classList.add('open'); // displays menu
    navOpenIcon.style.display = 'none';    // Hide hamburger
    navCloseIcon.style.display = 'block';    // Show close icon
  });
}

if (navCloseIcon) { //close nav menu
  navCloseIcon.addEventListener('click', () => {
    mobileNav.classList.remove('open'); //hide menu
    navOpenIcon.style.display = 'block';  // Show hamburger
    navCloseIcon.style.display = 'none';    // Hide close icon
  });
}

//close menu when list item is click
for (const link of links){
  link.addEventListener('click', () => {
    if (mobileNav.classList.contains('open')){
      mobileNav.classList.remove('open'); //hide menu
      navOpenIcon.style.display = 'block';  // Show hamburger
      navCloseIcon.style.display = 'none';    // Hide close icon
    }
  })
}