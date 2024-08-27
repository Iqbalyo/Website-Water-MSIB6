function togglePassword(passwordFieldId, checkboxId) {
    const passwordField = document.getElementById(passwordFieldId);
    const showPasswordCheckbox = document.getElementById(checkboxId);

    if (showPasswordCheckbox.checked) {
        passwordField.type = 'text';
    } else {
        passwordField.type = 'password';
    }
}
