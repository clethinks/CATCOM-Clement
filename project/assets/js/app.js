/*add a dropdown effect when the burger icon is clicked*/
const burger = document.querySelector(".burger");
const links = document.querySelector(".links");

burger.addEventListener("click", function() {
  links.classList.toggle("open");
  burger.classList.toggle("toggle");
});


/*change the background image of about section*/
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 2 seconds
}

/*remove the active class from the current dot and add it to the next dot when the next slide is displayed*/

const carousel = document.querySelector('.carousel');
const slides = carousel.querySelectorAll('.slide');
const dots = carousel.querySelectorAll('.dot');
let index = 0;

function nextSlide() {
  slides[index].style.display = 'none';
  dots[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].style.display = 'flex';
  dots[index].classList.add('active');
}

setInterval(nextSlide, 3000);