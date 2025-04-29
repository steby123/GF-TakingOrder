document.addEventListener('DOMContentLoaded', function() {
    function generateUniqueId() {
        return '_' + Math.random().toString(36).substr(2, 9);
    }

    let cart = JSON.parse(localStorage.getItem('cart')) || { items: [] };

    function isItemCustomizable(itemElement) {
        return itemElement.querySelector('.item-customizable') !== null;
    }

    function handleMenuItemClick(element) {
        const foodName = element.querySelector('.menu-name').textContent;
        const foodPrice = element.querySelector('.menu-price').textContent;
        const foodImage = element.querySelector('.menu-image').getAttribute('src');
        const matchingItems = cart.items.filter(item => item.name === foodName);
        const quantity = matchingItems.reduce((sum, item) => sum + item.quantity, 0) || 1;
        window.location.href = `menu-detail.php?name=${encodeURIComponent(foodName)}&price=${encodeURIComponent(foodPrice)}&image=${encodeURIComponent(foodImage)}&quantity=${quantity}`;
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

    function updateQuantitySelector(menuItem, quantity) {
        const addButton = menuItem.querySelector('.add-menu-btn, #add-item-btn');
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
                        showQuantityModal(menuItem, 1);
                    }
                });
            }
        }
    }

    const style = document.createElement('style');
    style.innerHTML = `
    /* Common modal styles */
    .quantity-modal, .customizable-modal {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.7);
        z-index: 1000;
        justify-content: center;
        align-items: center;
        animation: fadeIn 0.3s ease;
    }

    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    .quantity-modal-content, .customizable-modal-content {
        background-color: white;
        padding: 25px;
        border-radius: 15px;
        width: 85%;
        max-width: 450px;
        box-shadow: 0 5px 20px rgba(0,0,0,0.2);
        position: relative;
    }

    .modal-close-btn {
        position: absolute;
        top: 15px;
        right: 15px;
        background: none;
        border: none;
        font-size: 20px;
        color: #888;
        cursor: pointer;
        padding: 5px;
    }

    .modal-close-btn:hover {
        color: #333;
    }

    .modal-header {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 20px;
        color: #333;
        text-align: center;
        padding-right: 20px;
    }

    .modal-details {
        margin-bottom: 20px;
        color: #666;
        font-size: 15px;
        text-align: center;
    }

    .modal-price {
        margin-top: 25px;
        font-size: 16px;
        padding: 15px 0;
        border-top: 1px solid #eee;
        border-bottom: 1px solid #eee;
    }

    .modal-base-price {
        color: #888;
        font-size: 14px;
        margin-bottom: 5px;
    }

    .modal-total-price {
        font-weight: bold;
        font-size: 18px;
        color: #2e7d32;
    }

    .modal-actions {
        display: flex;
        justify-content: space-between;
        margin-top: 25px;
        gap: 10px;
    }

    .modal-btn {
        padding: 12px 20px;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        font-weight: bold;
        font-size: 15px;
        flex: 1;
        transition: all 0.2s ease;
    }

    .make-another-btn {
        background-color: #f5f5f5;
        color: #333;
    }

    .make-another-btn:hover {
        background-color: #e0e0e0;
    }

    .confirm-btn {
        background-color: #2e7d32;
        color: white;
    }

    .confirm-btn:hover {
        background-color: #1b5e20;
    }

    /* Customizable modal specific styles */
    .customizable-options {
        max-height: 50vh;
        overflow-y: auto;
        margin-bottom: 20px;
        padding-right: 10px;
    }

    .customizable-variant {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px;
        border-bottom: 1px solid #eee;
        margin-bottom: 15px;
        background: #fafafa;
        border-radius: 8px;
        transition: all 0.2s ease;
    }

    .customizable-variant:hover {
        background: #f5f5f5;
    }

    .variant-details {
        flex: 2;
        font-size: 14px;
        line-height: 1.5;
    }

    .variant-size {
        font-weight: bold;
        color: #333;
        margin-bottom: 3px;
    }

    .variant-comment {
        color: #666;
        font-style: italic;
        font-size: 13px;
    }

    .variant-quantity {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
    }

    .variant-quantity button {
        background: #e0e0e0;
        border: none;
        width: 28px;
        height: 28px;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        transition: all 0.2s ease;
    }

    .variant-quantity button:hover {
        background: #bdbdbd;
    }

    .variant-price {
        flex: 1;
        text-align: right;
        font-weight: bold;
        color: #2e7d32;
    }

    .empty-variants {
        text-align: center;
        color: #888;
        padding: 20px 0;
    }

    /* Scrollbar styling */
    .customizable-options::-webkit-scrollbar {
        width: 6px;
    }

    .customizable-options::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 10px;
    }

    .customizable-options::-webkit-scrollbar-thumb {
        background: #bdbdbd;
        border-radius: 10px;
    }

    .customizable-options::-webkit-scrollbar-thumb:hover {
        background: #9e9e9e;
    }
    `;
    document.head.appendChild(style);

    function showQuantityModal(menuItem, change) {
        const foodName = menuItem.querySelector('.menu-name').textContent;
        const foodPriceText = menuItem.querySelector('.menu-price').textContent;
        const foodPrice = parseInt(foodPriceText.replace(/[^0-9]/g, ''));
        const foodImage = menuItem.querySelector('.menu-image').getAttribute('src');
        
        const existingItem = cart.items.find(item => item.name === foodName && !item.variant);
        const currentQuantity = existingItem ? existingItem.quantity : 1;
        const newQuantity = currentQuantity + change;
        
        const modal = document.createElement('div');
        modal.className = 'quantity-modal';
        modal.innerHTML = `
            <div class="quantity-modal-content">
                <div class="modal-header">${foodName}</div>
                <div class="modal-details">
                    Regular item (no customization)
                </div>
                <div class="modal-price">
                    <div class="modal-base-price">${formatCurrency(foodPrice)} Base price</div>
                    <div class="modal-total-price">${formatCurrency(foodPrice * newQuantity)}</div>
                </div>
                <div class="modal-actions">
                    <button class="modal-btn make-another-btn">Make another</button>
                    <button class="modal-btn confirm-btn">Confirm</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        modal.style.display = 'flex';
        
        modal.querySelector('.make-another-btn').addEventListener('click', function() {
            window.location.href = `menu-detail.php?name=${encodeURIComponent(foodName)}&price=${encodeURIComponent(foodPriceText)}&image=${encodeURIComponent(foodImage)}&quantity=1`;
        });
        
        modal.querySelector('.confirm-btn').addEventListener('click', function() {
            updateItemQuantity(menuItem, change);
            modal.remove();
        });
        
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.remove();
            }
        });
    }

    function showCustomizableModal(menuItem) {
        const foodName = menuItem.querySelector('.menu-name').textContent;
        const foodPriceText = menuItem.querySelector('.menu-price').textContent;
        const foodPrice = parseInt(foodPriceText.replace(/[^0-9]/g, ''));
        const foodImage = menuItem.querySelector('.menu-image').getAttribute('src');
        
        const existingItems = cart.items.filter(item => item.name === foodName);
        const totalQuantity = existingItems.reduce((sum, item) => sum + item.quantity, 0);
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

        function updateModalQuantityAndPrice(menuItem) {
            const foodName = menuItem.querySelector('.menu-name').textContent;
            const matchingItems = cart.items.filter(item => item.name === foodName);
            const totalQuantity = matchingItems.reduce((sum, item) => sum + item.quantity, 0);
            const totalPrice = matchingItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            const modal = document.querySelector('.customizable-modal');
            const quantityValue = modal.querySelector('.variant-quantity span');
            const priceValue = modal.querySelector('.modal-total-price');
            
            if (quantityValue) {
                quantityValue.textContent = totalQuantity;
            }
            
            if (priceValue) {
                priceValue.textContent = formatCurrency(totalPrice);  
            }
        }        

        function updateModalContent(menuItem) {
            const foodName = menuItem.querySelector('.menu-name').textContent;
            const existingItems = cart.items.filter(item => item.name === foodName);
            const totalQuantity = existingItems.reduce((sum, item) => sum + item.quantity, 0);
            const totalPrice = existingItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            const modal = document.querySelector('.customizable-modal');
            if (!modal) return;
            
            const totalPriceElement = modal.querySelector('.modal-total-price');
            if (totalPriceElement) {
                totalPriceElement.textContent = `Total: ${formatCurrency(totalPrice)}`;
            }
            
            existingItems.forEach(item => {
                const variantElement = modal.querySelector(`.variant-quantity button[data-id="${item.id}"]`)?.closest('.customizable-variant');
                if (variantElement) {
                    const quantitySpan = variantElement.querySelector('.variant-quantity span');
                    const priceElement = variantElement.querySelector('.variant-price');
                    
                    if (quantitySpan) quantitySpan.textContent = item.quantity;
                    if (priceElement) priceElement.textContent = formatCurrency(item.price * item.quantity);
                }
            });
            
            const allVariantElements = modal.querySelectorAll('.customizable-variant');
            allVariantElements.forEach(variantElement => {
                const itemId = variantElement.querySelector('.variant-quantity button')?.getAttribute('data-id');
                if (itemId && !cart.items.some(item => item.id === itemId)) {
                    variantElement.remove();
                }
            });
            
            const optionsContainer = modal.querySelector('.customizable-options');
            const emptyMessage = optionsContainer.querySelector('.empty-variants');
            if (existingItems.length === 0) {
                if (!emptyMessage) {
                    optionsContainer.innerHTML = '<div class="empty-variants">No variants added yet</div>';
                }
            } else if (emptyMessage) {
                emptyMessage.remove();
            }
            updateQuantityDisplay(menuItem, totalQuantity);
        }

        function updateQuantityDisplay(menuItem, totalQuantity) {
            const quantitySelector = menuItem.querySelector('.quantity-selector');
            if (quantitySelector) {
                const quantityValue = quantitySelector.querySelector('.quantity-value');
                if (quantityValue) {
                    quantityValue.textContent = totalQuantity;
                }
                
                if (totalQuantity === 0) {
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
                    updateModalContent(menuItem); 
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
                    updateModalContent(menuItem); 
                }
            });
        });        
        
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.remove();
            }
        });
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
            }
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartNotification();
        }
    }

    function formatCurrency(amount) {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
        }).format(amount).replace(/^Rp\s/, 'Rp');
    }

    document.querySelectorAll('.menu-item').forEach(menuItem => {
        const foodName = menuItem.querySelector('.menu-name').textContent;
        const matchingItems = cart.items.filter(item => item.name === foodName);
        const totalQuantity = matchingItems.reduce((sum, item) => sum + item.quantity, 0);
        const image = menuItem.querySelector('.menu-image');
        const name = menuItem.querySelector('.menu-name');
        const price = menuItem.querySelector('.menu-price');

        if (isItemCustomizable(menuItem) || (!isItemCustomizable(menuItem) && image && name && price)) {
            [image, name, price].forEach(element => {
                if (element) {
                    element.style.cursor = 'pointer';
                    element.addEventListener('click', function(event) {
                        event.stopPropagation();
                        handleMenuItemClick(menuItem);
                    });
                }
            });
            if (totalQuantity > 0) {
                updateQuantitySelector(menuItem, totalQuantity);
            }
        }

        const addButton = menuItem.querySelector('.add-menu-btn, #add-item-btn');
        if (addButton) {
            addButton.id = 'add-item-btn';
            addButton.addEventListener('click', function(event) {
                event.stopPropagation();
                handleAddToCart(this);
            });
        }

        if (totalQuantity > 1 && !isItemCustomizable(menuItem)) {
            updateQuantitySelector(menuItem, totalQuantity);
        }
    });

    const viewCartBtn = document.querySelector('.view-cart-btn');
    if (viewCartBtn) {
        viewCartBtn.addEventListener('click', function() {
            window.location.href = 'takingorderkeranjang.php';
        });
    }

    updateCartNotification();
});