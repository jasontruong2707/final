// ------------------------------------
//  MENU FILTER BUTTONS (menu.html)
// ------------------------------------
// Each button has a data-category, like data-category="lunch".
// Each menu section has the same data-category.
// When a button is clicked, we show the sections that match
// and hide the rest.

var buttons = document.querySelectorAll('.filter-btn');
var sections = document.querySelectorAll('.menu-section');

buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    var choice = button.getAttribute('data-category');

    // Remove the dark color from all buttons,
    // then add it to the button that was clicked
    buttons.forEach(function(otherButton) {
      otherButton.classList.remove('active');
    });
    button.classList.add('active');

    // Show or hide each menu section
    sections.forEach(function(section) {
      if (choice === 'all' || section.getAttribute('data-category') === choice) {
        section.style.display = 'block';
      } else {
        section.style.display = 'none';
      }
    });
  });
});
