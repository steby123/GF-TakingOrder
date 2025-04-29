<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <link rel="stylesheet" href="./library/font-awesome/4.5.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="./library/css/takingorderkeranjang.css" type="text/css" />
    <link rel="stylesheet" href="./library/css/comment-keranjang.css" type="text/css" />
    <link rel="stylesheet" href="./library/css/delivery-modal.css" type="text/css" />
    <link rel="stylesheet" href="./library/css/loading-modal.css" type="text/css" />
    <link rel="stylesheet" href="./library/css/kosongModal.css" type="text/css" />
    <title>Keranjang</title>
</head>
<body>
    <div class="container">
        <div class="margin">
            <div class="margin-judul">
                <div class="margin-judul-kiri">
                    <button onclick="ridrectToTakingOrder()">
                        <i class="fa fa-arrow-left"></i>
                    </button>
                </div>
                <div class="margin-judul-kanan">
                    <div class="margin-judul-atas">
                        <h2>GF Taking Order - Pasir Putih</h2>
                    </div>
                    <div class="margin-judul-bawah">
                        <p id="datetime"></p>
                    </div>
                </div>
            </div>
            <div class="margin-fungsi">
                <div class="fungsi-kanan">
                    <button>
                        <i class="fa fa-shopping-bag"></i> Pengantaran<i class="fa fa-chevron-down"></i>
                    </button>
                </div>
            </div>
            <div class="margin-pesanan">
                <div class="margin-rangkuman-pesanan-kiri">
                    <h2>Keranjang</h2> 
                </div>
                <div class="margin-tambah-pesanan-kanan">  
                    <button onclick="ridrectToTakingOrder()"><i class="fa fa-plus"></i>Tambah pesanan</button> 
                </div>
            </div>
            <div class="margin-pesanan-customer">
                
            </div>
            <div class="margin-rekomended">
                <div class="margin-rekomended-kiri">
                    <p>Yang lain pesan ini juga</p>
                </div>
            </div>

            <!--<div class="recommended-container">
                <div class="recommended-scroll">

                    <div class="recommended-item">
                        <div class="item-text">
                        <p class="item-name">Ayam Goreng
                        <div class="item-price">
                            <span class="current-price">69.545</span>
                            <span class="old-price">75.000</span>
                        </div>
                        </div>
                        <div class="item-image">
                            <img src="./library/images/ayamgoreng.jpg" alt="ayamgoreng">
                        </div>
                    </div>
              
                    <div class="recommended-item">
                        <div class="item-text">
                        <p class="item-name">sapi goreng
                        <div class="item-price">
                            <span class="current-price">69.545</span>
                            <span class="old-price">75.000</span>
                        </div>
                        </div>
                        <div class="item-image">
                            <img src="./library/images/sapigoreng.jpg" alt="Sapi Goreng">
                        </div>
                    </div>
              
                    <div class="recommended-item">
                        <div class="item-text">
                        <p class="item-name">Babi Goreng
                        <div class="item-price">
                            <span class="current-price">69.545</span>
                            <span class="old-price">75.000</span>
                        </div>
                        </div>
                        <div class="item-image">
                            <img src="./library/images/babigoreng.jpg" alt="babigoreng">
                        </div>
                    </div>
                </div>
            </div>-->
            <div class="margin-total">
                <div class="margin-total-menu">
                    <div class="margin-total-kiri">
                        <p>Subtotal</p>
                    </div>
                    <div class="margin-total-kanan">
                        <p>Rp</p>
                    </div>
                </div>
                <div class="margin-ppn-menu">
                    <div class="margin-ppn-kiri">
                        <p>PPN</p>
                    </div>
                    <div class="margin-ppn-kanan">
                        <p>Rp</p>
                    </div>
                </div>
            </div>
            <div class="margin-alat-makanan" id="cutlery-request-section">
                <div class="margin-alat-makanan-kiri">
                    <i class="fa fa-spoon"></i>
                </div>
                <div class="margin-alat-makanan-tengah">
                    <div class="margin-alat-makanan-tengah-atas">
                        <h2>Minta alat makan atau sedotan</h2>
                    </div>
                    <div class="margin-alat-makanan-tengah-bawah">
                        <p>Centang hanya jika diperlukan. Mari kita beralih ke hal yang lebih ramah lingkungan!</p>
                    </div>
                </div>
                <div class="margin-alat-makanan-kanan">
                    <input 
                        type="checkbox" 
                        id="request-cultery" 
                        name="request_cultery" 
                        value="yes" 
                    />
                </div>
            </div>
            <div class="footer">
                <div class="margin-footer">
                    <div class="margin-footer-kanan">
                        <h2>Total:</h2>
                    </div>
                    <div class="margin-footer-kiri">
                        <h2>Rp</h2>
                    </div>
                </div>
                <div class="margin-footer-button">
                    <button>Pesan</button>
                </div>
            </div>
        </div>
    </div>
    <div class="delivery-modal hidden" id="deliveryModal">
        <div class="modal-content">
            <div class="delivery-option">
                <div class="option-header">
                    <i class="fa fa-bicycle"></i> <h3>Pengantaran</h3>
                </div>
            </div>
            <div class="delivery-option">
                <div class="option-header">
                    <i class="fa fa-shopping-bag"></i> <h3>Makan di tempat</h3>
                </div>
            </div>
        </div>
    </div>
    <script src="./library/js/riderctToTakingOrder.js"></script>
    <script src="./library/js/keranjang.js"></script>
    <script src="./library/js/datetime.js"></script>
    <script src="./library/js/delivery-modal.js"></script>
    <script>
        function displayCartItems() {
    cart.items.forEach(item => {
        const displayName = `${item.name} (${item.size})`;
        // Gunakan displayName untuk menampilkan item
    });
}
    </script>
</body>
</html>