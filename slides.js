const slides = [
    "./resources/images/slides/3053182-poster-p-1-ikeas-new-kids-toys-are-made-from-kids-drawings.webp",
    "./resources/images/slides/my-collection-of-ikea-stuffed-animals-v0-kz7rfn9442ob1.jpg",
    "./resources/images/slides/some-random-1m-ikea-shark-plushie-stole-my-deck-he-looks-v0-vnsew4jjjoj91.jpg"
];

const carousel = document.querySelector(".carousel > div");

const leftButton = document.querySelector(".carousel__button-left");
const rightButton = document.querySelector(".carousel__button-right");

let currentSlide = 0;

function updateSlide() {
    carousel.style.backgroundImage = `url("${slides[currentSlide]}")`;
}

function nextSlide() {
    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    updateSlide();
}

function previousSlide() {
    currentSlide--;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    updateSlide();
}

leftButton.addEventListener("click", previousSlide);
rightButton.addEventListener("click", nextSlide);

updateSlide();