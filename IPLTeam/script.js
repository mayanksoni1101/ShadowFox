let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-img');
const slideDuration = 10000; // 10 seconds
const progressBarFill = document.querySelector('.progress-bar-fill');

function startProgressBar() {
    progressBarFill.style.transition = 'none'; // reset immediately
    progressBarFill.style.width = '0%';
    setTimeout(() => {
        progressBarFill.style.transition = `width ${slideDuration}ms linear`;
        progressBarFill.style.width = '100%';
    }, 50); // small delay to trigger transition
}

function showSlide(index) {
    slides.forEach((img, i) => img.style.display = i === index ? 'block' : 'none');
}
function changeSlide(direction) {
    currentSlide += direction;
    if (currentSlide >= slides.length) currentSlide = 0;
    if (currentSlide < 0) currentSlide = slides.length - 1;
    showSlide(currentSlide);
    startProgressBar(); // start progress animation on slide change
}

// Initial start when page loads
startProgressBar();

setInterval(() => {
    changeSlide(1);
}, slideDuration);
