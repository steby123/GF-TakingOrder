<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <link rel="stylesheet" href="./library/font-awesome/4.5.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="./library/css/takingorder.css" type="text/css" />
    <link rel="stylesheet" href="./library/css/takingordernotifaction.css" type="text/css" />
    <link rel="stylesheet" href="./library/css/menu.css" type="text/css" />
    <link rel="stylesheet" href="./library/css/searchbar.css" type="text/css" />
    <link rel="stylesheet" href="./library/css/menumodal.css" type="text/css" />
    <link rel="stylesheet" href="./library/css/modalFadeIn.css" type="text/css" />
    <link rel="stylesheet" href="./library/css/media.css" type="text/css" />
    <link rel="stylesheet" href="./library/css/delivery-modal.css" type="text/css" />
    <link rel="stylesheet" href="./library/css/filterModal.css" type="text/css" />
    <link rel="stylesheet" href="./library/css/auth.css" type="text/css" />
    <link rel="stylesheet" href="./library/css/geuss-modal.css" type="text/css" />
    <title>Menu Utama</title>
</head>
<style>
    .fungsi-kiri button {
        background: #ff6b81;
        border: none;
        border-radius: 20px;
        padding: 10px;
        color: white;
        font-weight: 500;
        display: flex;
        align-items: center;
        gap: 5px;
        cursor: pointer;
        font-size: 14x;
    }

    @media (max-width: 768px) {
        .fungsi-kiri button {
            white-space: nowrap; 
            width: auto; 
            padding: 5px;
            font-weight: 500;
        }
    }
</style>
<body>
    <div class="container">
        <div class="margin">
            <div class="margin-gambar">
                <img 
                    src="./library/images/cartunmakanan.jpg" 
                    alt="Es Selasih + Kelapa" 
                />
                <div class="margin-fungsi">
                    <div class="fungsi-kiri">
                        <button class="guest-active"">
                            <i class="fa fa-user"></i>Login<i class="fa fa-chevron-down"></i>
                        </button>
                    </div>
                    <div class="fungsi-kanan">  
                        <button>
                            <i class="fa fa-shopping-bag"></i> Pengantaran<i class="fa fa-chevron-down"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div class="card-container">
                <div class="horizontal-card">
                    <div class="card-image">
                        <img src="./library/images/tempatcafe.jpg" alt="Happy Maitri Vege">
                    </div>
                    <div class="card-content">
                        <div class="card-header">
                            <h3>GF Taking Order</h3>
                            <div class="location">
                                <i class="fas fa-map-marker-alt"></i>
                                <span>Pasir Putih</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--<div class="navigation-card">
                <div class="cards">
                    <div class="navigation-card-content">
                        <button>
                            <i class="fas fa-user-plus"></i> Group Order
                        </button>
                    </div>
                    <div class="navigation-card-content">
                        <button>
                            <i class="fas fa-clock"></i> Order for Later
                        </button>
                    </div>
                </div>
            </div> -->
            <div class="search-bar" id="search-bar">
                <div class="search-bar-kiri">
                    <input type="text" placeholder="Cari menu...">
                </div>
                <div class="search-bar-kanan">
                    <button>Delete</button>
                </div>
            </div>
            <div class="order-card">
                <div class="order-card-header">
                    <div class="order-header-left">
                        <h2 id="section-title">Paling Laku</h2>
                    </div>
                    <div class="order-header-right">
                        <button class="add-all-btn" id="paling-laku-btn">Paling Laku</button>
                    </div>
                </div>
                <div class="order-items" id="menu-container"></div>
            </div>
            <div id="recommendation-modal" class="modal">
                <div class="modal-content">
                    <span class="close-modal">
                        <i class="fa fa-times"></i>
                    </span>
                    <h2 class="modal-title">Pilihan</h2>
                    <div class="modal-options">
                        <button class="modal-option-btn active" id="paling-laku-option">
                            <i class="option-icon">🔥</i>
                            <span>Paling Laku</span>
                        </button>
                        <button class="modal-option-btn" id="rekomendasi-option">
                            <i class="option-icon">⭐</i>
                            <span>Rekomendasi</span>
                        </button>
                    </div>
                </div>
            </div>
            <div class="menu-card">
                <div class="menu-card-header">
                    <div class="menu-header-left">
                        <h2>Menu Makanan</h2>
                    </div>
                </div>
                <div class="menu-items">
                    <div class="menu-item">
                        <image 
                            src="./library/images/kwetiaugoreng.jpg" 
                            alt="kwetiau goreng" 
                            class="menu-image"
                            data-name="kwetiau goreng"
                        />
                        <div class="item-customizable">
                            <p>Customizable</p>
                        </div>
                        <div class="menu-info">
                            <h3 class="menu-name">Kwetiau Goreng (S)</h3>
                        </div>
                        <div class="menu-price">18.000</div>
                        <button class="add-menu-btn" id="add-item-btn">Tambah</button>
                    </div>
                    <div class="menu-item">
                        <image 
                            src="./library/images/kwetiaugoreng.jpg" 
                            alt="kwetiau goreng" 
                            class="menu-image"
                            data-name="kwetiau goreng"
                        />
                        <div class="item-customizable">
                            <p>Customizable</p>
                        </div>
                        <div class="menu-info">
                            <h3 class="menu-name">Kwetiau Goreng (L)</h3>
                        </div>
                        <div class="menu-price">23.000</div>
                        <button class="add-menu-btn" id="add-item-btn">Tambah</button>
                    </div>
                    <div class="menu-item">
                        <image 
                            src="./library/images/nasiayam.jpg" 
                            alt="nasi ayam" 
                            class="menu-image"
                            data-name="nasi ayam"
                        />
                        <div class="item-customizable">
                            <p>Customizable</p>
                        </div>
                        <div class="menu-info">
                            <h3 class="menu-name">Nasi Ayam (S)</h3>
                        </div>
                        <div class="menu-price">22.000</div>
                        <button class="add-menu-btn" id="add-item-btn">Tambah</button>
                    </div>
                    <div class="menu-item">
                        <image 
                            src="./library/images/nasiayam.jpg" 
                            alt="nasi ayam" 
                            class="menu-image"
                            data-name="nasi ayam"
                        />
                        <div class="item-customizable">
                            <p>Customizable</p>
                        </div>
                        <div class="menu-info">
                            <h3 class="menu-name">Nasi Ayam (L)</h3>
                        </div>
                        <div class="menu-price">27.000</div>
                        <button class="add-menu-btn" id="add-item-btn">Tambah</button>
                    </div>
                    <div class="menu-item">
                        <image 
                            src="./library/images/miegoreng.jpg" 
                            alt="mie goreng" 
                            class="menu-image"
                            data-name="mie goreng"
                        />
                        <div class="item-customizable">
                            <p>Customizable</p>
                        </div>
                        <div class="menu-info">
                            <h3 class="menu-name">Mie Goreng (S)</h3>
                        </div>
                        <div class="menu-price">18.000</div>
                        <button class="add-menu-btn" id="add-item-btn">Tambah</button>
                    </div>
                    <div class="menu-item">
                        <image 
                            src="./library/images/miegoreng.jpg" 
                            alt="mie goreng" 
                            class="menu-image"
                            data-name="mie goreng"
                        />
                        <div class="item-customizable">
                            <p>Customizable</p>
                        </div>
                        <div class="menu-info">
                            <h3 class="menu-name">Mie Goreng (M)</h3>
                        </div>
                        <div class="menu-price">23.000</div>
                        <button class="add-menu-btn" id="add-item-btn">Tambah</button>
                    </div>
                    <div class="menu-item">
                        <image 
                            src="./library/images/miegoreng.jpg" 
                            alt="mie goreng" 
                            class="menu-image"
                            data-name="mie goreng"
                        />
                        <div class="item-customizable">
                            <p>Customizable</p>
                        </div>
                        <div class="menu-info">
                            <h3 class="menu-name">Mie Goreng (L)</h3>
                        </div>
                        <div class="menu-price">28.000</div>
                        <button class="add-menu-btn" id="add-item-btn">Tambah</button>
                    </div>
                    <div class="menu-item">
                        <image 
                            src="./library/images/bihungoreng.jpg" 
                            alt="bihun goreng" 
                            class="menu-image"
                            data-name="bihun goreng"
                        />
                        <div class="item-customizable">
                            <p>Customizable</p>
                        </div>
                        <div class="menu-info">
                            <h3 class="menu-name">Bihun Goreng (S)</h3>
                        </div>
                        <div class="menu-price">18.000</div>
                        <button class="add-menu-btn" id="add-item-btn">Tambah</button>
                    </div>
                    <div class="menu-item">
                        <image 
                            src="./library/images/bihungoreng.jpg" 
                            alt="bihun goreng" 
                            class="menu-image"
                            data-name="bihun goreng"
                        />
                        <div class="item-customizable">
                            <p>Customizable</p>
                        </div>
                        <div class="menu-info">
                            <h3 class="menu-name">Bihun Goreng (M)</h3>
                        </div>
                        <div class="menu-price">23.000</div>
                        <button class="add-menu-btn" id="add-item-btn">Tambah</button>
                    </div>
                    <div class="menu-item">
                        <image 
                            src="./library/images/bihungoreng.jpg" 
                            alt="bihun goreng" 
                            class="menu-image"
                            data-name="bihun goreng"
                        />
                        <div class="item-customizable">
                            <p>Customizable</p>
                        </div>
                        <div class="menu-info">
                            <h3 class="menu-name">Bihun Goreng (L)</h3>
                        </div>
                        <div class="menu-price">28.000</div>
                        <button class="add-menu-btn" id="add-item-btn">Tambah</button>
                    </div>
                    <div class="menu-item">
                        <image 
                            src="./library/images/ayamgoreng.jpg" 
                            alt="ayam goreng" 
                            class="menu-image"
                            data-name="ayam goreng"
                        />
                        <div class="item-customizable">
                            <p>Customizable</p>
                        </div>
                        <div class="menu-info">
                            <h3 class="menu-name">Ayam Goreng (S)</h3>
                        </div>
                        <div class="menu-price">18.000</div>
                        <button class="add-menu-btn" id="add-item-btn">Tambah</button>
                    </div>
                    <div class="menu-item">
                        <image 
                            src="./library/images/ayamgoreng.jpg" 
                            alt="ayam goreng" 
                            class="menu-image"
                            data-name="ayam goreng"
                        />
                        <div class="item-customizable">
                            <p>Customizable</p>
                        </div>
                        <div class="menu-info">
                            <h3 class="menu-name">Ayam Goreng (M)</h3>
                        </div>
                        <div class="menu-price">18.000</div>
                        <button class="add-menu-btn" id="add-item-btn">Tambah</button>
                    </div>
                    <div class="menu-item">
                        <image 
                            src="./library/images/ayamgoreng.jpg" 
                            alt="ayam goreng" 
                            class="menu-image"
                            data-name="ayam goreng"
                        />
                        <div class="item-customizable">
                            <p>Customizable</p>
                        </div>
                        <div class="menu-info">
                            <h3 class="menu-name">Ayam Goreng (L)</h3>
                        </div>
                        <div class="menu-price">18.000</div>
                        <button class="add-menu-btn" id="add-item-btn">Tambah</button>
                    </div>
                    <div class="menu-item">
                        <image 
                            src="./library/images/babigoreng.jpg" 
                            alt="babigoreng" 
                            class="menu-image"
                            data-name="babigoreng"
                        />
                        <div class="item-customizable">
                            <p>Customizable</p>
                        </div>
                        <div class="menu-info">
                            <h3 class="menu-name">Babi Goreng (S)</h3>
                        </div>
                        <div class="menu-price">18.000</div>
                        <button class="add-menu-btn" id="add-item-btn">Tambah</button>
                    </div>
                    <div class="menu-item">
                        <image 
                            src="./library/images/babigoreng.jpg" 
                            alt="babigoreng" 
                            class="menu-image"
                            data-name="babigoreng"
                        />
                        <div class="item-customizable">
                            <p>Customizable</p>
                        </div>
                        <div class="menu-info">
                            <h3 class="menu-name">Babi Goreng (M)</h3>
                        </div>
                        <div class="menu-price">23.000</div>
                        <button class="add-menu-btn" id="add-item-btn">Tambah</button>
                    </div>
                    <div class="menu-item">
                        <image 
                            src="./library/images/babigoreng.jpg" 
                            alt="babigoreng" 
                            class="menu-image"
                            data-name="babigoreng"
                        />
                        <div class="item-customizable">
                            <p>Customizable</p>
                        </div>
                        <div class="menu-info">
                            <h3 class="menu-name">Babi Goreng (L)</h3>
                        </div>
                        <div class="menu-price">28.000</div>
                        <button class="add-menu-btn" id="add-item-btn">Tambah</button>
                    </div>
                    <div class="menu-item">
                        <image 
                            src="./library/images/sapigoreng.jpg" 
                            alt="sapi goreng" 
                            class="menu-image"
                            data-name="sapi goreng"
                        />
                        <div class="item-customizable">
                            <p>Customizable</p>
                        </div>
                        <div class="menu-info">
                            <h3 class="menu-name">Sapi Goreng (S)</h3>
                        </div>
                        <div class="menu-price">18.000</div>
                        <button class="add-menu-btn" id="add-item-btn">Tambah</button>
                    </div>
                    <div class="menu-item">
                        <image 
                            src="./library/images/sapigoreng.jpg" 
                            alt="sapi goreng" 
                            class="menu-image"
                            data-name="sapi goreng"
                        />
                        <div class="item-customizable">
                            <p>Customizable</p>
                        </div>
                        <div class="menu-info">
                            <h3 class="menu-name">Sapi Goreng (M)</h3>
                        </div>
                        <div class="menu-price">23.000</div>
                        <button class="add-menu-btn" id="add-item-btn">Tambah</button>
                    </div>
                    <div class="menu-item">
                        <image 
                            src="./library/images/sapigoreng.jpg" 
                            alt="sapi goreng" 
                            class="menu-image"
                            data-name="sapi goreng"
                        />
                        <div class="item-customizable">
                            <p>Customizable</p>
                        </div>
                        <div class="menu-info">
                            <h3 class="menu-name">Sapi Goreng (L)</h3>
                        </div>
                        <div class="menu-price">28.000</div>
                        <button class="add-menu-btn" id="add-item-btn">Tambah</button>
                    </div>
                    <div class="menu-item">
                        <image 
                            src="./library/images/bawanggoreng.jpg" 
                            alt="bawang goreng" 
                            class="menu-image"
                            data-name="bawang goreng"
                        />
                        <div class="item-customizable">
                            <p>Customizable</p>
                        </div>
                        <div class="menu-info">
                            <h3 class="menu-name">Bawang Goreng</h3>
                        </div>
                        <div class="menu-price">8.000</div>
                        <button class="add-menu-btn" id="add-item-btn">Tambah</button>
                    </div>
                    <div class="menu-item">
                        <image 
                            src="./library/images/telurgoreng.jpg" 
                            alt="telur goreng" 
                            class="menu-image"
                            data-name="telur goreng"
                        />
                        <div class="menu-info">
                            <h3 class="menu-name">Telur Goreng</h3>
                        </div>
                        <div class="menu-price">8.000</div>
                        <button class="add-menu-btn" id="add-item-btn">Tambah</button>
                    </div>
                    <div class="menu-item">
                        <image 
                            src="./library/images/petaigoreng.jpg" 
                            alt="petai goreng" 
                            class="menu-image"
                            data-name="petai goreng"    
                        />
                        <div class="item-customizable">
                            <p>Customizable</p>
                        </div>
                        <div class="menu-info">
                            <h3 class="menu-name">Petai Goreng</h3>
                        </div>
                        <div class="menu-price">8.000</div>
                        <button class="add-menu-btn" id="add-item-btn">Tambah</button>
                    </div> 
                    <div class="menu-item">
                        <image 
                            src="./library/images/miekuninggoreng.jpg" 
                            alt="mie kuning goreng" 
                            class="menu-image"
                            data-name="mie kuning goreng"
                        />
                        <div class="item-customizable">
                            <p>Customizable</p>
                        </div>
                        <div class="menu-info">
                            <h3 class="menu-name">Mie kuning Goreng (S)</h3>
                        </div>
                        <div class="menu-price">18.000</div>
                        <button class="add-menu-btn" id="add-item-btn">Tambah</button>
                    </div>
                    <div class="menu-item">
                        <image 
                            src="./library/images/miekuninggoreng.jpg" 
                            alt="mie kuning goreng" 
                            class="menu-image"
                            data-name="mie kuning goreng"
                        />
                        <div class="item-customizable">
                            <p>Customizable</p>
                        </div>
                        <div class="menu-info">
                            <h3 class="menu-name">Mie kuning Goreng (L)</h3>
                        </div>
                        <div class="menu-price">23.000</div>
                        <button class="add-menu-btn" id="add-item-btn">Tambah</button>
                    </div>
                </div>
            </div>
            <div class="menu-card">
                <div class="menu-card-header">
                    <div class="menu-header-left">
                        <h2>Menu Minuman</h2>
                    </div>
                </div>
                <div class="menu-items">
                    <div class="menu-item">
                        <image 
                            src="./library/images/pocari.jpg" 
                            alt="pocari" 
                            class="menu-image"
                            data-name="pocari"
                        />
                        <div class="item-customizable">
                            <p>Customizable</p>
                        </div>
                        <div class="menu-info">
                            <h3 class="menu-name">Pocari</h3>
                        </div>
                        <div class="menu-price">8.000</div>
                        <button class="add-menu-btn" id="add-item-btn">Tambah</button>
                    </div>
                    <div class="menu-item">
                        <image 
                            src="./library/images/soya.jpg" 
                            alt="soya" 
                            class="menu-image"
                            data-name="soya"
                        />
                        <div class="item-customizable">
                            <p>Customizable</p>
                        </div>
                        <div class="menu-info">
                            <h3 class="menu-name">Soya</h3>
                        </div>
                        <div class="menu-price">8.000</div>
                        <button class="add-menu-btn" id="add-item-btn">Tambah</button>
                    </div>
                    <div class="menu-item">
                        <image 
                            src="./library/images/tehbunga.jpg" 
                            alt="teh bunga" 
                            class="menu-image"
                            data-name="teh bunga"
                        />
                        <div class="item-customizable">
                            <p>Customizable</p>
                        </div>
                        <div class="menu-info">
                            <h3 class="menu-name">Teh Bunga</h3>
                        </div>
                        <div class="menu-price">8.000</div>
                        <button class="add-menu-btn" id="add-item-btn">Tambah</button>
                    </div>
                    <div class="menu-item">
                        <image 
                            src="./library/images/sanford.jpg" 
                            alt="sanford" 
                            class="menu-image"
                            data-name="sanford"
                        />
                        <div class="item-customizable">
                            <p>Customizable</p>
                        </div>
                        <div class="menu-info">
                            <h3 class="menu-name">Sanford</h3>
                        </div>
                        <div class="menu-price">8.000</div>
                        <button class="add-menu-btn" id="add-item-btn">Tambah</button>
                    </div>
                    <div class="menu-item">
                        <image 
                            src="./library/images/airputihhangat.jpg" 
                            alt="air putih hangat" 
                            class="menu-image"
                            data-name="teh bunga"
                        />
                        <div class="menu-info">
                            <h3 class="menu-name">Air Putih Hangat</h3>
                        </div>
                        <div class="menu-price">8.000</div>
                        <button class="add-menu-btn" id="add-item-btn">Tambah</button>
                    </div>
                    <div class="menu-item">
                        <image 
                            src="./library/images/tehobeng.jpg" 
                            alt="teh obeng" 
                            class="menu-image"
                            data-name="teh obeng"
                        />
                        <div class="item-customizable">
                            <p>Customizable</p>
                        </div>
                        <div class="menu-info">
                            <h3 class="menu-name">Teh Obeng</h3>
                        </div>
                        <div class="menu-price">8.000</div>
                        <button class="add-menu-btn" id="add-item-btn">Tambah</button>
                    </div>
                    <div class="menu-item">
                        <image 
                            src="./library/images/tehtarik.jpg" 
                            alt="teh tarik" 
                            class="menu-image"
                            data-name="teh tarik"
                        />
                        <div class="item-customizable">
                            <p>Customizable</p>
                        </div>
                        <div class="menu-info">
                            <h3 class="menu-name">Teh Tarik Dingin</h3>
                        </div>
                        <div class="menu-price">8.000</div>
                        <button class="add-menu-btn" id="add-item-btn">Tambah</button>
                    </div>
                    <div class="menu-item">
                        <image 
                            src="./library/images/tehtarik.jpg" 
                            alt="teh tarik" 
                            class="menu-image"
                            data-name="teh tarik"
                        />
                        <div class="item-customizable">
                            <p>Customizable</p>
                        </div>
                        <div class="menu-info">
                            <h3 class="menu-name">Teh Tarik Panas</h3>
                        </div>
                        <div class="menu-price">8.000</div>
                        <button class="add-menu-btn" id="add-item-btn">Tambah</button>
                    </div>
                    <div class="menu-item">
                        <image 
                            src="./library/images/sirupkuning.jpg" 
                            alt="sirup kuning" 
                            class="menu-image"
                            data-name="sirup kuning"
                        />
                        <div class="item-customizable">
                            <p>Customizable</p>
                        </div>
                        <div class="menu-info">
                            <h3 class="menu-name">Sirup Kuning</h3>
                        </div>
                        <div class="menu-price">8.000</div>
                        <button class="add-menu-btn" id="add-item-btn">Tambah</button>
                    </div>
                    <div class="menu-item">
                        <image 
                            src="./library/images/sirupmerah.jpg" 
                            alt="sirup merah" 
                            class="menu-image"
                            data-name="sirup merah"
                        />
                        <div class="item-customizable">
                            <p>Customizable</p>
                        </div>
                        <div class="menu-info">
                            <h3 class="menu-name">Sirup Merah</h3>
                        </div>
                        <div class="menu-price">8.000</div>
                        <button class="add-menu-btn" id="add-item-btn">Tambah</button>
                    </div>
                    <div class="menu-item">
                        <image 
                            src="./library/images/teho.jpg" 
                            alt="teh o" 
                            class="menu-image"
                            data-name="teh o"
                        />
                        <div class="item-customizable">
                            <p>Customizable</p>
                        </div>
                        <div class="menu-info">
                            <h3 class="menu-name">Teh O (S)</h3>
                        </div>
                        <div class="menu-price">8.000</div>
                        <button class="add-menu-btn" id="add-item-btn">Tambah</button>
                    </div>
                    <div class="menu-item">
                        <image 
                            src="./library/images/teho.jpg" 
                            alt="teh o" 
                            class="menu-image"
                            data-name="teh o"
                        />
                        <div class="item-customizable">
                            <p>Customizable</p>
                        </div>
                        <div class="menu-info">
                            <h3 class="menu-name">Teh O (L)</h3>
                        </div>
                        <div class="menu-price">13.000</div>
                        <button class="add-menu-btn" id="add-item-btn">Tambah</button>
                    </div>
                    <div class="menu-item">
                        <image 
                            src="./library/images/kopisusu.jpg" 
                            alt="kopi susu" 
                            class="menu-image"
                            data-name="kopi susu"
                        />
                        <div class="item-customizable">
                            <p>Customizable</p>
                        </div>
                        <div class="menu-info">
                            <h3 class="menu-name">Kopi Susu Dingin</h3>
                        </div>
                        <div class="menu-price">8.000</div>
                        <button class="add-menu-btn" id="add-item-btn">Tambah</button>
                    </div>
                    <div class="menu-item">
                        <image 
                            src="./library/images/kopisusu.jpg" 
                            alt="kopi susu" 
                            class="menu-image"
                            data-name="kopi susu"
                        />
                        <div class="item-customizable">
                            <p>Customizable</p>
                        </div>
                        <div class="menu-info">
                            <h3 class="menu-name">Kopi Susu Panas (S)</h3>
                        </div>
                        <div class="menu-price">8.000</div>
                        <button class="add-menu-btn" id="add-item-btn">Tambah</button>
                    </div>
                    <div class="menu-item">
                        <image 
                            src="./library/images/kopisusu.jpg" 
                            alt="kopi susu" 
                            class="menu-image"
                            data-name="kopi susu"
                        />
                        <div class="item-customizable">
                            <p>Customizable</p>
                        </div>
                        <div class="menu-info">
                            <h3 class="menu-name">Kopi Susu Panas (M)</h3>
                        </div>
                        <div class="menu-price">13.000</div>
                        <button class="add-menu-btn" id="add-item-btn">Tambah</button>
                    </div>
                    <div class="menu-item">
                        <image 
                            src="./library/images/kopi.jpg" 
                            alt="kopi" 
                            class="menu-image"
                            data-name="kopi"
                        />
                        <div class="item-customizable">
                            <p>Customizable</p>
                        </div>
                        <div class="menu-info">
                            <h3 class="menu-name">Kopi Panas (S)</h3>
                        </div>
                        <div class="menu-price">8.000</div>
                        <button class="add-menu-btn" id="add-item-btn">Tambah</button>
                    </div>
                    <div class="menu-item">
                        <image 
                            src="./library/images/kopi.jpg" 
                            alt="kopi" 
                            class="menu-image"
                            data-name="kopi"
                        />
                        <div class="item-customizable">
                            <p>Customizable</p>
                        </div>
                        <div class="menu-info">
                            <h3 class="menu-name">Kopi Panas (M)</h3>
                        </div>
                        <div class="menu-price">13.000</div>
                        <button class="add-menu-btn" id="add-item-btn">Tambah</button>
                    </div>
                    <div class="menu-item">
                        <image 
                            src="./library/images/kopi.jpg" 
                            alt="kopi" 
                            class="menu-image"
                            data-name="kopi"
                        />
                        <div class="item-customizable">
                            <p>Customizable</p>
                        </div>
                        <div class="menu-info">
                            <h3 class="menu-name">Kopi Dingin</h3>
                        </div>
                        <div class="menu-price">8.000</div>
                        <button class="add-menu-btn" id="add-item-btn">Tambah</button>
                    </div>
                    <div class="menu-item">
                        <image 
                            src="./library/images/jusbuahapel.jpg" 
                            alt="jus apel" 
                            class="menu-image"
                            data-name="jus apel"
                        />
                        <div class="item-customizable">
                            <p>Customizable</p>
                        </div>
                        <div class="menu-info">
                            <h3 class="menu-name">Jus Apel (S)</h3>
                        </div>
                        <div class="menu-price">8.000</div>
                        <button class="add-menu-btn" id="add-item-btn">Tambah</button>
                    </div>
                    <div class="menu-item">
                        <image 
                            src="./library/images/jusbuahapel.jpg" 
                            alt="jus apel" 
                            class="menu-image"
                            data-name="jus apel"
                        />
                        <div class="item-customizable">
                            <p>Customizable</p>
                        </div>
                        <div class="menu-info">
                            <h3 class="menu-name">Jus Apel (L)</h3>
                        </div>
                        <div class="menu-price">18.000</div>
                        <button class="add-menu-btn" id="add-item-btn">Tambah</button>
                    </div>
                    <div class="menu-item">
                        <image 
                            src="./library/images/jusbuahmangga.jpg" 
                            alt="jus mangga" 
                            class="menu-image"
                            data-name="just mangga"
                        />
                        <div class="item-customizable">
                            <p>Customizable</p>
                        </div>
                        <div class="menu-info">
                            <h3 class="menu-name">Jus Mangga (S)</h3>
                        </div>
                        <div class="menu-price">8.000</div>
                        <button class="add-menu-btn" id="add-item-btn">Tambah</button>
                    </div>
                    <div class="menu-item">
                        <image 
                            src="./library/images/jusbuahmangga.jpg" 
                            alt="jus mangga" 
                            class="menu-image"
                            data-name="just mangga"
                        />
                        <div class="item-customizable">
                            <p>Customizable</p>
                        </div>
                        <div class="menu-info">
                            <h3 class="menu-name">Jus Mangga (L)</h3>
                        </div>
                        <div class="menu-price">18.000</div>
                        <button class="add-menu-btn" id="add-item-btn">Tambah</button>
                    </div>
                    <div class="menu-item">
                        <image 
                            src="./library/images/jusbuahnaga.jpg" 
                            alt="jus naga" 
                            class="menu-image"
                            data-name="jus naga"
                        />
                        <div class="item-customizable">
                            <p>Customizable</p>
                        </div>
                        <div class="menu-info">
                            <h3 class="menu-name">Jus Naga (S)</h3>
                        </div>
                        <div class="menu-price">8.000</div>
                        <button class="add-menu-btn" id="add-item-btn">Tambah</button>
                    </div>
                    <div class="menu-item">
                        <image 
                            src="./library/images/jusbuahnaga.jpg" 
                            alt="jus naga" 
                            class="menu-image"
                            data-name="jus naga"
                        />
                        <div class="item-customizable">
                            <p>Customizable</p>
                        </div>
                        <div class="menu-info">
                            <h3 class="menu-name">Jus Naga (L)</h3>
                        </div>
                        <div class="menu-price">18.000</div>
                        <button class="add-menu-btn" id="add-item-btn">Tambah</button>
                    </div>
                    <div class="menu-item">
                        <image 
                            src="./library/images/jusbuahpisang.jpg" 
                            alt="jus pisang" 
                            class="menu-image"
                            data-name="jus pisang"
                        />
                        <div class="item-customizable">
                            <p>Customizable</p>
                        </div>
                        <div class="menu-info">
                            <h3 class="menu-name">Jus Pisang (S)</h3>
                        </div>
                        <div class="menu-price">8.000</div>
                        <button class="add-menu-btn" id="add-item-btn">Tambah</button>
                    </div>
                    <div class="menu-item">
                        <image 
                            src="./library/images/jusbuahpisang.jpg" 
                            alt="jus pisang" 
                            class="menu-image"
                            data-name="jus pisang"
                        />
                        <div class="item-customizable">
                            <p>Customizable</p>
                        </div>
                        <div class="menu-info">
                            <h3 class="menu-name">Jus Pisang (L)</h3>
                        </div>
                        <div class="menu-price">13.000</div>
                        <button class="add-menu-btn" id="add-item-btn">Tambah</button>
                    </div>
                    <div class="menu-item">
                        <image 
                            src="./library/images/cocacola.jpg" 
                            alt="cocacola" 
                            class="menu-image"
                            data-name="cocacola"
                        />
                        <div class="item-customizable">
                            <p>Customizable</p>
                        </div>
                        <div class="menu-info">
                            <h3 class="menu-name">Coca Cola</h3>
                        </div>
                        <div class="menu-price">8.000</div>
                        <button class="add-menu-btn" id="add-item-btn">Tambah</button>
                    </div>
                    <div class="menu-item">
                        <image 
                            src="./library/images/sprite.jpg" 
                            alt="sprite" 
                            class="menu-image"
                            data-name="sprite"
                        />
                        <div class="item-customizable">
                            <p>Customizable</p>
                        </div>
                        <div class="menu-info">
                            <h3 class="menu-name">Sprite</h3>
                        </div>
                        <div class="menu-price">8.000</div>
                        <button class="add-menu-btn" id="add-item-btn">Tambah</button>
                    </div>
                    <div class="menu-item">
                        <image 
                            src="./library/images/pepsi.jpg" 
                            alt="pepsi" 
                            class="menu-image"
                            data-name="pepsi"
                        />
                        <div class="item-customizable">
                            <p>Customizable</p>
                        </div>
                        <div class="menu-info">
                            <h3 class="menu-name">Pepsi</h3>
                        </div>
                        <div class="menu-price">8.000</div>
                        <button class="add-menu-btn" id="add-item-btn">Tambah</button>
                    </div>
                    <div class="menu-item">
                        <image 
                            src="./library/images/esselasihkelapa.jpg" 
                            alt="esselasihkelapa" 
                            class="menu-image"
                            data-name="esselasihkelapa"
                        />
                        <div class="menu-info">
                            <h3 class="menu-name">Es Selasih + Kelapa</h3>
                        </div>
                        <div class="menu-price">8.000</div>
                        <button class="add-menu-btn" id="add-item-btn">Tambah</button>
                    </div>
                </div>
            </div>
            <div class="menu-card">
                <div class="menu-card-header">
                    <div class="menu-header-left">
                        <h2>Menu Tambahan</h2>
                    </div>
                </div>
                <div class="menu-items">
                    <div class="menu-item">
                        <image 
                            src="./library/images/kentanggoreng.jpg" 
                            alt="kentanggoreng" 
                            class="menu-image"
                            data-name="kentanggoreng"
                        />
                        <div class="item-customizable">
                            <p>Customizable</p>
                        </div>
                        <div class="menu-info">
                            <h3 class="menu-name">Kentang Goreng (S)</h3>
                        </div>
                        <div class="menu-price">8.000</div>
                        <button class="add-menu-btn" id="add-item-btn">Tambah</button>
                    </div>
                    <div class="menu-item">
                        <image 
                            src="./library/images/kentanggoreng.jpg" 
                            alt="kentanggoreng" 
                            class="menu-image"
                            data-name="kentanggoreng"
                        />
                        <div class="item-customizable">
                            <p>Customizable</p>
                        </div>
                        <div class="menu-info">
                            <h3 class="menu-name">Kentang Goreng (M)</h3>
                        </div>
                        <div class="menu-price">13.000</div>
                        <button class="add-menu-btn" id="add-item-btn">Tambah</button>
                    </div>
                    <div class="menu-item">
                        <image 
                            src="./library/images/kentanggoreng.jpg" 
                            alt="kentanggoreng" 
                            class="menu-image"
                            data-name="kentanggoreng"
                        />
                        <div class="item-customizable">
                            <p>Customizable</p>
                        </div>
                        <div class="menu-info">
                            <h3 class="menu-name">Kentang Goreng (L)</h3>
                        </div>
                        <div class="menu-price">18.000</div>
                        <button class="add-menu-btn" id="add-item-btn">Tambah</button>
                    </div>
                    <div class="menu-item">
                        <image 
                            src="./library/images/eskrimcokelat.jpg" 
                            alt="eskrimcokelat" 
                            class="menu-image"
                            data-name="eskrimcokelat"
                        />
                        <div class="menu-info">
                            <h3 class="menu-name">Es Krim Cokelat</h3>
                        </div>
                        <div class="menu-price">8.000</div>
                        <button class="add-menu-btn" id="add-item-btn">Tambah</button>
                    </div>
                    <div class="menu-item">
                        <image 
                            src="./library/images/eskrimmatcha.jpg" 
                            alt="eskrimmatcha" 
                            class="menu-image"
                            data-name="eskrimmatcha"
                        />
                        <div class="menu-info">
                            <h3 class="menu-name">Es Krim Matcha</h3>
                        </div>
                        <div class="menu-price">8.000</div>
                        <button class="add-menu-btn" id="add-item-btn">Tambah</button>
                    </div>
                    <div class="menu-item">
                        <image 
                            src="./library/images/eskrimvanilla.jpg" 
                            alt="eskrimvanilla" 
                            class="menu-image"
                            data-name="eskrimvanilla"
                        />
                        <div class="menu-info">
                            <h3 class="menu-name">Es Krim Vanilla</h3>
                        </div>
                        <div class="menu-price">8.000</div>
                        <button class="add-menu-btn" id="add-item-btn">Tambah</button>
                    </div>
                    <div class="menu-item">
                        <image 
                            src="./library/images/eskrimoreo.jpg" 
                            alt="eskrimoreo" 
                            class="menu-image"
                            data-name="eskrimoreo"
                        />
                        <div class="item-customizable">
                            <p>Customizable</p>
                        </div>
                        <div class="menu-info">
                            <h3 class="menu-name">Es Krim Oreo (S)</h3>
                        </div>
                        <div class="menu-price">8.000</div>
                        <button class="add-menu-btn" id="add-item-btn">Tambah</button>
                    </div>
                    <div class="menu-item">
                        <image 
                            src="./library/images/eskrimoreo.jpg" 
                            alt="eskrimoreo" 
                            class="menu-image"
                            data-name="eskrimoreo"
                        />
                        <div class="item-customizable">
                            <p>Customizable</p>
                        </div>
                        <div class="menu-info">
                            <h3 class="menu-name">Es Krim Oreo (L)</h3>
                        </div>
                        <div class="menu-price">13.000</div>
                        <button class="add-menu-btn" id="add-item-btn">Tambah</button>
                    </div>
                    <div class="menu-item">
                        <image 
                            src="./library/images/kuemilo.jpg" 
                            alt="kuemilo" 
                            class="menu-image"
                            data-name="kuemilo"
                        />
                        <div class="menu-info">
                            <h3 class="menu-name">Kue Milo</h3>
                        </div>
                        <div class="menu-price">8.000</div>
                        <button class="add-menu-btn" id="add-item-btn">Tambah</button>
                    </div>
                    <div class="menu-item">
                        <image 
                            src="./library/images/pudding.jpg" 
                            alt="pudding" 
                            class="menu-image"
                            data-name="pudding"
                        />
                        <div class="menu-info">
                            <h3 class="menu-name">Pudding</h3>
                        </div>
                        <div class="menu-price">8.000</div>
                        <button class="add-menu-btn" id="add-item-btn">Tambah</button>
                    </div>
                    <div class="menu-item">
                        <image 
                            src="./library/images/puddingtelurbebek.jpg" 
                            alt="puddingtelurbebek" 
                            class="menu-image"
                            data-name="puddingtelurbebek"
                        />
                        <div class="menu-info">
                            <h3 class="menu-name">Pudding Telur Bebek</h3>
                        </div>
                        <div class="menu-price">8.000</div>
                        <button class="add-menu-btn" id="add-item-btn">Tambah</button>
                    </div>
                    <div class="menu-item">
                        <image 
                            src="./library/images/redvelvet.jpg" 
                            alt="redvelvet" 
                            class="menu-image"
                            data-name="redvelvet"
                        />
                        <div class="menu-info">
                            <h3 class="menu-name">Kue Red Velvet</h3>
                        </div>
                        <div class="menu-price">8.000</div>
                        <button class="add-menu-btn" id="add-item-btn">Tambah</button>
                    </div>
                    <div class="menu-item">
                        <image 
                            src="./library/images/rotibakar.jpg" 
                            alt="rotibakar" 
                            class="menu-image"
                            data-name="rotibakar"
                        />
                        <div class="menu-info">
                            <h3 class="menu-name">Roti Bakar</h3>
                        </div>
                        <div class="menu-price">8.000</div>
                        <button class="add-menu-btn" id="add-item-btn">Tambah</button>
                    </div>
                    <div class="menu-item">
                        <image 
                            src="./library/images/rotigoreng.jpg" 
                            alt="Roti Goreng" 
                            class="menu-image"
                            data-name="Roti Goreng"
                        />
                        <div class="menu-info">
                            <h3 class="menu-name">Roti Goreng</h3>
                        </div>
                        <div class="menu-price">8.000</div>
                        <button class="add-menu-btn" id="add-item-btn">Tambah</button>
                    </div>
                    <div class="menu-item">
                        <image 
                            src="./library/images/sandwichbuah.jpg" 
                            alt="sandwichbuah" 
                            class="menu-image"
                            data-name="sandwichbuah"
                        />
                        <div class="item-customizable">
                            <p>Customizable</p>
                        </div>
                        <div class="menu-info">
                            <h3 class="menu-name">Sandwich Buah (S)</h3>
                        </div>
                        <div class="menu-price">8.000</div>
                        <button class="add-menu-btn" id="add-item-btn">Tambah</button>
                    </div>
                    <div class="menu-item">
                        <image 
                            src="./library/images/sandwichbuah.jpg" 
                            alt="sandwichbuah" 
                            class="menu-image"
                            data-name="sandwichbuah"
                        />
                        <div class="item-customizable">
                            <p>Customizable</p>
                        </div>
                        <div class="menu-info">
                            <h3 class="menu-name">Sandwich Buah (L)</h3>
                        </div>
                        <div class="menu-price">13.000</div>
                        <button class="add-menu-btn" id="add-item-btn">Tambah</button>
                    </div>
                    <div class="menu-item">
                        <image 
                            src="./library/images/daungoreng.jpg" 
                            alt="daun goreng" 
                            class="menu-image"
                            data-name="daun goreng"
                        />
                        <div class="menu-info">
                            <h3 class="menu-name">Daun Goreng</h3>
                        </div>
                        <div class="menu-price">8.000</div>
                        <button class="add-menu-btn" id="add-item-btn">Tambah</button>
                    </div>
                    <div class="menu-item">
                        <image 
                            src="./library/images/pepaya.jpg" 
                            alt="pepaya" 
                            class="menu-image"
                            data-name="pepaya"
                        />
                        <div class="menu-info">
                            <h3 class="menu-name">Pepaya</h3>
                        </div>
                        <div class="menu-price">8.000</div>
                        <button class="add-menu-btn" id="add-item-btn">Tambah</button>
                    </div>
                    <div class="menu-item">
                        <image 
                            src="./library/images/sambalgoreng.jpg" 
                            alt="sambal goreng" 
                            class="menu-image"
                            data-name="sambal goreng"
                        />
                        <div class="menu-info">
                            <h3 class="menu-name">Sambal Goreng</h3>
                        </div>
                        <div class="menu-price">8.000</div>
                        <button class="add-menu-btn" id="add-item-btn">Tambah</button>
                    </div>
                    <div class="menu-item">
                        <image 
                            src="./library/images/tepunggoreng.jpg" 
                            alt="tepung goreng" 
                            class="menu-image"
                            data-name="tepung goreng"
                        />
                        <div class="menu-info">
                            <h3 class="menu-name">Tepung Goreng</h3>
                        </div>
                        <div class="menu-price">8.000</div>
                        <button class="add-menu-btn" id="add-item-btn">Tambah</button>
                    </div>
                </div>
            </div>
            <div class="floating-menu-container">
                <div class="floating-menu-btn">
                  <button id="menuButton">Menu</button>
                </div>
            </div>
            <div class="menu-modal" id="menuModal">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3>Kategori Menu</h3>
                        <span class="close-modal">
                            <i class="fa fa-times"></i>
                        </span>
                    </div>
                    <div class="modal-body">
                        <div class="menu-category active">Menu Makanan</div>
                        <div class="menu-category">Menu Minuman</div>
                        <div class="menu-category">Menu Tambahan</div>
                    </div>
                </div>
            </div>
            <div class="guest-modal hidden" id="guestModal">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3>Pilih Mode</h3>
                        <span class="close-modal">
                            <i class="fa fa-times"></i>
                        </span>
                    </div>
                    <div class="modal-body">
                        <div class="option-btn" id="guestOption">
                            <i class="fa fa-user"></i>
                            <div>
                                <h4>Lanjut sebagai Guest</h4>
                                <p>Tanpa login, tetap bisa pesan</p>
                            </div>
                        </div>
                        <div class="option-btn" id="memberOption">
                            <i class="fa fa-user-plus"></i>
                            <div>
                                <h4>Login sebagai Member</h4>
                                <p>Dapatkan poin dan promo khusus</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="delivery-modal hidden" id="deliveryModal">
                <div class="modal-content">
                    <div class="delivery-option">
                        <div class="option-header">
                            <i class="fa fa-shopping-bag"></i> <h3>Pengantaran</h3>
                        </div>
                    </div>
                    <div class="delivery-option">
                        <div class="option-header">
                            <i class="fa fa-cutlery"></i> <h3>Makan di tempat meja <span id="nomormeja"></span></h3>
                        </div>
                    </div>
                </div>
            </div>
            <div class="cart-notification hidden" id="cartNotification">
                <div class="cart-info">
                    <div class="cart-icon-wrapper">
                        <i class="fa fa-shopping-cart" style="font-size: 24px;"></i>
                        <span class="cart-count-badge" id="cartCount">0</span>
                    </div>
                </div>
                <span class="cart-total"><span id="cartTotal">0</span></span>
                <button class="view-cart-btn">Lihat Keranjang</button>
            </div>
        </div>
    </div>
    <script src="./library/js/filter.js"></script>
    <script src="./library/js/menu.js"></script>
    <script src="./library/js/searchbar.js"></script>
    <script src="./library/js/takingorder-notifaction.js"></script>
    <script src="./library/js/menu-detail.js"></script>
    <script src="./library/js/menu-detail.js"></script>
    <script src="./library/js/delivery-modal.js"></script>
    <script src="./library/js/currentUser.js"></script>
    <script src="./library/js/auth.js"></script>
</body>
</html>