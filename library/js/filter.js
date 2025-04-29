document.addEventListener('DOMContentLoaded', function() {
    // Data menu
    const menuData = {
        'paling-laku': [
            {
                image: './library/images/kwetiaugoreng.jpg',
                name: 'Kwetiau Goreng (L)',
                price: '23000',
                customizable: true
            },
            {
                image: './library/images/nasiayam.jpg',
                name: 'Nasi Ayam (L)',
                price: '27000',
                customizable: true
            }
        ],
        'rekomendasi': [
            {
                image: './library/images/miegoreng.jpg',
                name: 'Mie Goreng (M)',
                price: '25000',
                customizable: true
            },
            {
                image: './library/images/bihungoreng.jpg',
                name: 'Bihun Goreng (M)',
                price: '28000',
                customizable: true
            }
        ]
    };

    // DOM Elements
    const elements = {
        palingLakuBtn: document.getElementById('paling-laku-btn'),
        modal: document.getElementById('recommendation-modal'),
        closeModal: document.querySelector('.close-modal'),
        palingLakuOption: document.getElementById('paling-laku-option'),
        rekomendasiOption: document.getElementById('rekomendasi-option'),
        menuContainer: document.getElementById('menu-container'),
        sectionTitle: document.getElementById('section-title')
    };
    let currentSelection = localStorage.getItem('menuPreference') || 'paling-laku';

    // Shared cart functionality
    let cart = JSON.parse(localStorage.getItem('cart')) || { items: [] };

    // Helper functions
    function generateUniqueId() {
        return '_' + Math.random().toString(36).substr(2, 9);
    }

    function formatCurrency(amount) {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
        }).format(amount).replace(/^Rp\s/, 'Rp');
    }

    function formatPrice(price) {
        if (typeof price === 'string' && price.includes('.')) {
            return price;
        }
        const numericPrice = typeof price === 'string' ? parseInt(price.replace(/[^\d]/g, '')) || 0 : price;
        return numericPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    function isItemCustomizable(itemElement) {
        return itemElement.querySelector('.item-customizable') !== null;
    }

    // Main functions
    function renderMenu() {
        elements.menuContainer.innerHTML = menuData[currentSelection].map(item => `
            <div class="order-item" data-name="${item.name}">
                <img src="${item.image}" alt="${item.name}" class="menu-image" />
                ${item.customizable ? '<div class="item-customizable"><p>Customizable</p></div>' : ''}
                <div class="item-info">
                    <h3 class="menu-name">${item.name}</h3>
                    <div class="item-price menu-price">${formatPrice(item.price)}</div>
                </div>
                <button class="add-btn">Tambah</button>
            </div>
        `).join('');
    
        document.querySelectorAll('.order-item').forEach(menuItem => {
            const foodName = menuItem.querySelector('.menu-name').textContent;
            const matchingItems = cart.items.filter(item => item.name === foodName);
            const totalQuantity = matchingItems.reduce((sum, item) => sum + item.quantity, 0);

            if (totalQuantity > 0) {
                updateQuantitySelector(menuItem, totalQuantity);
            }

            menuItem.querySelectorAll('.menu-image, .menu-name, .menu-price').forEach(el => {
                el.addEventListener('click', () => handleMenuItemClick(menuItem));
            });
    
            const addButton = menuItem.querySelector('.add-btn');
            if (addButton) {
                addButton.addEventListener('click', function(event) {
                    event.stopPropagation();
                    handleAddToCart(this);
                });
            }
        });
    }

    function handleMenuItemClick(element) {
        const orderItem = element.closest('.order-item');
        const foodName = orderItem.querySelector('.menu-name').textContent;
        const foodPrice = orderItem.querySelector('.menu-price').textContent;
        const foodImage = orderItem.querySelector('.menu-image').getAttribute('src');
        const matchingItems = cart.items.filter(item => item.name === foodName);
        const quantity = matchingItems.reduce((sum, item) => sum + item.quantity, 0) || 1;
        
        window.location.href = `menu-detail.php?name=${encodeURIComponent(foodName)}&price=${encodeURIComponent(foodPrice)}&image=${encodeURIComponent(foodImage)}&quantity=${quantity}`;
    }

    function handleAddToCart(button) {
        const menuItem = button.closest('.order-item');
        const foodName = menuItem.querySelector('.menu-name').textContent;
        const foodPriceText = menuItem.querySelector('.menu-price').textContent;
        const foodPrice = parseInt(foodPriceText.replace(/[^\d]/g, '')) || 0;
        const foodImage = menuItem.querySelector('.menu-image').getAttribute('src');

        if (isItemCustomizable(menuItem)) {
            const matchingItems = cart.items.filter(item => item.name === foodName);
            const quantity = matchingItems.reduce((sum, item) => sum + item.quantity, 0) || 1;
            window.location.href = `menu-detail.php?name=${encodeURIComponent(foodName)}&price=${encodeURIComponent(foodPriceText)}&image=${encodeURIComponent(foodImage)}&quantity=${quantity}`;
            return;
        }

        const existingItemIndex = cart.items.findIndex(item => item.name === foodName && !item.variant);

        if (existingItemIndex >= 0) {
            cart.items[existingItemIndex].quantity += 1;
        } else {
            cart.items.push({
                id: generateUniqueId(),
                name: foodName,
                price: foodPrice,
                quantity: 1,
                image: foodImage
            });
        }
        
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartNotification();
        updateQuantitySelector(menuItem, existingItemIndex >= 0 ? cart.items[existingItemIndex].quantity : 1);
    }

    function updateQuantitySelector(menuItem, quantity) {
        const addButton = menuItem.querySelector('.add-btn');
        const foodName = menuItem.querySelector('.menu-name').textContent;
        const matchingItems = cart.items.filter(item => item.name === foodName);
        const totalQuantity = matchingItems.reduce((sum, item) => sum + item.quantity, 0);

        if (totalQuantity > 0 || quantity > 1) {
            const quantitySelector = document.createElement('div');
            quantitySelector.className = 'quantity-selector';
            quantitySelector.innerHTML = `
                <button class="quantity-btn minus">-</button>
                <span class="quantity-value">${totalQuantity}</span>
                <button class="quantity-btn plus">+</button>
            `;
            
            if (addButton) {
                addButton.replaceWith(quantitySelector);
                
                quantitySelector.querySelector('.minus').addEventListener('click', function(event) {
                    event.stopPropagation();
                    if (isItemCustomizable(menuItem)) {
                        showCustomizableModal(menuItem);
                    } else {
                        updateItemQuantity(menuItem, -1);
                    }
                });
                
                quantitySelector.querySelector('.plus').addEventListener('click', function(event) {
                    event.stopPropagation();
                    if (isItemCustomizable(menuItem)) {
                        showCustomizableModal(menuItem);
                    } else {
                        updateItemQuantity(menuItem, 1);
                    }
                });
            }
        }
    }

    function updateItemQuantity(menuItem, change) {
        const foodName = menuItem.querySelector('.menu-name').textContent;
        const matchingItems = cart.items.filter(item => item.name === foodName && !item.variant);
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
                    addButton.className = 'add-btn';
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
            }
            
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartNotification();
        }
    }

    function showCustomizableModal(menuItem) {
        const foodName = menuItem.querySelector('.menu-name').textContent;
        const foodPriceText = menuItem.querySelector('.menu-price').textContent;
        const foodPrice = parseInt(foodPriceText.replace(/[^\d]/g, '')) || 0;
        const foodImage = menuItem.querySelector('.menu-image').getAttribute('src');
        
        const existingItems = cart.items.filter(item => item.name === foodName);
        const totalPrice = existingItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        
        const modal = document.createElement('div');
        modal.className = 'customizable-modal';
        modal.innerHTML = `
            <div class="customizable-modal-content">
                <button class="modal-close-btn confirm-btn">
                    <i class="fa fa-times"></i>
                </button>
                <div class="modal-header">${foodName}</div>
                <div class="customizable-options">
                    ${existingItems.length > 0 ? 
                        existingItems.map(item => `
                            <div class="customizable-variant">
                                <div class="variant-details">
                                    <div class="variant-size">${item.size || 'Regular Size'}</div>
                                    ${item.comment ? `<div class="variant-comment">Note: ${item.comment}</div>` : ''}
                                </div>
                                <div class="variant-quantity">
                                    <button class="variant-minus" data-id="${item.id}">-</button>
                                    <span>${item.quantity}</span>
                                    <button class="variant-plus" data-id="${item.id}">+</button>
                                </div>
                                <div class="variant-price">${formatCurrency(item.price * item.quantity)}</div>
                            </div>
                        `).join('') : 
                        '<div class="empty-variants">No variants added yet</div>'
                    }
                </div>
                
                <div class="modal-price">
                    <div class="modal-total-price">Total: ${formatCurrency(totalPrice)}</div>
                </div>
                
                <div class="modal-actions">
                    <button class="modal-btn make-another-btn">Make another</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        modal.style.display = 'flex';
        
        modal.querySelector('.make-another-btn').addEventListener('click', function() {
            window.location.href = `menu-detail.php?name=${encodeURIComponent(foodName)}&price=${encodeURIComponent(foodPriceText)}&image=${encodeURIComponent(foodImage)}&quantity=1`;
        });
        
        modal.querySelector('.modal-close-btn').addEventListener('click', function() {
            modal.remove();
        });

        function updateModalContent() {
            const foodName = menuItem.querySelector('.menu-name').textContent;
            const existingItems = cart.items.filter(item => item.name === foodName);
            const totalQuantity = existingItems.reduce((sum, item) => sum + item.quantity, 0);
            const totalPrice = existingItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            
            // Update modal content
            const totalPriceElement = modal.querySelector('.modal-total-price');
            if (totalPriceElement) {
                totalPriceElement.textContent = `Total: ${formatCurrency(totalPrice)}`;
            }
            
            // Update each variant item
            existingItems.forEach(item => {
                const variantElement = modal.querySelector(`.variant-quantity button[data-id="${item.id}"]`)?.closest('.customizable-variant');
                if (variantElement) {
                    const quantitySpan = variantElement.querySelector('.variant-quantity span');
                    const priceElement = variantElement.querySelector('.variant-price');
                    
                    if (quantitySpan) quantitySpan.textContent = item.quantity;
                    if (priceElement) priceElement.textContent = formatCurrency(item.price * item.quantity);
                }
            });
            
            // Remove deleted variants
            const allVariantElements = modal.querySelectorAll('.customizable-variant');
            allVariantElements.forEach(variantElement => {
                const itemId = variantElement.querySelector('.variant-quantity button')?.getAttribute('data-id');
                if (itemId && !cart.items.some(item => item.id === itemId)) {
                    variantElement.remove();
                }
            });
            
            // Update quantity selector in main page
            updateQuantityDisplay(totalQuantity);
            
            // Show empty message if no variants left
            const optionsContainer = modal.querySelector('.customizable-options');
            const emptyMessage = optionsContainer.querySelector('.empty-variants');
            if (existingItems.length === 0) {
                if (!emptyMessage) {
                    optionsContainer.innerHTML = '<div class="empty-variants">No variants added yet</div>';
                }
            } else if (emptyMessage) {
                emptyMessage.remove();
            }
        }

        function updateQuantityDisplay(totalQuantity) {
            const menuItem = document.querySelector(`.order-item[data-name="${foodName}"]`);
            if (!menuItem) return;
            
            const quantitySelector = menuItem.querySelector('.quantity-selector');
            if (quantitySelector) {
                const quantityValue = quantitySelector.querySelector('.quantity-value');
                if (quantityValue) {
                    quantityValue.textContent = totalQuantity;
                }
                
                if (totalQuantity === 0) {
                    const addButton = document.createElement('button');
                    addButton.className = 'add-btn';
                    addButton.textContent = 'Tambah';
                    addButton.addEventListener('click', function(event) {
                        event.stopPropagation();
                        handleAddToCart(this);
                    });
                    quantitySelector.replaceWith(addButton);
                }
            }
        }

        modal.querySelectorAll('.variant-plus').forEach(btn => {
            btn.addEventListener('click', function() {
                const itemId = this.getAttribute('data-id');
                const itemIndex = cart.items.findIndex(item => item.id === itemId);
                if (itemIndex >= 0) {
                    cart.items[itemIndex].quantity += 1;
                    localStorage.setItem('cart', JSON.stringify(cart));
                    updateCartNotification();
                    updateModalContent();
                }
            });
        });
        
        modal.querySelectorAll('.variant-minus').forEach(btn => {
            btn.addEventListener('click', function() {
                const itemId = this.getAttribute('data-id');
                const itemIndex = cart.items.findIndex(item => item.id === itemId);
                if (itemIndex >= 0) {
                    cart.items[itemIndex].quantity -= 1;
        
                    if (cart.items[itemIndex].quantity <= 0) {
                        cart.items.splice(itemIndex, 1);
                    }
        
                    localStorage.setItem('cart', JSON.stringify(cart));
                    updateCartNotification();
                    updateModalContent();
                }
            });
        });
        
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.remove();
            }
        });
    }

    function updateCartNotification() {
        const cartCount = document.getElementById('cartCount');
        const cartTotal = document.getElementById('cartTotal');
        const cartNotification = document.getElementById('cartNotification');
        if (cartCount && cartTotal && cartNotification) {
            const totalItems = cart.items.reduce((sum, item) => sum + item.quantity, 0);
            const totalPrice = cart.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            cartCount.textContent = totalItems;
            cartTotal.textContent = formatCurrency(totalPrice);
            if (totalItems > 0) {
                cartNotification.classList.remove('hidden');
            } else {
                cartNotification.classList.add('hidden');
            }
        }
    }

    function updateUI(selection) {
        currentSelection = selection;
        localStorage.setItem('menuPreference', selection);
        elements.sectionTitle.textContent = selection === 'paling-laku' ? 'Paling Laku' : 'Rekomendasi';
        elements.palingLakuBtn.textContent = selection === 'paling-laku' ? 'Paling Laku' : 'Rekomendasi';
        elements.palingLakuOption.classList.toggle('active', selection === 'paling-laku');
        elements.rekomendasiOption.classList.toggle('active', selection === 'rekomendasi');
        renderMenu();
    }

    // Event listeners
    elements.palingLakuBtn.addEventListener('click', () => {
        elements.modal.style.display = 'block';
    });

    elements.closeModal.addEventListener('click', () => {
        elements.modal.style.display = 'none';
    });

    elements.palingLakuOption.addEventListener('click', () => {
        updateUI('paling-laku');
        elements.modal.style.display = 'none';
    });

    elements.rekomendasiOption.addEventListener('click', () => {
        updateUI('rekomendasi');
        elements.modal.style.display = 'none';
    });

    // Initialize
    updateUI(currentSelection);
    updateCartNotification();
});