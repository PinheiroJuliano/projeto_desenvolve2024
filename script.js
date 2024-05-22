const cardClickAnimate = document.querySelector(".card-wrapper");

if (cardClickAnimate) {
    cardClickAnimate.addEventListener('click', () => {
        cardClickAnimate.classList.add('slide-bck-top');
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

document.addEventListener("DOMContentLoaded",  () => {
    let fadeTransition = document.querySelector(".card__titulo__texto");
    if (fadeTransition.classList.contains("loaded")) {
        fadeTransition.classList.add("fade-in");
    }
});
