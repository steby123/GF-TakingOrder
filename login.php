<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <link rel="stylesheet" href="./library/css/login.css" type="text/css" />
    <link rel="stylesheet" href="./library/css/modalPop-login.css" type="text/css" />
    <title>Login</title>
</head>
<body>
    <div class="container">
        <div class="margin">
            <div class="margin-login">
                <h2>Member Login</h2>
            </div>
            <div class="margin-button">
                <div class="margin-button-kiri">
                    <button>Login</button>
                </div>
                <div class="margin-button-kanan">
                    <button>Daftar</button>
                </div>
            </div>
            <div class="margin-form">
                <form action="/index.html" method="post">
                    <div class="margin-input">
                        <div class="margin-input-atas">
                            <input type="number" name="telephone" placeholder="Masukan Telephone" required />
                        </div>
                        <div class="margin-input-bawah">
                            <input type="password" name="password" placeholder="Masukan Password" required />
                        </div>
                    </div>
                    <div class="margin-lupa-password">
                        <p>Lupa Password?</p>
                    </div>
                    <div class="margin-button-login">
                        <button type="submit">Login</button>
                    </div>
                </form>
                <div class="margin-daftar-sekarang">
                    <p>Kembali ke halaman utama <span class="toggle-form" onclick="ridrectToTakingOrder()">Sebagai guest?</span></p>
                </div>
            </div>
        </div>
    </div>
    <script src="./library/js/login.js"></script>
    <script src="./library/js/riderctToTakingOrder.js"></script>
</body>
</html>
