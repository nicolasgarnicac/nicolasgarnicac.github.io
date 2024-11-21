// script.js

// Select elements
const popup = document.getElementById('popup');
const openPopup = document.getElementById('1');
const closePopup = document.getElementById('close-popup');

// Show the pop-up
openPopup.addEventListener('click', () => {
  popup.style.display = 'flex'; // Make pop-up visible
});

// Hide the pop-up
closePopup.addEventListener('click', () => {
  popup.style.display = 'none'; // Hide pop-up
});

// Close the pop-up when clicking outside the content
popup.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.style.display = 'none';
  }
});