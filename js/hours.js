// ------------------------------------
//  OPEN OR CLOSED? (index.html and about.html)
// ------------------------------------
// getDay() gives a number for the day: 0 = Sunday, 1 = Monday ... 6 = Saturday
// getHours() gives the hour on a 24-hour clock: 19 = 7 PM

var now = new Date();
var day = now.getDay();
var hour = now.getHours();

var isOpen = false;

// Monday to Thursday: 9 AM to 7 PM
if (day >= 1 && day <= 4 && hour >= 9 && hour < 19) {
  isOpen = true;
}

// Friday: 9 AM to 3 PM
if (day === 5 && hour >= 9 && hour < 15) {
  isOpen = true;
}

// Saturday: 9 AM to 1 PM
if (day === 6 && hour >= 9 && hour < 13) {
  isOpen = true;
}

// Sunday is closed, so we do not need a rule for it


// ------------------------------------
//  SHOW THE RESULT ON THE PAGE
// ------------------------------------
var openLabel = document.getElementById('open-status');

if (isOpen) {
  openLabel.textContent = 'Open now';
  openLabel.className = 'open';
} else {
  openLabel.textContent = 'Closed now';
  openLabel.className = 'closed';
}


// ------------------------------------
//  HIGHLIGHT TODAY IN THE HOURS TABLE (about.html only)
// ------------------------------------
// Each row has an id: day0 (Sunday) to day6 (Saturday)
var todayRow = document.getElementById('day' + day);

if (todayRow) {
  todayRow.className = 'today';
}
