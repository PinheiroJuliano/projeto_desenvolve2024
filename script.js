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

document.addEventListener("DOMContentLoaded", () => {
    const emailInput = document.getElementById('username');
    const form = document.getElementById('loginForm');
    const emailErrorLabel = document.getElementById('email-error');
    const minhaSacola = document.querySelector('.container__link.hidden');

    // Garantindo que o formulário não valide automaticamente
    form.setAttribute('novalidate', true);

    // Verificar se "Minha Sacola" deve estar visível ao carregar a página
    if (localStorage.getItem('minhaSacolaVisivel') === 'true') {
        minhaSacola.classList.remove('hidden');
    }

    form.addEventListener('submit', (event) => {
        const email = emailInput.value;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            event.preventDefault();
            emailInput.classList.add("error");
            emailErrorLabel.style.display = 'block';
            emailInput.placeholder = '';
            emailInput.value = '';
        } else {
            // Armazenar estado de visibilidade da "Minha Sacola" no localStorage
            localStorage.setItem('minhaSacolaVisivel', 'true');
        }
    });

    emailInput.addEventListener('focus', () => {
        emailInput.classList.remove("error");
        emailErrorLabel.style.display = 'none';
        emailInput.placeholder = 'Usuário';
    });
});