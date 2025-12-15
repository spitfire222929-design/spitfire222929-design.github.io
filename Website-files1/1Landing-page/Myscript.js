const slider1 = document.querySelector('.slider'); 
const slides1 = document.querySelectorAll('.slide');
const prevBtn1 = document.querySelector('.prev'); 
const nextBtn1 = document.querySelector('.next'); 
const dots1 = document.querySelectorAll('.dot');

let currentIndex1 = 0;

function updateSlider1() {
  slider1.style.transform = `translateX(-${currentIndex1 * 100}%)`;
  dots1.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentIndex1);
  });
}

prevBtn1.addEventListener('click', () => {
  currentIndex1 = (currentIndex1 - 1 + slides1.length) % slides1.length;
  updateSlider1();
});

nextBtn1.addEventListener('click', () => {
  currentIndex1 = (currentIndex1 + 1) % slides1.length;
  updateSlider1();
});

dots1.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex1 = index;
    updateSlider1();
  });
});

setInterval(() => {
  currentIndex1 = (currentIndex1 + 1) % slides1.length;
  updateSlider1();
}, 6000);

const slider2 = document.querySelector('.slider-2');
const prevBtn2 = document.querySelector('.prev-2');
const nextBtn2 = document.querySelector('.next-2');
const dots2 = document.querySelectorAll('.dot2'); 
let currentIndex2 = 0;
const totalSlides2 = 4;

function updateSlider2() {
  slider2.style.transform = `translateX(-${currentIndex2 * 20}%)`;
  dots2.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentIndex2); 
  });
}

prevBtn2.addEventListener('click', () => {
  currentIndex2 = (currentIndex2 > 0) ? currentIndex2 - 1 : totalSlides2 - 1;
  updateSlider2();
});

nextBtn2.addEventListener('click', () => {
  currentIndex2 = (currentIndex2 < totalSlides2 - 1) ? currentIndex2 + 1 : 0;
  updateSlider2();
});

dots2.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex2 = index;
    updateSlider2();
  });
});

const slider3 = document.querySelector('.slider-3');
const prevBtn3 = document.querySelector('.prev-3');
const nextBtn3 = document.querySelector('.next-3');
const dots3 = document.querySelectorAll('.dot3'); 
let currentIndex3 = 0;
const totalSlides3 = 5;

function updateSlider3() {
  slider3.style.transform = `translateX(-${currentIndex3 * 20}%)`;
  dots3.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentIndex3); 
  });
}

prevBtn3.addEventListener('click', () => {
  currentIndex3 = (currentIndex3 > 0) ? currentIndex3 - 1 : totalSlides3 - 1;
  updateSlider3();
});

nextBtn3.addEventListener('click', () => {
  currentIndex3 = (currentIndex3 < totalSlides3 - 1) ? currentIndex3 + 1 : 0;
  updateSlider3();
});

dots3.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex3 = index;
    updateSlider3();
  });
});