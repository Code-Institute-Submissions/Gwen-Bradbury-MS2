let slides = document.querySelectorAll('.slide');
let next = document.querySelector('#next')
let prev = document.querySelector('#prev')
let auto = true;
let intervalTime = 4000;
let slideInterval;

function nextSlide() {
    let current = document.querySelector('.current');
    current.classList.remove('current');
    if(current.nextElementSibling) {
        current.nextElementSibling.classList.add('current');
    }else{
        slides[0].classList.add('current');
    }
    setTimeout(function() {
        current.classList.remove('current')
    })
}

function prevSlide() {
    let current = document.querySelector('.current');
    current.classList.remove('current');
    if(current.previousElementSibling) {
        current.previousElementSibling.classList.add('current');
    }else{
        slides[slides.length -1].classList.add('current');
    }
    setTimeout(function() {
        current.classList.remove('current')
    }) 
} 200,

next.addEventListener('click', function() {
    nextSlide();
    if(auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});
prev.addEventListener('click', function() {
    prevSlide();
    if(auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});

if(auto) {
    slideInterval = setInterval(nextSlide, intervalTime);
}