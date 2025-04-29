document.addEventListener('DOMContentLoaded', function() {
    const cart = JSON.parse(localStorage.getItem('cart')) || { items: [], total: 0, count: 0 };
    const cartContainer = document.querySelector('.margin-pesanan-customer');
    cartContainer.innerHTML = ''; 
    let subtotal = 0;
    
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>Tambah Catatan</h2>
                <span class="close-btn">&times;</span>
            </div>
            <div class="modal-body">
                <textarea id="note-textarea" placeholder="Permintaanmu akan disesuaikan dengan kebijakan restoran"></textarea>
            </div>
            <div class="modal-footer">
                <button id="delete-note-btn">Delete</button>
                <button id="save-note-btn">Simpan</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);

    const loadingModal = document.createElement('div');
    loadingModal.className = 'loading-modal';
    loadingModal.id = 'loadingModal';
    loadingModal.innerHTML = `
        <div class="modal-content-inner">
            <div class="loading-spinner"></div>
            <h3>Memproses Pesanan...</h3>
        </div>
    `;
    document.body.appendChild(loadingModal);

    const successModal = document.createElement('div');
    successModal.className = 'success-modal';
    successModal.id = 'successModal';
    successModal.innerHTML = `
        <div class="modal-content-inner">
            <div class="success-icon">
                <i class="fa fa-check-circle"></i>
            </div>
            <h3>Pesanan Terkirim!</h3>
            <p>Pesanan Anda telah berhasil dikirim ke restoran.</p>
            <button id="successOkBtn">OK</button>
        </div>
    `;
    document.body.appendChild(successModal);

    const emptyCartModal = document.createElement('div');
    emptyCartModal.className = 'empty-cart-modal';
    emptyCartModal.id = 'emptyCartModal';
    emptyCartModal.innerHTML = `
        <div class="modal-content-inner">
            <div class="warning-icon">
                <i class="fa fa-exclamation-triangle"></i>
            </div>
            <h3>Keranjang Kosong!</h3>
            <p>Silahkan tambahkan item terlebih dahulu sebelum checkout.</p>
            <button id="emptyCartOkBtn">OK</button>
        </div>
    `;
    document.body.appendChild(emptyCartModal);

    const modalElement = document.querySelector('.modal');
    const closeBtn = document.querySelector('.close-btn');
    const saveNoteBtn = document.getElementById('save-note-btn');
    const noteTextarea = document.getElementById('note-textarea');
    let currentNoteIndex = null;
    
    function openModal(index) {
        currentNoteIndex = index;
        noteTextarea.value = cart.items[index].comment || '';
        modalElement.style.display = 'block';
        document.body.classList.add('modal-open'); 
    }
    
    function closeModal() {
        modalElement.style.display = 'none';
        currentNoteIndex = null;
        document.body.classList.remove('modal-open'); 
    }

    document.getElementById('delete-note-btn').addEventListener('click', function() {
        noteTextarea.value = '';
    });
    
    closeBtn.addEventListener('click', closeModal);
    saveNoteBtn.addEventListener('click', function() {
        if (currentNoteIndex !== null) {
            cart.items[currentNoteIndex].comment = noteTextarea.value;
            updateCart();
            
            const itemElement = document.querySelectorAll('.margin-pesanan-item')[currentNoteIndex];
            const commentContainer = itemElement.querySelector('.comment-container');
            const catatanBtnContainer = itemElement.querySelector('.margin-pesanan-customer-menu-kanan-bawah');
            
            if (noteTextarea.value) {
                if (!commentContainer) {
                    const commentDisplay = `
                        <div class="comment-container">
                            <span class="comment">${noteTextarea.value}</span>
                            <i class="fa fa-pencil" style="cursor:pointer;"></i>
                        </div>
                    `;
                    const menuKananAtas = itemElement.querySelector('.margin-pesanan-customer-menu-kanan-atas');
                    const sizeElement = menuKananAtas.querySelector('p');
                    
                    if (sizeElement) {
                        sizeElement.insertAdjacentHTML('afterend', commentDisplay);
                    } else {
                        const h2Element = menuKananAtas.querySelector('h2');
                        h2Element.insertAdjacentHTML('afterend', commentDisplay);
                    }
                } else {
                    const commentSpan = commentContainer.querySelector('.comment');
                    commentSpan.textContent = noteTextarea.value;
                }
                
                const catatanBtn = catatanBtnContainer.querySelector('.catatan-btn');
                if (catatanBtn) {
                    catatanBtn.remove();
                }
            } else {
                if (commentContainer) {
                    commentContainer.remove();
                }
                
                if (!catatanBtnContainer.querySelector('.catatan-btn')) {
                    const catatanBtn = document.createElement('span');
                    catatanBtn.className = 'catatan-btn';
                    catatanBtn.textContent = 'Catatan';
                    catatanBtn.setAttribute('data-index', currentNoteIndex);
                    catatanBtnContainer.appendChild(catatanBtn);
                }
            }
            closeModal();
        }
    });
    

    window.openModal = openModal;
    
    cart.items.forEach((item, index) => {
        subtotal += item.price * item.quantity;
        const itemElement = document.createElement('div');
        itemElement.className = 'margin-pesanan-item';
        
        const commentDisplay = item.comment 
            ? `
                <div class="comment-container">
                    <span class="comment">${item.comment}</span>
                    <i class="fa fa-pencil" style="cursor:pointer;"></i>
                </div>
            ` 
            : '';
            
        itemElement.innerHTML = `
            <div class="margin-pesanan-customer-kiri">
                <img 
                    src="./library/images/${item.image.split('/').pop()}"
                    alt="${item.name}"
                ">
                <div>
                    <div class="margin-pesanan-customer-menu-kanan-atas">
                        <h2>${item.name}</h2>
                        ${item.size ? `<p>${item.size}</p>` : ''}
                        ${commentDisplay}
                    </div>
                    <div class="margin-pesanan-customer-menu-kanan-bawah">
                        ${!item.comment ? `<span class="catatan-btn" data-index="${index}">Catatan</span>` : ''}
                    </div>
                    <div class="margin-pesanan-customer-kanan-atas">
                        <p style="font-size:12px";>${formatCurrency(item.price * item.quantity)}</p>
                    </div>
                </div>
            </div>
            <div class="margin-pesanan-customer-kanan">
                <div class="margin-pesanan-customer-kanan-bawah">
                    <button style="color:white" class="quantity-btn minus" data-index="${index}">-</button>
                    <span class="quantity-value">${item.quantity}</span>
                    <button style="color:white" class="quantity-btn plus" data-index="${index}">+</button>
                </div>
            </div>
        `;
        cartContainer.appendChild(itemElement);

        const minusBtn = itemElement.querySelector('.minus');
        const plusBtn = itemElement.querySelector('.plus');
        const quantityValue = itemElement.querySelector('.quantity-value');
        const catatanBtn = itemElement.querySelector('.catatan-btn');

        minusBtn.addEventListener('click', function() {
            if (item.quantity > 1) {
                item.quantity--;
                quantityValue.textContent = item.quantity;
                itemElement.querySelector('.margin-pesanan-customer-kanan-atas p').textContent = formatCurrency(item.price * item.quantity);
            } else {
                cart.items.splice(index, 1);
                itemElement.remove();
            }
            updateCart();
        });
        
        plusBtn.addEventListener('click', function() {
            item.quantity++;
            quantityValue.textContent = item.quantity;
            itemElement.querySelector('.margin-pesanan-customer-kanan-atas p').textContent = formatCurrency(item.price * item.quantity);
            updateCart();
        });
    });

    cartContainer.addEventListener('click', function(event) {
        const target = event.target;
        if (target.classList.contains('catatan-btn')) {
            const index = parseInt(target.getAttribute('data-index'), 10);
            if (!isNaN(index)) {
                openModal(index);
            }
        } else if (target.classList.contains('fa-pencil')) {
            const itemElement = target.closest('.margin-pesanan-item');
            if (itemElement) {
                const items = Array.from(cartContainer.querySelectorAll('.margin-pesanan-item'));
                const index = items.indexOf(itemElement);
                if (index !== -1) {
                    openModal(index);
                }
            }
        }
    });
    
    if (cart.items.length > 0) {
        document.querySelector('.margin-total-kanan p').textContent = `${formatCurrency(subtotal)}`;
        document.querySelector('.margin-footer-kiri h2').textContent = `${formatCurrency(subtotal)}`;
    } else {
        document.querySelector('.margin-total-kanan p').textContent = `${formatCurrency(0)}`;
        document.querySelector('.margin-footer-kiri h2').textContent = `${formatCurrency(0)}`;
        cartContainer.innerHTML = '<p class="empty-cart">Keranjang belanja kosong</p>';
    }
    
    function formatCurrency(amount) {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0, 
        }).format(amount).replace(/^Rp\s/, 'Rp'); 
    }

    function updateCart() {
        let newSubtotal = 0;
        let newCount = 0;
        
        cart.items.forEach(item => {
            newSubtotal += item.price * item.quantity;
            newCount += item.quantity;
        });
        
        cart.total = newSubtotal;
        cart.count = newCount;
        
        localStorage.setItem('cart', JSON.stringify(cart));
        document.querySelector('.margin-total-kanan p').textContent = `${formatCurrency(newSubtotal)}`;
        document.querySelector('.margin-footer-kiri h2').textContent = `${formatCurrency(newSubtotal)}`;
        
        if(cart.items.length === 0) {
            cartContainer.innerHTML = '<p class="empty-cart">Keranjang belanja kosong</p>';
        }

        const cartNotification = document.getElementById('cartNotification');
        if (cartNotification) {
            const cartCount = document.getElementById('cartCount');
            const cartTotal = document.getElementById('cartTotal');
            if (cartCount && cartTotal) {
                cartCount.textContent = newCount;
                cartTotal.textContent = formatCurrency(newSubtotal);
            }
        }
    }

    const checkoutButton = document.querySelector('.margin-footer-button button');
    if (checkoutButton) {
        checkoutButton.addEventListener('click', function() {
            document.getElementById('loadingModal').classList.add('active');
            setTimeout(() => {
                if (cart.items.length === 0) {
                    document.getElementById('loadingModal').classList.remove('active');
                    document.getElementById('emptyCartModal').classList.add('active');
                } else {
                    document.getElementById('loadingModal').classList.remove('active');
                    document.getElementById('successModal').classList.add('active');
                    localStorage.removeItem('cart');
                    document.querySelector('.margin-pesanan-customer').innerHTML = '<p class="empty-cart">Keranjang belanja kosong</p>';
                    document.querySelector('.margin-total-kanan p').textContent = 'Rp0';
                    document.querySelector('.margin-footer-kiri h2').textContent = 'Rp0';
                    if (document.getElementById('cartNotification')) {
                        document.getElementById('cartCount').textContent = '0';
                        document.getElementById('cartTotal').textContent = 'Rp0';
                    }
                }
            }, 1500); 
        });
    }

    const successOkBtn = document.getElementById('successOkBtn');
    if (successOkBtn) {
        successOkBtn.addEventListener('click', function() {
            document.getElementById('successModal').classList.remove('active');
        });
    }

    const emptyCartOkBtn = document.getElementById('emptyCartOkBtn');
    if (emptyCartOkBtn) {
        emptyCartOkBtn.addEventListener('click', function() {
            document.getElementById('emptyCartModal').classList.remove('active');
        });
    }
});
