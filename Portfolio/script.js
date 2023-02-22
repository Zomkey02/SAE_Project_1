

/*Gallery Slider MOBILE START*/

let slides = document.querySelectorAll(".slide");
let sliderContainer = document.querySelector(".slider-container");
let prevButton = document.querySelector(".prev");
let nextButton = document.querySelector(".next");
let slideIndex = 1;

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

showSlides(slideIndex);

function switchView() {
  if (window.innerWidth < 768) {
    sliderContainer.style.display = "block";
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[0].style.display = "block";
    prevButton.style.display = "inline-block";
    nextButton.style.display = "inline-block";
  } else {
    sliderContainer.style.display = "grid";
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "inline-block";
    }
    prevButton.style.display = "none";
    nextButton.style.display = "none";
  }
}

window.addEventListener("resize", switchView);
window.addEventListener("load", switchView);

/* Gallery Slider MOBILE END*/
