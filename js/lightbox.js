// Lightbox from the class exercise
// Used on the Home, Menu, and Story pages

// ------------------------------------
//  SELECT IMPORTANT PAGE ELEMENTS
// ------------------------------------
// querySelectorAll finds all elements with the class "thumbnail".
// This gives us a list of gallery images. */
var thumbnails = document.querySelectorAll('.thumbnail');

// These variables store the lightbox parts we need to control. */
var lightbox = document.getElementById('lightbox');
var lightboxImg = document.getElementById('lightbox-img');
var closeBtn = document.getElementById('close-btn');


// ------------------------------------
//   OPEN LIGHTBOX WHEN A THUMBNAIL IS CLICKED
// ------------------------------------
// We loop through each thumbnail image.
// When one is clicked:
//  1. Copy that image's src into the larger lightbox image
//  2. Copy its alt text too
//  3. Show the lightbox overlay */
thumbnails.forEach(function(thumbnail) {
  thumbnail.addEventListener('click', function() {
    lightboxImg.src = thumbnail.src;
    lightboxImg.alt = thumbnail.alt;
    lightbox.style.display = 'flex';
  });
});


// ------------------------------------
//  CLOSE LIGHTBOX WHEN THE BUTTON IS CLICKED
// ------------------------------------
closeBtn.addEventListener('click', function() {
  lightbox.style.display = 'none';
});


// ------------------------------------
//  CLOSE LIGHTBOX WHEN DARK BACKGROUND IS CLICKED
// ------------------------------------ 
// If the user clicks directly on the dark overlay, close the lightbox.\
lightbox.addEventListener('click', function(event) {
  if (event.target === lightbox) {
    lightbox.style.display = 'none';
  }
});
