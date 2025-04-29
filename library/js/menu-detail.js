document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    console.log('URL Params:', Array.from(urlParams.entries()));
    const foodName = urlParams.get('name');
    const foodPrice = urlParams.get('price');
    const foodImage = urlParams.get('image');
    const initialQuantity = urlParams.get('quantity') || 0;
    console.log('Received data:', {foodName, foodPrice, foodImage, initialQuantity});
    if (foodName) {
        const nameElement = document.querySelector('.margin-judul-kiri h2');
        if (nameElement) {
            nameElement.textContent = foodName;
            console.log('Updated food name:', foodName);
        }
    }
    if (foodPrice) {
        const priceElement = document.querySelector('.margin-judul-kanan h2');
        if (priceElement) {
            priceElement.textContent = foodPrice;
            console.log('Updated food price:', foodPrice);
        }
    }
    if (foodImage) {
        const imgElement = document.querySelector('.margin-gambar img');
        if (imgElement) {
            imgElement.src = foodImage;
            imgElement.alt = foodName || 'Menu Image';
            console.log('Updated food image:', foodImage);
        }
    }
    if (initialQuantity > 0) {
        const quantityValue = document.querySelector('.quantity-value');
        if (quantityValue) {
            quantityValue.textContent = initialQuantity;
        }
        const cartNotification = document.getElementById('cartNotification');
        if (cartNotification) {
            cartNotification.classList.remove('hidden');
        }
        const cartCount = document.getElementById('cartCount');
        if (cartCount) {
            cartCount.textContent = initialQuantity;
        }
        const currentItemTotal = document.getElementById('currentItemTotal');
        if (currentItemTotal) {
            const price = foodPrice ? parseInt(foodPrice.toString().replace(/\D/g, '')) : 0;
            currentItemTotal.textContent = formatCurrency(price * initialQuantity);
        }
    }
});

function formatCurrency(amount) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0, 
    }).format(amount).replace(/^Rp\s/, 'Rp'); 
}