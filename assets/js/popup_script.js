// script.js

const idtourl ={
  "1":"Projects/Chest X-Ray Pneumonia Classification/chest_xray_classification.html",
  "2":"Projects/Bone Marrow Cell Classification/bone_marrow_cell_classification.html",
  "3":"Projects/Bone Marrow Cell Classification/bone_marrow_cell_classification.html",
  "4":"Projects/Bone Marrow Cell Classification/bone_marrow_cell_classification.html",
  "5":"Projects/Bone Marrow Cell Classification/bone_marrow_cell_classification.html",
  "6":"Projects/Bone Marrow Cell Classification/bone_marrow_cell_classification.html",
  "7":"Projects/resume/resume.html"
}

// Select elements
const popup = document.getElementById('popup');
// const openPopup = document.getElementById('1');
const iframe = document.getElementById('popup-iframe');
const popup_content = document.getElementById('popup-content');
const closePopup = document.getElementById('close-popup');

// Iterate over the ID-to-URL map to add event listeners
Object.keys(idtourl).forEach(id => {
  const element = document.getElementById(id);
  if (element) {
    element.addEventListener('click', (e) => {
      e.preventDefault(); // Prevent default action for links
      const url = idtourl[id]; // Get URL from the map
      iframe.src = url; // Update iframe content
      popup.style.display = 'flex'; // Show the popup
    });
  }
});

// // Show the pop-up
// openPopup.addEventListener('click', () => {
//   popup.style.display = 'flex'; // Make pop-up visible
// });

// Hide the pop-up
closePopup.addEventListener('click', () => {
  popup.style.display = 'none'; // Hide pop-up
});

// Close the pop-up when clicking outside the content
popup.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.style.display = 'none';
    iframe.src = ''; // Clear iframe content
  }
});