const signUpForm = document.getElementById('signup-form')
const signUpemail = document.getElementById('signup-email');
const signUppassword = document.getElementById('signup-password');
const signUppasswordConfirm = document.getElementById('signup-password-confirm');
const signUpBtn = document.getElementById('signup-button');
const signUpError = document.getElementById('signup-error');
const successDiv = document.querySelector('.success');

signUpBtn.addEventListener('click', event => {
    event.preventDefault();

    checkForm(); 
});

function checkForm() {
    if (signUpemail.value === '' || signUppassword.value === '' || signUppasswordConfirm === '') {
        signUpError.textContent = 'Preencha todos os campos!';
        signUpError.classList.remove('hidden');
    } else {
        signUpError.classList.add('hidden');
            if (signUppassword.value === signUppasswordConfirm.value) {
                signUpUser();
            } else {
                signUpError.textContent = 'Erro ao confirmar senha, tente novamente!';
                signUpError.classList.remove('hidden');
            }
    }
}

function signUpUser() {
    const newUser = {
        email: signUpemail.value,
        senha: signUppassword.value
    }
    
    localStorage.setItem('user', JSON.stringify(newUser));

    signUpemail.value = '';
    signUppassword.value = '';
    signUppasswordConfirm.value = '';

    signUpForm.classList.add('hidden');
    successDiv.classList.remove('hidden');
}

