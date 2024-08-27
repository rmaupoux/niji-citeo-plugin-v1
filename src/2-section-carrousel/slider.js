function initSlider() {
    const sliders = document.querySelectorAll('.multi-image-gallery');
    sliders.forEach(slider => {
        const slides = slider.querySelectorAll('.gallery-image');
        let currentIndex = 0;

        // Créer les boutons de navigation
        const prevButton = document.createElement('button');
        prevButton.textContent = 'Prev';
        prevButton.classList.add('slider-nav', 'prev');

        const nextButton = document.createElement('button');
        nextButton.textContent = 'Next';
        nextButton.classList.add('slider-nav', 'next');

        slider.appendChild(prevButton);
        slider.appendChild(nextButton);

        // Fonction pour montrer un slide spécifique
        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.remove('active', 'prev');
                if (i === index) {
                    slide.classList.add('active');
                } else if (i === (index - 1 + slides.length) % slides.length) {
                    slide.classList.add('prev');
                }
            });
        }

        // Fonction pour aller au slide suivant
        function nextSlide() {
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
        }

        // Fonction pour aller au slide précédent
        function prevSlide() {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            showSlide(currentIndex);
        }

        // Ajouter des écouteurs d'événements pour les boutons de navigation
        nextButton.addEventListener('click', nextSlide);
        prevButton.addEventListener('click', prevSlide);

        // Montrer le premier slide au chargement
        showSlide(currentIndex);
    });
}

// Appel de la fonction lorsque le DOM est prêt
document.addEventListener('DOMContentLoaded', () => {
    initSlider();
});
