document.addEventListener('DOMContentLoaded', function() {
    const floatingBtn = document.querySelector('.floating-menu-btn');
    const menuButton = document.getElementById('menuButton');
    const menuModal = document.getElementById('menuModal');
    const closeModal = document.querySelector('.close-modal');
    const menuCards = document.querySelectorAll('.menu-card');
    let lastKnownScrollPosition = 0;
    let ticking = false;
  
    function handleScroll(scrollPos) {
        menuCards.forEach((card, index) => {
            const cardRect = card.getBoundingClientRect();
            const cardTop = cardRect.top + window.scrollY;
            const cardHeight = cardRect.height;
            if (scrollPos >= cardTop - 100 && scrollPos < cardTop + cardHeight - 100) {
                const menuCategories = document.querySelectorAll('.menu-category');
                menuCategories.forEach(c => c.classList.remove('active'));
                menuCategories[index].classList.add('active');
            }
        });
    }
  
    window.addEventListener('scroll', function() {
        lastKnownScrollPosition = window.scrollY;
        if (!ticking) {
            window.requestAnimationFrame(function() {
                handleScroll(lastKnownScrollPosition);
                ticking = false;
            });
            ticking = true;
        }
    });
  
    menuButton.addEventListener('click', function() {
        menuModal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; 
    });
  
    closeModal.addEventListener('click', function() {
        menuModal.style.display = 'none';
        document.body.style.overflow = 'auto'; 
    });
  
    menuModal.addEventListener('click', function(e) {
        if (e.target === menuModal) {
            menuModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
  
    const menuCategories = document.querySelectorAll('.menu-category');
    menuCategories.forEach((category) => {
        category.addEventListener('click', function() {
            menuCategories.forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            const categoryName = category.textContent.trim();
            let targetElement = null;
            document.querySelectorAll('.menu-card-header h2').forEach(header => {
                if (header.textContent.trim() === categoryName) {
                    targetElement = header.closest('.menu-card');
                }
            });
            if (targetElement) {
                const offset = 100; 
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
            menuModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    });
    handleScroll(window.scrollY);
});