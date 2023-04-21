const form = document.getElementById('signup-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Validate name input
  if (nameInput.value.trim() === '') {
    alert('Please enter your name.');
    nameInput.focus();
    return;
  }

  // Validate email input
  if (emailInput.value.trim() === '') {
    alert('Please enter your email.');
    emailInput.focus();
    return;
  } else if (!isValidEmail(emailInput.value.trim())) {
    alert('Please enter a valid email address.');
    emailInput.focus();
    return;
  }

  // Validate password input
  if (passwordInput.value.trim() === '') {
    alert('Please enter your password.');
    passwordInput.focus();
    return;
  } else if (passwordInput.value.length < 6) {
    alert('Password must be at least 6 characters.');
    passwordInput.focus();
    return;
  }

  // Validate confirm password input
  if (confirmPasswordInput.value.trim() === '') {
    alert('Please confirm your password.');
    confirmPasswordInput.focus();
    return;
  } else if (passwordInput.value !== confirmPasswordInput.value) {
    alert('Passwords do not match.');
    confirmPasswordInput.focus();
    return;
  }

  // All inputs are valid
  alert('Sign up successful!');
  form.reset();
});

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
