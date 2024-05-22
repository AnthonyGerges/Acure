// slider.js

// Function to switch to the previous slide
function prevSlide() {
    var prevRadio = document.querySelector('input[name="slider"]:checked').previousElementSibling;
    if (prevRadio) {
        prevRadio.checked = true;
    }
}

// Function to switch to the next slide
function nextSlide() {
    var nextRadio = document.querySelector('input[name="slider"]:checked').nextElementSibling;
    if (nextRadio) {
        nextRadio.checked = true;
    }
}
