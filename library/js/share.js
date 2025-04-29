document.addEventListener('DOMContentLoaded', function() {
    const shareBtn = document.getElementById('share-btn');
    const shareModal = document.getElementById('shareModal');
    const whatsappShare = document.getElementById('whatsappShare');
    const clipboardShare = document.getElementById('clipboardShare');
    const closeShare = document.querySelector('.close-share-x');
    const menuImage = document.querySelector('.menu-image');
    if (menuImage) {
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.has('image')) {
            const imageUrl = getAbsoluteImageUrl(urlParams.get('image'));
            menuImage.src = imageUrl;
            menuImage.onerror = function() {
                console.warn('Gagal memuat gambar dari URL:', imageUrl);
                // Fallback ke gambar default jika ada
                if (menuImage.dataset.fallbackImage) {
                    menuImage.src = menuImage.dataset.fallbackImage;
                }
            };
        }
    }

    function getAbsoluteImageUrl(url) {
        if (!url) return '';
        
        try {
            // Jika URL sudah absolute (http/https/data URI), langsung kembalikan
            if (/^(https?:|data:)/.test(url)) {
                return url;
            }
            
            // Jika URL relative, gabungkan dengan base URL
            // Handle kasus dimana URL mungkin sudah encoded atau mengandung karakter khusus
            const decodedUrl = decodeURIComponent(url);
            
            // Jika URL adalah path relative (dimulai dengan /)
            if (decodedUrl.startsWith('/')) {
                return new URL(decodedUrl, window.location.origin).toString();
            }
            
            // Jika URL adalah path relative tanpa slash (misal 'images/menu.jpg')
            return new URL(decodedUrl, window.location.href).toString();
        } catch (e) {
            console.error('Error processing image URL:', e);
            return '';
        }
    }

    function getMenuData() {
        const urlParams = new URLSearchParams(window.location.search);
        
        // Prioritaskan gambar dari elemen image jika ada
        let imageSrc = '';
        if (menuImage && menuImage.src) {
            imageSrc = menuImage.src;
        } else if (urlParams.has('image')) {
            imageSrc = urlParams.get('image');
        }
        
        const absoluteImageUrl = getAbsoluteImageUrl(imageSrc);
    
        return {
            name: document.querySelector('.menu-name')?.textContent || urlParams.get('name') || 'Menu',
            price: document.querySelector('.menu-price')?.textContent || urlParams.get('price') || 'Harga tidak tersedia',
            quantity: document.querySelector('.quantity-value')?.textContent || urlParams.get('quantity') || '0',
            comment: document.getElementById('food-comment')?.value || urlParams.get('comment') || '',
            imageUrl: absoluteImageUrl,
            baseUrl: window.location.origin + window.location.pathname 
        };
    }

    function createShareUrl(menuData) {
        const url = new URL(menuData.baseUrl);
        url.searchParams.set('name', encodeURIComponent(menuData.name));
        url.searchParams.set('price', encodeURIComponent(menuData.price));
        url.searchParams.set('quantity', menuData.quantity);
        if (menuData.comment) {
            url.searchParams.set('comment', encodeURIComponent(menuData.comment));
        }
        if (menuData.imageUrl) {
            url.searchParams.set('image', encodeURIComponent(menuData.imageUrl));
        }
        return url.toString();
    }

    function createShareText(menuData) {
        let shareText = `🍽️ *${menuData.name}* 🍽️\n`;
        shareText += `💰 Harga: ${menuData.price}\n`;
        shareText += `🔢 Jumlah: ${menuData.quantity}\n`;
        if (menuData.comment) {
            shareText += `📝 Catatan: ${menuData.comment}\n`;
        }
        shareText += `\n🔗 Link Menu: ${createShareUrl(menuData)}`;
        if (menuData.imageUrl) {
            shareText += `\n🖼️ Gambar Menu: ${menuData.imageUrl}`;
        }
        return shareText;
    }

    function copyToClipboard(text) {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
    }

    function showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'share-notification';
        notification.textContent = message;
        document.body.appendChild(notification);
        setTimeout(() => {
            notification.classList.add('fade-out');
            setTimeout(() => notification.remove(), 300);
        }, 2000);
    }

    shareBtn.addEventListener('click', function() {
        shareModal.classList.remove('hidden');
    });

    closeShare.addEventListener('click', function() {
        shareModal.classList.add('hidden');
    });

    whatsappShare.addEventListener('click', function() {
        const menuData = getMenuData();
        const shareText = createShareText(menuData);
        const encodedText = encodeURIComponent(shareText);
        window.open(`https://wa.me/?text=${encodedText}`, '_blank');
        shareModal.classList.add('hidden');
        showNotification('Membuka WhatsApp...');
    });

    clipboardShare.addEventListener('click', function() {
        const menuData = getMenuData();
        const shareUrl = createShareUrl(menuData);
        copyToClipboard(shareUrl);
        shareModal.classList.add('hidden');
        showNotification('Link menu disalin ke clipboard!');
    });

    shareModal.addEventListener('click', function(e) {
        if (e.target === shareModal) {
            shareModal.classList.add('hidden');
        }
    });

    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('image')) {
        const imageUrl = getAbsoluteImageUrl(urlParams.get('image'));
        menuImage.src = imageUrl;
    }
});