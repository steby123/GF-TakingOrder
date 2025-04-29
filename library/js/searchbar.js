const searchBar = document.getElementById('search-bar').querySelector('input');
const menuCards = document.querySelectorAll('.menu-card');
const deleteButton = document.querySelector('.search-bar-kanan button'); 
const notFoundMessage = document.createElement('div');
notFoundMessage.className = 'not-found-message';
notFoundMessage.textContent = 'Menu yang kamu cari tidak ada di menu ini';
notFoundMessage.style.display = 'none';

menuCards.forEach(card => {
    const menuItemsContainer = card.querySelector('.menu-items');
    menuItemsContainer.appendChild(notFoundMessage.cloneNode(true));
});

searchBar.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' || event.keyCode === 13) {
        event.preventDefault();
        this.blur();
        setTimeout(() => {
            document.activeElement.blur();
        }, 10);
    }
});

searchBar.addEventListener('input', function() {
    const query = searchBar.value.toLowerCase().trim();
    let anyResultsFound = false;
    
    if (query) {
        document.querySelectorAll('.popular, .paling-laku-section, .rekomendasi-section').forEach(section => {
            section.style.display = 'none';
        });
    } else {
        document.querySelectorAll('.popular, .paling-laku-section, .rekomendasi-section').forEach(section => {
            section.style.display = 'block';
        });
    }
    
    menuCards.forEach(card => {
        const itemsInCard = card.querySelectorAll('.menu-item');
        const notFoundMsg = card.querySelector('.not-found-message');
        let foundInCard = false;
        
        itemsInCard.forEach(item => {
            const menuName = item.querySelector('.menu-name').textContent.toLowerCase(); 
            if (query === "" || menuName.includes(query)) {
                item.style.display = 'block';
                foundInCard = true;
                anyResultsFound = true;
            } else {
                item.style.display = 'none';
            }
        });
        
        notFoundMsg.style.display = (query && !foundInCard) ? 'block' : 'none';
        
        if (query && !foundInCard) {
            card.style.display = 'none';
        } else {
            card.style.display = 'block';
        }
    });
});

deleteButton.addEventListener('click', function() {
    searchBar.value = ''; 
    const event = new Event('input'); 
    searchBar.dispatchEvent(event);
    
    document.querySelectorAll('.popular, .paling-laku-section, .rekomendasi-section').forEach(section => {
        section.style.display = 'block';
    });
    
    menuCards.forEach(card => {
        card.style.display = 'block';
        const itemsInCard = card.querySelectorAll('.menu-item');
        itemsInCard.forEach(item => item.style.display = 'block');
        const notFoundMsg = card.querySelector('.not-found-message');
        notFoundMsg.style.display = 'none';
    });
});

window.addEventListener('scroll', function() {
    var searchBarContainer = document.getElementById('search-bar');
    if (window.scrollY > 300) {
        searchBarContainer.style.display = 'flex'; 
    } else {
        searchBarContainer.style.display = 'none';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('search-bar').style.display = 'none';
});