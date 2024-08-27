
function togglePasswordL() {
  const passwordField = document.getElementById('passwordR');
  const showPasswordCheckbox = document.getElementById('show-passwordR');

  if (showPasswordCheckbox.checked) {
      passwordField.type = 'text';
  } else {
      passwordField.type = 'password';
  }
}