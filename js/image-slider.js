const sliderr = document.querySelector('.sliderr');
let isSliding = false;

function slideNext() {
    if (!isSliding) {
        isSliding = true;
        sliderr.style.transform = 'translateX(-100%)';
        setTimeout(() => {
            sliderr.appendChild(sliderr.firstElementChild);
            sliderr.style.transform = 'none';
            isSliding = false;
        }, 500);
    }
}

setInterval(slideNext, 3000); // Auto-slide every 3 seconds
