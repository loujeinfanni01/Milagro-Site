document.addEventListener('DOMContentLoaded', function() {
    // Get slider elements
    const slider = document.querySelector('.slider');
    const slide = document.querySelector('.slide');
    const ovalContainer = slide.querySelector('.oval-container');
    const images = [
        { src: "../../../public/img/1-0000-layer-4.png", alt: "Chocolats de luxe 1" },
        { src: "../../../public/img/1-0000-layer-4-2.png", alt: "Assortiment de chocolats 1" },
        { src: "../../../public/img/1-0000-layer-4-4.png", alt: "Chocolats de luxe 2" },
        { src: "../../../public/img/1-0000-layer-4-3.png", alt: "Assortiment de chocolats 2" }
    ];
    
    // Initialize indices for principal and secondary images
    let principalIndex = 0;
    let secondaryIndex = 1;
    
    // Function to update the displayed images
    function updateSlider() {
        // Get the principal and secondary image containers
        const principalImageContainer = ovalContainer.querySelector('.oval-image.principal');
        const secondaryImageContainer = ovalContainer.querySelector('.oval-image.secondary');
        
        // Update the images
        principalImageContainer.innerHTML = `<img src="${images[principalIndex].src}" alt="${images[principalIndex].alt}">`;
        secondaryImageContainer.innerHTML = `<img src="${images[secondaryIndex].src}" alt="${images[secondaryIndex].alt}">`;
        
        // Apply fade-in animation
        ovalContainer.style.animation = 'fadeIn 0.5s ease-in-out';
    }
    
    // Initial slider setup
    updateSlider();
    
    // Event listener for "Next" click
    const nextTextLink = document.querySelector('.next-text');
    const heroNextArrow = document.querySelector('.hero-section .next-arrow');
    
    function goToNextSlide() {
        // The current secondary image becomes the principal
        principalIndex = secondaryIndex;
        // The next image in the sequence becomes the secondary
        secondaryIndex = (secondaryIndex + 1) % images.length;
        updateSlider();
    }
    
    if (nextTextLink) {
        nextTextLink.addEventListener('click', goToNextSlide);
    }
    
    if (heroNextArrow) {
        heroNextArrow.addEventListener('click', goToNextSlide);
    }
    
    // Auto-slide functionality
    let autoSlideInterval;
    
    function startAutoSlide() {
        autoSlideInterval = setInterval(goToNextSlide, 5000);
    }
    
    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }
    
    // Start auto-slide on page load
    startAutoSlide();
    
    // Stop auto-slide when user interacts with slider
    slider.addEventListener('mouseenter', stopAutoSlide);
    slider.addEventListener('mouseleave', startAutoSlide);
    
    // Touch support for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    slider.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        stopAutoSlide();
    }, {passive: true});
    
    slider.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
        startAutoSlide();
    }, {passive: true});
    
    function handleSwipe() {
        const swipeThreshold = 50;
        if (touchEndX < touchStartX - swipeThreshold) {
            goToNextSlide();
        }
    }
});
