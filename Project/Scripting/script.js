// Show mobile nav only when clicked on
const mobileNav = document.getElementById("mobile-nav");
const navOpenIcon= document.getElementById('nav-open-icon')
const navCloseIcon = document.getElementById("nav-close-icon");
const navitems = document.getElementsByClassName("nav-links");
const navlinks = document.querySelectorAll(".nav-links li"); // returns a node list of li links


function toggleNavIcons(isMenuOpen) {
  if (isMenuOpen){
    // show close icon
    navOpenIcon.classList.add('hidden');
    navCloseIcon.classList.remove('hidden');
  } else {
    // show open icon
    navOpenIcon.classList.remove('hidden');
    navCloseIcon.classList.add('hidden');
  }
}
//open mobile nav functionality
navOpenIcon.addEventListener('click', () => {
  mobileNav.classList.add('open');
  toggleNavIcons(true);
});

//close mobile nav functionality 
navCloseIcon.addEventListener('click', () => {
  mobileNav.classList.remove('open');
  toggleNavIcons(false);
});

//moblie nav list item click functionality 
navlinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    toggleNavIcons(false);
  });
});