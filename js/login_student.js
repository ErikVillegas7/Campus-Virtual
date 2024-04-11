document.addEventListener('DOMContentLoaded', function() {
    const showPasswordButton = document.getElementById('showPassword');
    const passwordInput = document.getElementById('password');

    showPasswordButton.addEventListener('click', function() {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            showPasswordButton.textContent = 'Ocultar';
        } else {
            passwordInput.type = 'password';
            showPasswordButton.textContent = 'Mostrar';
        }
    });
});