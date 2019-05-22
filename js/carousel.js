// JS modified from weschools.com:
// https://www.w3schools.com/howto/howto_js_slideshow.asp

var slideIndex = 0;
showSlides(slideIndex);

//Click to current slide
function currentSlide(n) {
  showSlides(slideIndex = n-1);
  clearTimeout(timeoutHandle);
}

//Base function for carousel animation (10 second interval)
function showSlides(n){
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 0;
  } 

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
  timeoutHandle = setTimeout(showSlides, 10000);
}