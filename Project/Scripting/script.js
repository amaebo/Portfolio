// Show mobile nav only when clicked on
const mobileNav = document.getElementById("mobile-nav");
const navOpenIcon = document.getElementById('nav-open-icon')
const navCloseIcon = document.getElementById("nav-close-icon");
const navitems = document.getElementsByClassName("nav-links");
const navlinks = document.querySelectorAll(".nav-links li"); // returns a node list of li links


// ------------ Mobile Nav Functionality --------------------
function toggleNavIcons(isMenuOpen) {
  if (isMenuOpen) {
    // show close icon
    navOpenIcon.classList.add('hidden');
    navCloseIcon.classList.remove('hidden');
  } else {
    // show open icon
    navOpenIcon.classList.remove('hidden');
    navCloseIcon.classList.add('hidden');
  }
}
//if open icon clicked, open mobile nav functionality
navOpenIcon.addEventListener('click', () => {
  mobileNav.classList.add('open');
  toggleNavIcons(true);
});

// if close icon clicked, close mobile nav functionality 
navCloseIcon.addEventListener('click', () => {
  mobileNav.classList.remove('open');
  toggleNavIcons(false);
});

//if nav link clicked, close mobile nav functionality 
navlinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    toggleNavIcons(false);
  });
});

//Close menu when clicking outside of nav
document.addEventListener('click', (event) => {
  const clickedInsideNav = mobileNav.contains(event.target);
  const clickedNavOpenIcon = navOpenIcon.contains(event.target);
  const clickedNavCloseIcon = navCloseIcon.contains(event.target);

  if (!clickedInsideNav && !clickedNavOpenIcon && !clickedNavCloseIcon) {
    if (mobileNav.classList.contains('open')) {
      mobileNav.classList.remove('open');
      toggleNavIcons(false);
    }
  }
});

//--------------- Fade-up and Fade-right Animations w/ Scroll trigger--------------
const animateElements = document.querySelectorAll('.fade-up, .fade-left');

const options = {
  root: null, //viewport is root element
  threshold: 0.2,
}

// set up intersection observer API
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.remove('hidden')
      entry.target.classList.add('show');
      observer.unobserve(entry.target); // only animate once
    }
  });
}, options);

animateElements.forEach(el => observer.observe(el));