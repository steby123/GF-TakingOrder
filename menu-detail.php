<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <link rel="stylesheet" href="./library/font-awesome/4.5.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="./library/css/menu-detail.css" type="text/css" />
    <link rel="stylesheet" href="./library/css/menu-detail-notifcation.css" type="text/css" />
    <link rel="stylesheet" href="./library/css/delivery-modal.css" type="text/css" />
    <link rel="stylesheet" href="./library/css/share.css" type="text/css" />
    <link rel="stylesheet" href="./library/css/menu-detail-customize.css" type="text/css" />
    <title>Menu Detail</title>
</head>
<body>
    <div class="container">
        <div class="margin">
            <div class="margin-gambar">
                <img 
                    src="" 
                    alt=""
                    class="menu-image"
                />
                <div class="margin-fungsi">
                    <div class="fungsi-kiri">
                        <button onclick="ridrectToTakingOrder()">
                            <i class="fa fa-times"></i>
                        </button>
                    </div>
                    <div class="fungsi-kanan">
                        <button id="share-btn" class="share-btn">
                            <i class="fa fa-share-alt"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div class="margin-judul">
                <div class="margin-judul-kiri">
                    <h2 class="menu-name"></h2>
                </div>
                <div class="margin-judul-kanan">
                    <h2 class="menu-price"></h2>
                </div>
            </div>
            <div class="margin-harga-dasar">
                <p>Harga dasar</p>
            </div>
            <div class="container-menu-tambahan">
                <h2>MENU TAMBAHAN</h2>
            </div>
            <div class="container-customize">
            </div>
            <div class="margin catatan">
                <div class="margin-catatan-kiri">
                    <h2>Catatan untuk restoran</h2>
                </div>
                <div class="margin-catatan-kanan">
                    <p>Opsional</p>
                </div>
            </div>
            <div class="margin-textarea">
                <div class="catatan-textarea">
                    <textarea id="food-comment" placeholder="Permintaanmu akan disesuaikan dengan kebijakan resto"></textarea>
                </div>
            </div>
            <div class="margin-quantity">
                <button class="quantity-btn minus">-</button>
                <span class="quantity-value">0</span>
                <button class="quantity-btn plus">+</button>
            </div>
            <div class="delivery-modal hidden" id="deliveryModal">
                <div class="modal-content">
                    <div class="delivery-option">
                        <div class="option-header">
                            <i class="fas fa-motorcycle"></i> <h3>Pengantaran</h3>
                        </div>
                    </div>
                    <div class="delivery-option">
                        <div class="option-header">
                            <i class="fas fa-shopping-bag"></i> <h3>Ambil sendiri</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div class="cart-notification hidden" id="cartNotification">
                <div class="cart-info">
                    <div class="cart-icon-wrapper">
                        <span class="cart-count-badge hidden" id="cartCount">0</span>
                    </div>
                </div>
                <button class="view-cart-btn">
                    <i class="fa fa-shopping-cart" style="font-size: 24px;"></i> - <span class="cart-total">
                        <span id="currentItemTotal"></span>
                    </span>
                </button>
            </div>
            <div class="share-modal hidden" id="shareModal">
                <div class="modal-content">
                    <div class="modal-header">
                        <button class="close-share-x">
                            <i class="fa fa-times"></i>
                        </button>
                        <h3>Bagikan Menu</h3>
                    </div>
                    <div class="modal-body">
                        <button class="share-option" id="whatsappShare">
                            <i class="fa fa-whatsapp"></i> WhatsApp
                        </button>
                        <button class="share-option" id="clipboardShare">
                            <i class="fa fa-copy"></i> Salin Link
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="./library/js/share.js"></script>
    <script src="./library/js/riderctToTakingOrder.js"></script>
    <script src="./library/js/menu-detail-notifaction.js"></script>
    <script src="./library/js/menu-detail.js"></script>
</body>
</html>