// Fungsi untuk menampilkan modal detail
function showQuantityDetailModal(item) {
    const modal = document.getElementById('quantityDetailModal');
    const img = document.getElementById('quantityDetailImg');
    const name = document.getElementById('quantityDetailName');
    const price = document.getElementById('quantityDetailPrice');
    
    img.src = item.image;
    name.textContent = item.name;
    price.textContent = formatCurrency(item.price * item.quantity);
    
    modal.style.display = 'flex';
}

// Fungsi untuk menyembunyikan modal detail
function hideQuantityDetailModal() {
    document.getElementById('quantityDetailModal').style.display = 'none';
}

// Event listener untuk tombol tutup modal
document.getElementById('quantityDetailClose')?.addEventListener('click', hideQuantityDetailModal);

// Event listener untuk klik di luar modal
document.getElementById('quantityDetailModal')?.addEventListener('click', function(e) {
    if (e.target === this) {
        hideQuantityDetailModal();
    }
});

// Update fungsi updateItemQuantity untuk menampilkan modal
function updateItemQuantity(menuItem, change) {
    const foodName = menuItem.querySelector('.menu-name').textContent;
    const matchingItems = cart.items.filter(item => item.name === foodName);
    if (matchingItems.length === 0) return;
    const item = matchingItems[0];
    const itemIndex = cart.items.findIndex(i => i.id === item.id);

    if (itemIndex >= 0) {
        cart.items[itemIndex].quantity += change;
        if (cart.items[itemIndex].quantity <= 0) {
            cart.items.splice(itemIndex, 1);
            const quantitySelector = menuItem.querySelector('.quantity-selector');
            if (quantitySelector) {
                const addButton = document.createElement('button');
                addButton.className = 'add-menu-btn';
                addButton.id = 'add-item-btn';
                addButton.textContent = 'Tambah';
                addButton.addEventListener('click', function(event) {
                    event.stopPropagation();
                    handleAddToCart(this);
                });
                quantitySelector.replaceWith(addButton);
            }
        } else {
            const quantityValue = menuItem.querySelector('.quantity-value');
            if (quantityValue) {
                quantityValue.textContent = cart.items[itemIndex].quantity;
            }
            // Tampilkan modal detail ketika quantity berubah
            showQuantityDetailModal(cart.items[itemIndex]);
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartNotification();
    }
}

function handleAddToCart(button) {
    const menuItem = button.closest('.menu-item');
    const foodName = menuItem.querySelector('.menu-name').textContent;
    const foodPriceText = menuItem.querySelector('.menu-price').textContent;
    const foodPrice = parseInt(foodPriceText.replace(/[^0-9]/g, ''));
    const foodImage = menuItem.querySelector('.menu-image').getAttribute('src');

    if (isItemCustomizable(menuItem)) {
        const matchingItems = cart.items.filter(item => item.name === foodName);
        const quantity = matchingItems.reduce((sum, item) => sum + item.quantity, 0) || 1;
        window.location.href = `menu-detail.php?name=${encodeURIComponent(foodName)}&price=${encodeURIComponent(foodPriceText)}&image=${encodeURIComponent(foodImage)}&quantity=${quantity}`;
        return;
    }

    const existingItemIndex = cart.items.findIndex(item => item.name === foodName && item.image === foodImage);

    if (existingItemIndex >= 0) {
        cart.items[existingItemIndex].quantity += 1;
        // Tampilkan modal detail ketika menambah quantity
        showQuantityDetailModal(cart.items[existingItemIndex]);
    } else {
        const newItem = {
            id: generateUniqueId(),
            name: foodName,
            price: foodPrice,
            quantity: 1,
            image: foodImage
        };
        cart.items.push(newItem);
        // Tampilkan modal detail ketika menambahkan item baru
        showQuantityDetailModal(newItem);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartNotification();
    updateQuantitySelector(menuItem, existingItemIndex >= 0 ? cart.items[existingItemIndex].quantity : 1);
}