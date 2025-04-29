document.addEventListener('DOMContentLoaded', function() {
    const menuCustomizations = {
        "kwetiau goreng": {
            size: [
                {name: "telur", price: 2000},
                {name: "daging babi", price: 10000},
                {name: "pedas", price: 0},
                {name: "ayam", price: 10000}
            ],
            notes: true
        },
        "Nasi ayam": {
            size: [
                {name: "telur", price: 2000},
                {name: "daging babi", price: 10000},
                {name: "pedas", price: 0},
                {name: "ayam", price: 10000}
            ],
            notes: true
        },
        "Mie Goreng": {
            size: [
                {name: "telur", price: 2000},
                {name: "daging babi", price: 10000},
                {name: "pedas", price: 0},
                {name: "ayam", price: 10000}
            ],
            notes: true
        },
        "Bihun Goreng": {
            size: [
                {name: "telur", price: 2000},
                {name: "daging babi", price: 10000},
                {name: "pedas", price: 0},
                {name: "ayam", price: 10000}
            ],
            notes: true
        },
        "Ayam Goreng": {
            size: [
                {name: "dada", price:0},
                {name: "paha", price:0},
                {name: "sayap", price:0}
            ],
            notes: true
        },
        "Babi Goreng": {
            size: [
                {name: "sambal hijau", price: 0},
                {name: "sambal merah", price: 0},
                {name: "sambal matah", price: 5000},
                {name: "Kaldu sup babi", price: 10000}
            ],
            "notes": true
        },
        "Sapi Goreng": {
            size: [
                {name: "sambal hijau", price: 0},
                {name: "sambal merah", price: 0},
                {name: "sambal matah", price: 5000},
                {name: "Kaldu sup sapi", price: 10000}
            ],
            notes: true
        },
        "Bawang Goreng":{
            size: [
                {name: "sambal hijau", price: 0},
                {name: "sambal merah", price: 0},
                {name: "sambal matah", price: 5000}
            ],
            notes: true
        },
        "Petai Goreng": {
            size: [
                {name: "sambal hijau", price: 0},
                {name: "sambal merah", price: 0},
                {name: "sambal matah", price: 5000}
            ],
            notes: true
        },
        "Mie Kuning Goreng": {
            size: [
                {name: "telur", price: 2000},
                {name: "daging babi", price: 10000},
                {name: "pedas", price: 0},
                {name: "ayam", price: 10000}
            ],
            notes: true
        },
        "Pocari": {
            size: [
                {name: "normal ice", price: 0},
                {name: "extra ice", price: 0},
                {name: "less ice", price: 0},
                {name: "tanpa ice", price: 0}
            ],
            notes: true  
        },
        "Soya": {
            size: [
                {name: "normal ice", price: 0},
                {name: "extra ice", price: 0},
                {name: "less ice", price: 0},
                {name: "tanpa ice", price: 0}
            ],
            notes: true  
        },
        "Teh Bunga": {
            size: [
                {name: "normal ice", price: 0},
                {name: "extra ice", price: 0},
                {name: "less ice", price: 0},
                {name: "tanpa ice", price: 0}
            ],
            notes: true  
        },
        "Sanford": {
            size: [
                {name: "normal ice", price: 0},
                {name: "extra ice", price: 0},
                {name: "less ice", price: 0},
                {name: "tanpa ice", price: 0}
            ],
            notes: true  
        },
        "Teh Obeng": {
            size: [
                {name: "normal ice", price: 0},
                {name: "extra ice", price: 0},
                {name: "less ice", price: 0},
                {name: "tanpa ice", price: 0},
                {name: "normal sugar", price: 0},
                {name: "less sugar", price: 0},
                {name: "extra sugar", price: 0},
                {name: "tanpa sugar", price: 0}
            ],
            notes: true
        },
        "Teh Tarik Dingin": {
            size: [
                {name: "normal ice", price: 0},
                {name: "extra ice", price: 0},
                {name: "less ice", price: 0},
                {name: "tanpa ice", price: 0},
                {name: "normal sugar", price: 0},
                {name: "less sugar", price: 0},
                {name: "extra sugar", price: 0},
                {name: "tanpa sugar", price: 0},
                {name: "extra susu", price: 5000}
            ],
            notes: true
        },
        "Teh Tarik Panas": {
            size: [
                {name: "normal sugar", price: 0},
                {name: "less sugar", price: 0},
                {name: "extra sugar", price: 0},
                {name: "tanpa sugar", price: 0},
                {name: "extra susu", price: 5000}
            ],
            notes: true
        },
        "Sirup Kuning": {
            size: [
                {name: "normal ice", price: 0},
                {name: "extra ice", price: 0},
                {name: "less ice", price: 0},
                {name: "tanpa ice", price: 0},
                {name: "normal sugar", price: 0},
                {name: "less sugar", price: 0},
                {name: "extra sugar", price: 0},
                {name: "tanpa sugar", price: 0},
                {name: "extra susu", price: 5000},
                {name: "es krim", price: 5000}
            ],
            notes: true
        },
        "Sirup Merah": {
            size: [
                {name: "normal ice", price: 0},
                {name: "extra ice", price: 0},
                {name: "less ice", price: 0},
                {name: "tanpa ice", price: 0},
                {name: "normal sugar", price: 0},
                {name: "less sugar", price: 0},
                {name: "extra sugar", price: 0},
                {name: "tanpa sugar", price: 0},
                {name: "extra susu", price: 5000},
                {name: "es krim", price: 5000}
            ],
            notes: true
        },
        "Teh O": {
            size: [
                {name: "normal sugar", price: 0},
                {name: "less sugar", price: 0},
                {name: "extra sugar", price: 0},
                {name: "tanpa sugar", price: 0},
            ],
            notes: true
        },
        "Kopi Susu Dingin":{
            size: [
                {name: "normal ice", price: 0},
                {name: "extra ice", price: 0},
                {name: "less ice", price: 0},
                {name: "tanpa ice", price: 0},
                {name: "normal sugar", price: 0},
                {name: "less sugar", price: 0},
                {name: "extra sugar", price: 0},
                {name: "tanpa sugar", price: 0},
                {name: "extra susu", price: 5000},
            ],
            notes: true
        },
        "Kopi Susu Panas":{
            size: [
                {name: "normal sugar", price: 0},
                {name: "less sugar", price: 0},
                {name: "extra sugar", price: 0},
                {name: "tanpa sugar", price: 0},
                {name: "extra susu", price: 5000},
            ],
            notes: true
        },
        "Kopi Dingin": {
            size: [
                {name: "normal ice", price: 0},
                {name: "extra ice", price: 0},
                {name: "less ice", price: 0},
                {name: "tanpa ice", price: 0},
                {name: "normal sugar", price: 0},
                {name: "less sugar", price: 0},
                {name: "extra sugar", price: 0},
                {name: "tanpa sugar", price: 0},
            ],
            notes: true
        },
        "Kopi Panas": {
            size: [
                {name: "normal sugar", price: 0},
                {name: "less sugar", price: 0},
                {name: "extra sugar", price: 0},
                {name: "tanpa sugar", price: 0},
            ],
            notes: true
        },
        "Jus Apel": {
            size: [
                {name: "normal ice", price: 0},
                {name: "extra ice", price: 0},
                {name: "less ice", price: 0},
                {name: "tanpa ice", price: 0},
                {name: "normal sugar", price: 0},
                {name: "less sugar", price: 0},
                {name: "extra sugar", price: 0},
                {name: "tanpa sugar", price: 0},
                {name: "extra susu", price: 5000},
                {name: "es krim", price: 5000}
            ],
            notes: true
        },
        "Jus Mangga": {
            size: [
                {name: "normal ice", price: 0},
                {name: "extra ice", price: 0},
                {name: "less ice", price: 0},
                {name: "tanpa ice", price: 0},
                {name: "normal sugar", price: 0},
                {name: "less sugar", price: 0},
                {name: "extra sugar", price: 0},
                {name: "tanpa sugar", price: 0},
                {name: "extra susu", price: 5000},
                {name: "es krim", price: 5000}
            ],
            notes: true
        },
        "Jus Naga":{
            size: [
                {name: "normal ice", price: 0},
                {name: "extra ice", price: 0},
                {name: "less ice", price: 0},
                {name: "tanpa ice", price: 0},
                {name: "normal sugar", price: 0},
                {name: "less sugar", price: 0},
                {name: "extra sugar", price: 0},
                {name: "tanpa sugar", price: 0},
                {name: "extra susu", price: 5000},
                {name: "es krim", price: 5000}
            ],
            notes: true
        },
        "Jus Pisang":{
            size: [
                {name: "normal ice", price: 0},
                {name: "extra ice", price: 0},
                {name: "less ice", price: 0},
                {name: "tanpa ice", price: 0},
                {name: "normal sugar", price: 0},
                {name: "less sugar", price: 0},
                {name: "extra sugar", price: 0},
                {name: "tanpa sugar", price: 0},
                {name: "extra susu", price: 5000},
                {name: "es krim", price: 5000}
            ],
            notes: true
        },
        "Coca Cola": {
            size: [
                {name: "normal ice", price: 0},
                {name: "extra ice", price: 0},
                {name: "less ice", price: 0},
                {name: "tanpa ice", price: 0},
                {name: "normal sugar", price: 0},
                {name: "less sugar", price: 0},
                {name: "extra sugar", price: 0},
                {name: "tanpa sugar", price: 0},
                {name: "extra susu", price: 5000},
                {name: "es krim", price: 5000}
            ],
            notes: true
        },
        "Sprite": {
            size: [
                {name: "normal ice", price: 0},
                {name: "extra ice", price: 0},
                {name: "less ice", price: 0},
                {name: "tanpa ice", price: 0},
                {name: "normal sugar", price: 0},
                {name: "less sugar", price: 0},
                {name: "extra sugar", price: 0},
                {name: "tanpa sugar", price: 0},
                {name: "extra susu", price: 5000},
                {name: "es krim", price: 5000}
            ],
            notes: true
        },
        "Pepsi":{
            size: [
                {name: "normal ice", price: 0},
                {name: "extra ice", price: 0},
                {name: "less ice", price: 0},
                {name: "tanpa ice", price: 0},
                {name: "normal sugar", price: 0},
                {name: "less sugar", price: 0},
                {name: "extra sugar", price: 0},
                {name: "tanpa sugar", price: 0},
                {name: "extra susu", price: 5000},
                {name: "es krim", price: 5000}
            ],
            notes: true
        },
        "Kentang Goreng": {
            size: [
                {name: "saus cabae", price: 0},
                {name: "sambal tomat", price: 0}
            ],
            notes: true
        },
        "Es Krim Oreo":{
            size: [
                {name: "oreo topping", price: 3000},
                {name: "topping choco", price: 3000}
            ],
            notes: true
        },
        "Sandwich Buah": {
            "size": [
                {name:"buah strawberry", "price": 0},
                {name:"buah blueberry", "price": 0},
                {name:"buah kiwi", "price": 0},
                {name:"buah mangga", "price": 0},
                {name:"buah jeruk", "price": 0}
            ],
            notes: true
        }
    };

    function generateUniqueId() {
        return '_' + Math.random().toString(36).substr(2, 9);
    }

    function generateUniqueId() {
        return '_' + Math.random().toString(36).substr(2, 9);
    }


    let cart = { items: [], total: 0, count: 0 };
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        try {
            cart = JSON.parse(savedCart);
        } catch (e) {
            cart = { items: [], total: 0, count: 0 };
        }
    }
    const commentTextarea = document.getElementById('food-comment');
    const urlParams = new URLSearchParams(window.location.search);
    const itemName = urlParams.get('name') || urlParams.get('menu');
    const itemPrice = parseInt((urlParams.get('price') || '0').replace(/\./g, ''));
    const itemImage = urlParams.get('image');
    const initialQuantity = parseInt(urlParams.get('quantity')) || 0;
    const plusBtn = document.querySelector('.plus');
    const minusBtn = document.querySelector('.minus');
    const quantityValue = document.querySelector('.quantity-value');
    const viewCartBtn = document.querySelector('.view-cart-btn');
    let quantity = initialQuantity;
    quantityValue.textContent = quantity;

    function updateCustomizations(menuName) {
        const customizeContainer = document.querySelector('.container-customize');
        const header = customizeContainer.querySelector('.margin-customize-header');
        const existingContent = customizeContainer.innerHTML;
        
        customizeContainer.innerHTML = '';
        if (header) {
            customizeContainer.appendChild(header);
        }
        
        const menuKey = Object.keys(menuCustomizations).find(key => 
            menuName.toLowerCase().includes(key.toLowerCase())
        );
        
        if (!menuKey) {
            customizeContainer.style.display = 'none';
            return;
        }
        
        const customization = menuCustomizations[menuKey];
        customizeContainer.style.display = 'block';
        
        const fragment = document.createDocumentFragment();
        
        customization.size.forEach((size, index) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'margin-customize';
            optionDiv.innerHTML = `
                <div class="margin-customize-kiri">
                    <input type="checkbox" id="size-${index}" name="customize" 
                           value="${size.name}" data-price="${size.price}">
                    <label for="size-${index}">${size.name}</label>
                </div>
                <div class="margin-customize-kanan">
                    <span class="price-tag ${size.price !== 0 ? 'large-price' : ''}">
                        ${size.price === 0 ? 'Free' : `+${formatCurrency(size.price)}`}
                    </span>
                </div>
            `;
            fragment.appendChild(optionDiv);
        });
        
        customizeContainer.appendChild(fragment);
    }

    function updateCartTotals() {
        cart.count = cart.items.reduce((total, item) => total + item.quantity, 0);
        const itemPrice = cart.items.length > 0 ? cart.items[0].price : 0;
        document.getElementById('cartCount').textContent = cart.count;
        document.getElementById('currentItemTotal').textContent = formatCurrency(itemPrice);
        document.getElementById('cartNotification').classList.toggle('hidden', cart.count === 0);
    }

    function formatCurrency(amount) {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0, 
        }).format(amount).replace(/^Rp\s/, 'Rp'); 
    }

    function getSelectedSizes() {
        const selectedSizes = [];
        const checkboxes = document.querySelectorAll('input[name="customize"]:checked');
        checkboxes.forEach(checkbox => {
            selectedSizes.push({
                name: checkbox.value,
                price: parseInt(checkbox.dataset.price)
            });
        });
        return selectedSizes;
    }

    function resetOrderForm() {
        quantity = 1;
        quantityValue.textContent = quantity;
        const checkboxes = document.querySelectorAll('input[name="customize"]:checked');
        checkboxes.forEach(checkbox => checkbox.checked = false);
        if (commentTextarea) {
            commentTextarea.value = '';
        }
        document.getElementById('currentItemTotal').textContent = formatCurrency(itemPrice);
    }

    window.addEventListener('load', function() {
        resetOrderForm();
    });

    function updateCartItem(updateCommentOnly = false) {
        const selectedSizes = getSelectedSizes();
        const sizePrices = selectedSizes.reduce((total, size) => total + size.price, 0);
        const singleItemPrice = itemPrice + sizePrices;
        const totalItemPrice = singleItemPrice * quantity;
        
        document.getElementById('currentItemTotal').textContent = formatCurrency(totalItemPrice);
        
        const sizeNames = selectedSizes.map(size => size.name).join(', ');
        const comment = commentTextarea ? commentTextarea.value : '';
        
        const existingItemIndex = cart.items.findIndex(item =>
            item.name === itemName &&
            item.size === sizeNames &&
            item.comment === comment
        );
        
        if (quantity > 0) {
            if (existingItemIndex >= 0) {
                if (updateCommentOnly) {
                    cart.items[existingItemIndex].comment = comment;
                } else {
                    cart.items[existingItemIndex].quantity = quantity;
                    cart.items[existingItemIndex].price = singleItemPrice;
                    cart.items[existingItemIndex].baseprice = itemPrice;
                    cart.items[existingItemIndex].sizePrice = sizePrices;
                    cart.items[existingItemIndex].image = itemImage;
                    cart.items[existingItemIndex].comment = comment;
                }
            } else {
                const newQuantity = updateCommentOnly ? quantity : quantity;
                cart.items.push({
                    id: generateUniqueId(),
                    name: itemName,
                    baseprice: itemPrice,
                    size: sizeNames,
                    sizePrice: sizePrices,
                    price: singleItemPrice,
                    quantity: newQuantity,
                    image: itemImage,
                    comment: comment
                });
            }
        } else if (existingItemIndex >= 0 && !updateCommentOnly) {
            cart.items.splice(existingItemIndex, 1);
        }
        
        cart.total = cart.items.reduce((total, item) => total + (item.price * item.quantity), 0);
        cart.count = cart.items.reduce((total, item) => total + item.quantity, 0);
        document.getElementById('cartCount').textContent = cart.count;
        document.getElementById('cartNotification').classList.toggle('hidden', cart.count === 0);
        localStorage.setItem('cart', JSON.stringify(cart));
    
        return true;
    }

    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('plus') || e.target.closest('.plus')) {
            quantity++;
            quantityValue.textContent = quantity;
            updateCartItem();
        } else if (e.target.classList.contains('minus') || e.target.closest('.minus')) {
            if (quantity > 0) {
                quantity--;
                quantityValue.textContent = quantity;
                updateCartItem();
            }
        }
    });

    document.addEventListener('change', function(e) {
        if (e.target.name === 'customize') {
            // On checkbox change, only update displayed price, do not save to localStorage or update cart items
            const selectedSizes = getSelectedSizes();
            const sizePrices = selectedSizes.reduce((total, size) => total + size.price, 0);
            const singleItemPrice = itemPrice + sizePrices;
            const totalItemPrice = singleItemPrice * quantity;
            document.getElementById('currentItemTotal').textContent = formatCurrency(totalItemPrice);
        }
    });
    
    if (commentTextarea) {
        // Commented out to prevent immediate localStorage update on comment change or blur
        // commentTextarea.addEventListener('change', function() {
        //     updateCartItem(true);
        // });
        
        // commentTextarea.addEventListener('blur', function() {
        //     updateCartItem(true);
        // });
    }

    viewCartBtn.addEventListener('click', function(e) {
        e.preventDefault();
        // On view cart button click, update cart items and save to localStorage
        updateCartItem();
        resetOrderForm();
        localStorage.setItem('cart', JSON.stringify(cart));
        window.location.href = 'index.php';
    });

    if (itemName) {
        updateCustomizations(itemName);
    
        const existingItem = cart.items.find(item => item.name === itemName);
        if (existingItem) {
            quantity = existingItem.quantity;
            quantityValue.textContent = quantity;
            if (commentTextarea && existingItem.comment) {
                commentTextarea.value = existingItem.comment;
            }
            if (existingItem.size) {
                const sizeNames = existingItem.size.split(', ');
                sizeNames.forEach(sizeName => {
                    const sizeInput = document.querySelector(`input[name="customize"][value="${sizeName.trim()}"]`);
                    if (sizeInput) {
                        sizeInput.checked = true;
                    }
                });
            }
        }
        updateCartTotals();
    }
});

