document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.products-slider');
    const prevBtn = document.querySelector('.prev-button');
    const nextBtn = document.querySelector('.next-button');
    const productCards = document.querySelectorAll('.product-card');
    
    const cardWidth = productCards[0].offsetWidth + 15; // Card width + gap
    let currentPosition = 0;
    
    // Calculer la position maximale du slider
    function updateMaxPosition() {
        let visibleCards = 4;
        if (window.innerWidth <= 992) visibleCards = 3;
        if (window.innerWidth <= 768) visibleCards = 2;
        if (window.innerWidth <= 480) visibleCards = 1;
        
        return -(productCards.length - visibleCards) * cardWidth;
    }
    
    let maxPosition = updateMaxPosition();
    
    // Fonction pour mettre à jour la visibilité des flèches
    function updateButtonVisibility() {
        // Si on est au début du slider, cacher la flèche gauche
        if (currentPosition === 0) {
            prevBtn.style.opacity = "0";
        } else {
            prevBtn.style.opacity = "1";
        }
        
        // Si on est à la fin du slider, cacher la flèche droite
        if (currentPosition <= maxPosition) {
            nextBtn.style.opacity = "0";
        } else {
            nextBtn.style.opacity = "1";
        }
    }
    
    // Exécuter au chargement pour s'assurer que la première flèche est correctement visible
    updateButtonVisibility();
    
    prevBtn.addEventListener('click', function() {
        if (currentPosition < 0) {
            currentPosition += cardWidth;
            slider.style.transform = `translateX(${currentPosition}px)`;
            updateButtonVisibility();
        }
    });
    
    nextBtn.addEventListener('click', function() {
        maxPosition = updateMaxPosition();
        if (currentPosition > maxPosition) {
            currentPosition -= cardWidth;
            slider.style.transform = `translateX(${currentPosition}px)`;
            updateButtonVisibility();
        }
    });
    
    // Mettre à jour lors du redimensionnement de la fenêtre
    window.addEventListener('resize', function() {
        maxPosition = updateMaxPosition();
        currentPosition = 0;
        slider.style.transform = `translateX(0)`;
        updateButtonVisibility();
    });
});