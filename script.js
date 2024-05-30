const cardClickAnimate = document.querySelector(".card-wrapper");
let formContainer = document.querySelector('.form__container');


if (cardClickAnimate) {
    cardClickAnimate.addEventListener('click', () => {
        cardClickAnimate.classList.add('slide-bck-top');
        if (formContainer) {
            formContainer.classList.remove('hidden');
            formContainer.classList.add('fade-in-form');
        }
    });
}

window.addEventListener('load', () => {
    let fadeTransition = document.querySelector(".card__titulo__texto");
    if (fadeTransition) {
        fadeTransition.classList.add("fade-in");
    }
});

window.addEventListener('load', () => {
    let fadeTransition = document.querySelector(".card__subtitulo");
    if (fadeTransition) {
        fadeTransition.classList.add("fade-in");
    }
});

window.addEventListener('load', () => {
    let logo1 = document.getElementById('logo1');
    if (logo1) {
        logo1.classList.add('loaded');
    }
});

                //Parte do form de login//
// Definindo o login e a senha predefinidos
const predefinedUsername = 'admin@admin.com';
const predefinedPassword = 'senha123';

document.addEventListener("DOMContentLoaded", () => {
    const emailInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const form = document.getElementById('loginForm');
    const emailErrorLabel = document.getElementById('email-error');

    // Garantindo que o formulário não valide automaticamente
    form.setAttribute('novalidate', true);

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o envio padrão do formulário

        const email = emailInput.value;
        const password = passwordInput.value;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        let valid = true;

        // Validação de email
        if (!emailPattern.test(email)) {
            emailInput.classList.add("error");
            emailErrorLabel.style.display = 'block';
            // emailInput.value = '';
            valid = false;
        } else {
            emailInput.classList.remove("error");
            emailErrorLabel.style.display = 'none';
        }

        // Validação de login e senha
        if (email === predefinedUsername && password === predefinedPassword) {
            if (valid) {
                // Redirecionando para a página inicial
                window.location.href = 'index.html';
            }
        } else {
            if (valid) {
                // Exibindo uma mensagem de erro se a validação de email passou mas o login/senha estão incorretos
                alert('Login ou senha incorretos!');
            }
        }
    });

    emailInput.addEventListener('focus', () => {
        emailInput.classList.remove("error");
        emailErrorLabel.style.display = 'none';
        emailInput.placeholder = 'Usuário';
    });
});
