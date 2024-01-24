let slideIndex = 1;
let timeout;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n = 1, id) {
  clearTimeout(timeout)
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  // let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // for (i = 0; i < dots.length; i++) {
  //   dots[i].className = dots[i].className.replace(" active", "");
  // }
  slides[slideIndex-1].style.display = "block";
  if (slides[slideIndex-1].querySelector('video')) {
    slides[slideIndex-1].querySelector('video').currentTime = '0';
  }
  timeout = setTimeout(plusSlides, 15000);
  // dots[slideIndex-1].className += " active";
}