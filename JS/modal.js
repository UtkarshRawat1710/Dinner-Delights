// Get the modal element
const modal = document.getElementById('myModal');

// Get the sign-in and sign-up tabs
const signInTab = document.getElementById('signInTab');
const signUpTab = document.getElementById('signUpTab');

// Show the modal when the user clicks the sign-in button
function showSignInModal() {
  modal.style.display = 'block';
  signInTab.classList.add('active');
  signUpTab.classList.remove('active');
}

// Show the modal when the user clicks the sign-up button
function showSignUpModal() {
  modal.style.display = 'block';
  signUpTab.classList.add('active');
  signInTab.classList.remove('active');
}

// Close the modal when the user clicks the close button or outside the modal
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};

// Toggle between sign-in and sign-up forms
function toggleSignUp() {
  signUpTab.style.display = 'block';
  signInTab.style.display = 'none';
}

function toggleSignIn() {
  signUpTab.style.display = 'none';
  signInTab.style.display = 'block';
}

// Add event listeners to your sign-in and sign-up buttons
const signInButton = document.getElementById('signInButton');
signInButton.addEventListener('click', showSignInModal);

const signUpButton = document.getElementById('signUpButton');
signUpButton.addEventListener('click', showSignUpModal);
// Close the modal
function closeModal() {
    modal.style.display = 'none';
  }