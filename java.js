let slidePosition = 0;
const slides = document.getElementsByClassName('carousel-item');
const totalSlides = slides.length;
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('previous');

nextBtn.addEventListener("click", function () {
    moveToNextSlide();
})
prevBtn.addEventListener("click", function () {
    moveToPrevSlide();
})

function updateSlidePosition() {
    for (let slide of slides) {
        slide.classList.remove('carousel-item--visible');
        slide.classList.remove('carousel-item--hidden');
    }

    slides[slidePosition].classList.add('carousel-item--visible');
}

function moveToNextSlide() {
    
    if (slidePosition === totalSlides - 1 ) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }
    updateSlidePosition();
}
function moveToPrevSlide() {
    
    if (slidePosition === 0 ) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }
    updateSlidePosition();
}