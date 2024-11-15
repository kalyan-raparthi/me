function ONLOAD() {
// Add event listener to handle scroll effects
window.addEventListener('scroll', function() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    // Example: Change background color as you scroll down
    if (scrollPosition > 100) {
        document.body.style.backgroundColor = '#f1c40f'; // Yellow color
    } else {
        document.body.style.backgroundColor = '#3498db'; // Original color
    }

    // Example: Add class for sticky navigation or element when scrolling past 200px
    const nav = document.querySelector('nav');
    if (scrollPosition > 200) {
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');
    }
});

}
