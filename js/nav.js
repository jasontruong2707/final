// ==========================================================
//  Filename:     nav.js
//  Description:  Opens and closes the navigation links on
//                phones when the three-line button is clicked.
//                Used on every page.
// ==========================================================

var navToggle = document.querySelector('.nav-toggle');
var siteNav = document.getElementById('site-nav');

navToggle.addEventListener('click', function() {
  // classList.toggle adds .open if it is missing, removes it if it is there
  siteNav.classList.toggle('open');

  // Tells screen readers whether the menu is open (true) or closed (false)
  var isOpen = siteNav.classList.contains('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});
