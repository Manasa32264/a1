function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}

// Carousel Auto-Slide Script
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const slideWidth = slides[0].getBoundingClientRect().width;
let currentIndex = 0;

function moveToSlide(index) {
    track.style.transition = 'transform 1s ease-in-out';
    track.style.transform = `translateX(-${index * slideWidth}px)`;
}

function cloneSlides() {
    const firstClone = slides[0].cloneNode(true);
    const lastClone = slides[slides.length - 1].cloneNode(true);
    track.appendChild(firstClone);
    track.insertBefore(lastClone, slides[0]);
}

function setupCarousel() {
    cloneSlides();
    track.style.transform = `translateX(-${slideWidth}px)`;
}

function autoSlide() {
    currentIndex++;
    moveToSlide(currentIndex);
    if (currentIndex === slides.length) {
        setTimeout(() => {
            track.style.transition = 'none';
            currentIndex = 0;
            track.style.transform = `translateX(-${slideWidth}px)`;
        }, 1000);
    }
}

setupCarousel();
setInterval(autoSlide, 5000); //

// Function to toggle the "sticky" class when scrolling
window.onscroll = function() {
    stickyNavbar();
};

const navbar = document.querySelector('.navbar');
const sticky = navbar.offsetTop;

function stickyNavbar() {
    if (window.pageYOffset > sticky) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
}



