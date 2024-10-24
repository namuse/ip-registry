
const loginLink = document.querySelector('.register-link');
const registerLink = document.querySelector('.login-link');
const loginBox = document.querySelector('.login');
const registerBox = document.querySelector('.register');

loginLink.addEventListener('click', () => {
    loginBox.style.display = 'none';
    registerBox.style.display = 'block';
});

registerLink.addEventListener('click', () => {
    registerBox.style.display = 'none';
    loginBox.style.display = 'block';
});
