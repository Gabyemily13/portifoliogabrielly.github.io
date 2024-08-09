document.addEventListener('DOMContentLoaded', function () {
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const cardContainer = document.querySelector('.card-container');
    const totalCards = document.querySelectorAll('.card').length;
    let currentIndex = 0;

    function updateCarousel() {
        const offset = -currentIndex * 100;
        cardContainer.style.transform = `translateX(${offset}%)`;
    }

    prevButton.addEventListener('click', function () {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalCards - 1;
        updateCarousel();
    });

    nextButton.addEventListener('click', function () {
        currentIndex = (currentIndex < totalCards - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    });
});
