// // Get references to elements
// const popupOverlay = document.getElementById('popupOverlay');
// const body = document.body;
// const caCard = document.getElementById('caCard');
// const cmaCard = document.getElementById('cmaCard');

// // Show the popup and blur the background when the button is clicked
// popupBtn.addEventListener('click', () => {
    //     popupOverlay.classList.remove('hidden');
    //     body.classList.add('blur');
    // });
    
    // // Navigate to respective pages when the cards are clicked
    // caCard.addEventListener('click', () => {
        //     window.location.href = 'ca.html';
        // });
        
        // cmaCard.addEventListener('click', () => {
            //     window.location.href = 'cma.html';
            // });
            
const card = document.getElementById("make-blur");
const popupBtn = document.getElementById('popupBtn');
const courseView = document.getElementById('courses-popup');
const closePopUp = document.querySelector("#courses-popup svg");

popupBtn.addEventListener('click', ()=> {
    courseView.style.display = "block";
    card.style = `filter: blur(1px);
  	-webkit-filter: blur(3px);`;
});

closePopUp.addEventListener('click', ()=> {
    courseView.style.display = "none";
    card.style = `filter: blur(0px);
  	-webkit-filter: blur(0px);`;    
});

// card.addEventListener('click', ()=> {
//     courseView.style.display = "none";
//     card.style = `filter: blur(0px);
//   	-webkit-filter: blur(0px);`;
// });


class Carousel {
    constructor(container) {
        this.container = container;
        this.track = container.querySelector('.carousel-track');
        this.slides = Array.from(this.track.children);
        this.nextButton = container.querySelector('.next-btn');
        this.prevButton = container.querySelector('.prev-btn');
        this.slideWidth = this.slides[0].getBoundingClientRect().width;
        this.currentIndex = 0;
        
        this.initializeCarousel();
        this.setupEventListeners();
    }

    initializeCarousel() {
        // Clone slides for infinite loop
        const slidesToClone = 3;
        const clonesBefore = this.slides
            .slice(-slidesToClone)
            .map(slide => slide.cloneNode(true));
        const clonesAfter = this.slides
            .slice(0, slidesToClone)
            .map(slide => slide.cloneNode(true));
        
        clonesBefore.forEach(clone => this.track.insertBefore(clone, this.slides[0]));
        clonesAfter.forEach(clone => this.track.appendChild(clone));
        
        // Update slides array with clones
        this.slides = Array.from(this.track.children);
        this.totalSlides = this.slides.length;
        
        // Set initial position
        this.currentIndex = slidesToClone;
        this.updateSlidePosition();
    }

    setupEventListeners() {
        this.nextButton.addEventListener('click', () => this.moveToNextSlide());
        this.prevButton.addEventListener('click', () => this.moveToPrevSlide());
        this.track.addEventListener('transitionend', () => this.handleTransitionEnd());
    }

    updateSlidePosition() {
        const offset = -this.slideWidth * this.currentIndex;
        this.track.style.transform = `translateX(${offset}px)`;
    }

    moveToNextSlide() {
        this.currentIndex++;
        this.track.style.transition = 'transform 0.5s ease-in-out';
        this.updateSlidePosition();
    }

    moveToPrevSlide() {
        this.currentIndex--;
        this.track.style.transition = 'transform 0.5s ease-in-out';
        this.updateSlidePosition();
    }

    handleTransitionEnd() {
        // Handle infinite loop when reaching the end
        if (this.currentIndex >= this.totalSlides - 3) {
            this.track.style.transition = 'none';
            this.currentIndex = 3;
            this.updateSlidePosition();
        }
        // Handle infinite loop when reaching the beginning
        if (this.currentIndex <= 2) {
            this.track.style.transition = 'none';
            this.currentIndex = this.totalSlides - 4;
            this.updateSlidePosition();
        }
    }
}

// Initialize carousel when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const carouselContainer = document.querySelector('.carousel-container');
    new Carousel(carouselContainer);
});







