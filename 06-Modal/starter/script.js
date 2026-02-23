'use strict';
// Enables strict mode.
// This makes JavaScript safer by preventing silent errors
// and disallowing certain bad practices (e.g., using undeclared variables).

// =============================
// DOM ELEMENT SELECTION
// =============================

// Selects the element with the class "modal".
// This represents the popup window we want to show or hide.
const modal = document.querySelector('.modal');

// Selects the overlay element (the dark background behind the modal).
// It prevents interaction with the main content when the modal is open.
const overlay = document.querySelector('.overlay');

// Selects the button that closes the modal (the "X" button).
const btnCloseModal = document.querySelector('.close-modal');

// Selects ALL buttons that should open the modal.
// querySelectorAll returns a NodeList (similar to an array).
const btnOpenModal = document.querySelectorAll('.show-modal');

// =============================
// FUNCTIONS
// =============================

// Function to open the modal.
// Removes the "hidden" class from both the modal and overlay,
// making them visible on the screen.
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// Function to close the modal.
// Adds the "hidden" class back to both elements,
// hiding them from the screen.
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// =============================
// EVENT LISTENERS
// =============================

// Loop through all buttons that should open the modal.
// Since querySelectorAll returns multiple elements,
// we must attach an event listener to each one.
for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', openModal);
}

// Close the modal when the close button ("X") is clicked.
btnCloseModal.addEventListener('click', closeModal);

// Close the modal when the overlay background is clicked.
overlay.addEventListener('click', closeModal);

// =============================
// KEYBOARD EVENT
// =============================

// Listen for any key pressed on the document.
document.addEventListener('keydown', function (e) {
  // Check two conditions:
  // 1. The pressed key must be "Escape".
  // 2. The modal must currently be visible.
  // This prevents unnecessary execution of the function.
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
