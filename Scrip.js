document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.image-slider');
    const images = document.querySelectorAll('.slid2-01');

    slider.addEventListener('scroll', function () {
        if (slider.scrollLeft + slider.offsetWidth >= slider.scrollWidth) {
            // When the user scrolls to the end, scroll back to the beginning
            slider.scrollLeft = 0;
        }
    });
});