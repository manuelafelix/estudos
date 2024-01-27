const form = document.querySelector('form');
const inputs = document.querySelectorAll('input');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    document.querySelector('.success-message').classList.add('success');
    
    inputs.forEach(input => {
        input.value = '';
    })
    document.querySelector('select').value = 'primeira';
    document.querySelector('textarea').value = '';
})

inputs.forEach(input => {
    if (input.type != 'radio') {
        input.addEventListener('blur', function() {
            if (input.value == "") {
                input.parentElement.classList.add('error');
            } else {
                input.parentElement.classList.remove('error');
            }
        });
    }
})
