const loginEmail = document.getElementById('login-email');
const loginPassword = document.getElementById('login-password');
const loginBtn = document.getElementById('login-button');
const loginError = document.getElementById('login-error');
const loginLink = document.getElementById('login-link');

const user = JSON.parse(localStorage.getItem('user'));

loginBtn.addEventListener('click', event => {
    event.preventDefault();

    if (loginEmail.value === '' || loginPassword.value === '') {
        loginError.textContent = 'Preencha todos os campos!';
        loginError.classList.remove('hidden')
    } else {
        loginError.classList.add('hidden');
        loginUser();
    }
});

function loginUser() {
    if (loginEmail.value === user.email && loginPassword.value === user.senha) {
        loginError.classList.add('hidden');
        loginLink.textContent = 'Login realizado com sucesso!';
        loginEmail.value = '';
        loginPassword.value = '';
    } else {
        loginError.textContent = 'E-mail ou senha incorretos!'
        loginError.classList.remove('hidden');
    }
}