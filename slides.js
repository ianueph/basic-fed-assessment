const slides = [
    "./resources/images/slides/3053182-poster-p-1-ikeas-new-kids-toys-are-made-from-kids-drawings.webp",
    "./resources/images/slides/my-collection-of-ikea-stuffed-animals-v0-kz7rfn9442ob1.jpg",
    "./resources/images/slides/some-random-1m-ikea-shark-plushie-stole-my-deck-he-looks-v0-vnsew4jjjoj91.jpg"
];

const headings = [
    "ABOUT US",
    "HOW IDEA STARTED",
    "HEJ! KAMUSTA?"
];

const paragraphs = [
    "Welcome to <span class='ikea_bold'>IDEA</span> Plushies — a tiny corner of soft chaos inspired by cozy Swedish rooms, rainy afternoons, and the universal need to hug something squishy. From giant blåhaj sharks to sleepy bears and jungle buddies, our plushies are here to keep your beds, desks, and hearts company. Whether you are reviewing for exams at 2 AM, surviving a long commute, or simply existing dramatically, there is always a fluffy friend ready for a hej and a cuddle.",
    '<span class="ikea_bold">IDEA</span> started from a very serious question: “Why are plushies so expensive when all they do is sit there looking adorable?” Somewhere between Swedish-inspired room aesthetics, late-night online shopping, and emotional attachment to stuffed sharks, the idea for IDEA was born. We wanted a shop that felt warm, playful, and a little silly. the kind of place where every plushie looks like it already has its own personality.',
    'At <span class="ikea_bold">IDEA</span>, we mix Scandinavian coziness with Filipino warmth. Think clean Nordic vibes, but with the energy of tambay sessions, rainy merienda afternoons, and barkada gift-giving. Our plushies are inspired by the soft and playful feeling of Swedish design while staying close to the comfort and humor that feels at home here in the Philippines.'
]

const grid_rows =[
    "1 / 3",
    "1 / 3",
    "2 / 4"
];

const grid_cols = [
    "2 / 7",
    "7 / 12",
    "5 / 10",
];

const headingArray = document.querySelectorAll(".about-us__heading");
const paragraphArray = document.querySelectorAll(".about-us__paragraph");
const aboutUsBox = document.querySelector(".carousel > div > .about-us")
const carousel = document.querySelector(".carousel > div");


const leftButton = document.querySelector(".carousel__button-left");
const rightButton = document.querySelector(".carousel__button-right");

let currentSlide = 0;

function updateSlide() {
    headingArray.forEach(heading => {
        heading.innerHTML = headings[currentSlide];
    });
    paragraphArray.forEach(paragraph => {
        paragraph.innerHTML = paragraphs[currentSlide];
    });
    aboutUsBox.style.gridColumn = grid_cols[currentSlide];
    aboutUsBox.style.gridRow = grid_rows[currentSlide];
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