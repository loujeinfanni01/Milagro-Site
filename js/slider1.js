document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('#products-slider');
    const prevBtn = document.querySelector('#prev-button');
    const nextBtn = document.querySelector('#next-button');
    const productCards = slider.children;

    if (!slider || !prevBtn || !nextBtn || productCards.length === 0) {
        console.error('Required elements not found or no product cards. Slider will not initialize.');
        return;
    }

    const cardWidth = productCards[0].offsetWidth + 30; // Card width + gap (updated to 30px)
    let currentPosition = 0;
    const totalCards = productCards.length;
    let visibleCards = 4;

    function updateVisibleCards() {
        if (window.innerWidth <= 992) visibleCards = 3;
        else if (window.innerWidth <= 768) visibleCards = 2;
        else if (window.innerWidth <= 480) visibleCards = 1;
        else visibleCards = 4;
    }

    updateVisibleCards();
    let maxPosition = -(totalCards - visibleCards) * cardWidth;

    function updateSlider() {
        slider.style.transform = `translateX(${currentPosition}px)`;
        prevBtn.style.opacity = currentPosition === 0 ? "0" : "1";
        nextBtn.style.opacity = currentPosition <= maxPosition ? "0" : "1";
    }

    prevBtn.addEventListener('click', function() {
        if (currentPosition < 0) {
            currentPosition += cardWidth;
            updateSlider();
        }
    });

    nextBtn.addEventListener('click', function() {
        updateVisibleCards();
        maxPosition = -(totalCards - visibleCards) * cardWidth;
        if (currentPosition > maxPosition) {
            currentPosition -= cardWidth;
            updateSlider();
        }
    });

    window.addEventListener('resize', function() {
        updateVisibleCards();
        maxPosition = -(totalCards - visibleCards) * cardWidth;
        currentPosition = 0;
        updateSlider();
    });

    updateSlider();
});