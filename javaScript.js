let slideIndex = 1;
let i;
let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");
let timeout;
showSlides(slideIndex);


// Next/previous controls
function plusSlides(n) {
    if (n === 1) {
        showSlides(slideIndex += n);
    } else {
        showSlides(slideIndex -= n);
    }
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}






function showSlides(n) {

    if (n > slides.length) { slideIndex = 1 }

    if (n < 1) { slideIndex = slides.length }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }

    slides[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].className += " active";

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    if (!!timeout) { clearTimeout(timeout) }
    timeout = setTimeout(function () { showSlides(n) }, 2000); // Change image every 1 seconds
}


