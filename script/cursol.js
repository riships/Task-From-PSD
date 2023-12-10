let currentIndex = 0;
const slideWidth = 100; // Width of each slide in percentage

function changeSlide(n) {
    showSlide(currentIndex + n);
}

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = slides.children.length;

    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    const translateValue = -slideWidth * currentIndex + '%';
    slides.style.transform = `translateX(${translateValue})`;

    updateDots();
}

function updateDots() {
    const dotsContainer = document.querySelector('.dots-container');
    const dots = Array.from(dotsContainer.children);

    dots.forEach((dot, index) => {
        if (index === currentIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// Create dots based on the number of slides
const slides = document.querySelector('.slides');
const totalSlides = slides.children.length;
const dotsContainer = document.querySelector('.dots-container');

for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.addEventListener('click', () => showSlide(i));
    dotsContainer.appendChild(dot);
}

// Initially set the first dot as active
dotsContainer.children[0].classList.add('active');

// Automatically transition to the next slide every 3 seconds
setInterval(() => {
    changeSlide(1);
}, 3000);
