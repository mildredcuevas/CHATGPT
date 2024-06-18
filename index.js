document.addEventListener('DOMContentLoaded', function() {
    const sliderImages = document.querySelectorAll('.slider img');
    let currentSlide = 0;

    function showSlide(index) {
        sliderImages.forEach((img, i) => {
            img.style.display = i === index ? 'block' : 'none';
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % sliderImages.length;
        showSlide(currentSlide);
    }

    // Inicializar el slider
    showSlide(currentSlide);
    setInterval(nextSlide, 3000); // Cambia cada 3 segundos
});
