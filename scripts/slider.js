'use strict'

let slideIndex = 0;
let t;
let dots = document.getElementsByClassName("dot");
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" activeDot", "");
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} 
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].classList.add("activeDot");
  t = setTimeout(showSlides, 6000); 
}

const nextSlide = document.getElementById("right-arrow");

// Όταν πατηθεί το δεξί βέλος, ο χρήστης μεταβαίνει στο επόμενο slide και μένει εκεί
nextSlide.addEventListener('click', () => {
    clearTimeout(t);
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    position++;
    if (position > slides.length) {
        position = 1
    }    
  
    slides[position-1].style.display = "block"; 
})

const previousSlide = document.getElementById("left-arrow");

// Όταν πατηθεί το αριστερό βέλος, ο χρήστης μεταβαίνει στο προηγούμενο slide και μένει εκεί
previousSlide.addEventListener('click', () => {
    clearTimeout(t);
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    position--;
    if (position < 0){
        position = slides.length-1;
    }
    slides[position].style.display = "block"; 
})
