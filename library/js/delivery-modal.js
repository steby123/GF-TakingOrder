document.addEventListener('DOMContentLoaded', function() {
    const deliveryButton = document.querySelector('.fungsi-kanan button');
    const deliveryModal = document.getElementById('deliveryModal');
    const cutlerySection = document.getElementById('cutlery-request-section');
    
    let modalOverlay = document.querySelector('.modal-overlay');
    if (!modalOverlay) {
        modalOverlay = document.createElement('div');
        modalOverlay.className = 'modal-overlay';
        document.body.appendChild(modalOverlay);
    }

    const savedDeliveryOption = localStorage.getItem('deliveryOption');
    initializeDeliveryOption();

    if (deliveryButton && deliveryModal) {
        deliveryButton.addEventListener('click', toggleDeliveryModal);
        modalOverlay.addEventListener('click', closeDeliveryModal);
        
        document.querySelectorAll('.delivery-option').forEach(option => {
            option.addEventListener('click', handleDeliveryOptionClick);
        });
    } else {
        console.error('Element not found:', !deliveryButton ? 'Delivery button' : 'Delivery modal');
    }

    function initializeDeliveryOption() {
        if (savedDeliveryOption) {
            updateButton(savedDeliveryOption);
            highlightSelectedOption(savedDeliveryOption);
            toggleCutlerySection(savedDeliveryOption);
        } else {
            if (cutlerySection) cutlerySection.classList.remove('visible');
        }
    }

    function toggleDeliveryModal(e) {
        e.stopPropagation();
        deliveryModal.classList.toggle('hidden');
        modalOverlay.classList.toggle('active');
        deliveryModal.classList.toggle('active');
        document.body.classList.add('modal-open');
    }

    function closeDeliveryModal() {
        deliveryModal.classList.add('hidden');
        deliveryModal.classList.remove('active');
        modalOverlay.classList.remove('active');
        document.body.classList.remove('modal-open');
    }

    function handleDeliveryOptionClick() {
        document.querySelectorAll('.delivery-option').forEach(opt => {
            opt.classList.remove('selected');
        });
        this.classList.add('selected');
        const optionText = this.querySelector('h3').textContent; 
        localStorage.setItem('deliveryOption', optionText);
        updateButton(optionText);
        toggleCutlerySection(optionText);
        closeDeliveryModal();
    }

    function updateButton(optionText) {
        let iconHtml = '';
        if (optionText === 'Pengantaran') {
            iconHtml = '<i class="fa fa-shopping-bag"></i>';
        } else if (optionText === 'Makan di tempat') {
            iconHtml = '<i class="fa fa-cutlery"></i>';
        }
        deliveryButton.innerHTML = `${iconHtml} ${optionText}<i class="fa fa-chevron-down"></i>`;
    }

    function highlightSelectedOption(optionText) {
        document.querySelectorAll('.delivery-option').forEach(option => {
            if (option.querySelector('h3').textContent === optionText) {
                option.classList.add('selected');
            }
        });
    }

    function toggleCutlerySection(optionText) {
        if (!cutlerySection) {
            return;
        }
        if (optionText === 'Pengantaran') {
            cutlerySection.classList.add('visible');
        } else {
            cutlerySection.classList.remove('visible');
        }
    }
});