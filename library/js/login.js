document.addEventListener('DOMContentLoaded', function() {
    const loginTab = document.querySelector('.margin-button-kiri button');
    const registerTab = document.querySelector('.margin-button-kanan button');
    const formTitle = document.querySelector('.margin-login h2');
    const submitButton = document.querySelector('.margin-button-login button');
    const passwordField = document.querySelector('.margin-input-bawah input');
    const lupaPassword = document.querySelector('.margin-lupa-password p');
    const form = document.querySelector('form');
    const telephoneInput = document.querySelector('.margin-input-atas input');
    const passwordInputContainer = document.querySelector('.margin-input-bawah');
    let usernameField = null;
    let usernameInput = null;
    let confirmationField = null;
    let confirmPasswordInput = null;
    
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <p class="modal-message"></p>
            <button class="modal-ok-button">OK</button>
            <div class="register-prompt" style="display: none;">Daftar Sekarang</div>
        </div>
    `;
    document.body.appendChild(modal);
    
    if (!localStorage.getItem('users')) {
        localStorage.setItem('users', JSON.stringify([]));
        localStorage.setItem('lastUserId', '0');
    }
    
    function generateId() {
        let lastId = parseInt(localStorage.getItem('lastUserId')) || 0;
        lastId++;
        localStorage.setItem('lastUserId', lastId.toString());
        return lastId;
    }
    
    function createUsernameField() {
        if (!usernameField) {
            usernameField = document.createElement('div');
            usernameField.className = 'margin-input-username';
            usernameField.innerHTML = `
                <input type="text" name="username" placeholder="Masukan Username (min. 4 karakter)" required>
            `;
            telephoneInput.parentNode.insertAdjacentElement('afterend', usernameField);
            usernameInput = usernameField.querySelector('input');
        }
        return usernameField;
    }
    
    function createConfirmationField() {
        if (!confirmationField) {
            confirmationField = document.createElement('div');
            confirmationField.className = 'margin-input-confirm';
            confirmationField.innerHTML = `
                <input type="password" name="confirm_password" placeholder="Konfirmasi Password" required>
            `;
            passwordInputContainer.insertAdjacentElement('afterend', confirmationField);
            confirmPasswordInput = confirmationField.querySelector('input');
        }
        return confirmationField;
    }
    
    function showRegisterForm() {
        formTitle.textContent = 'Registrasi';
        submitButton.textContent = 'Daftar';
        telephoneInput.placeholder = 'Masukan Nomor Telepon';
        passwordField.placeholder = 'Masukan Password (min. 7 karakter)';

        const usernameField = createUsernameField();
        usernameField.style.display = 'block';
        if (usernameInput) {
            usernameInput.setAttribute('required', 'required');
        }

        const confirmationField = createConfirmationField();
        confirmationField.style.display = 'block';
        if (confirmPasswordInput) {
            confirmPasswordInput.setAttribute('required', 'required');
        }
        
        lupaPassword.textContent = '';
        registerTab.classList.add('active-register');
        loginTab.classList.remove('active-login');
    }
    
    function showLoginForm() {
        formTitle.textContent = 'Member Login';
        submitButton.textContent = 'Login';
        telephoneInput.placeholder = 'Masukan Nomor Telepon';
        passwordField.placeholder = 'Masukan Password';
        
        if (usernameField) {
            usernameField.style.display = 'none';
            if (usernameInput) {
                usernameInput.removeAttribute('required');
            }
        }
        
        if (confirmationField) {
            confirmationField.style.display = 'none';
            if (confirmPasswordInput) {
                confirmPasswordInput.removeAttribute('required');
            }
        }
        
        lupaPassword.textContent = 'Lupa Password?';
        loginTab.classList.add('active-login');
        registerTab.classList.remove('active-register');
    }
    
    function showModal(message, showRegisterPrompt = false) {
        const modalMessage = modal.querySelector('.modal-message');
        const registerPrompt = modal.querySelector('.register-prompt');
        modalMessage.textContent = message;
        
        if (showRegisterPrompt) {
            registerPrompt.style.display = 'block';
            registerPrompt.onclick = function() {
                modal.style.display = 'none';
                showRegisterForm();
            };
        } else {
            registerPrompt.style.display = 'none';
        }
        
        modal.style.display = 'block';
        modal.querySelector('.close-modal').onclick = function() {
            modal.style.display = 'none';
        };
        modal.querySelector('.modal-ok-button').onclick = function() {
            modal.style.display = 'none';
        };
        window.onclick = function(event) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        };
    }
    
    registerTab.addEventListener('click', showRegisterForm);
    loginTab.addEventListener('click', showLoginForm);
    document.addEventListener('click', function(e) {
        if (e.target && e.target.classList.contains('toggle-form')) {
            if (e.target.textContent === 'Daftar Sekarang') {
                showRegisterForm();
            } else {
                showLoginForm();
            }
        }
    });
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const telephone = telephoneInput.value.trim();
        const username = usernameField && usernameField.style.display !== 'none' 
            ? usernameInput.value.trim() 
            : telephone; 
        const password = passwordField.value.trim();
        const confirmPassword = confirmationField && confirmationField.style.display !== 'none' 
            ? confirmPasswordInput.value.trim() 
            : '';
    
        if (submitButton.textContent === 'Daftar') {
            if (!telephone || !username || !password || !confirmPassword) {
                showModal('Semua field harus diisi!');
                return;
            }
            if (username.length < 4) {
                showModal('Username harus minimal 4 karakter!');
                return;
            }
            if (password.length < 7) {
                showModal('Password harus minimal 7 karakter!');
                return;
            }
            if (password !== confirmPassword) {
                showModal('Password dan konfirmasi password tidak cocok!');
                return;
            }
    
            const users = JSON.parse(localStorage.getItem('users'));
            if (users.some(user => user.telephone === telephone)) {
                showModal('Nomor telepon sudah digunakan!');
                return;
            }
    
            const newUser = {
                id: generateId(),
                telephone: telephone,
                username: username, 
                password: password,
                createdAt: new Date().toISOString()
            };
            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));
            showModal('Registrasi berhasil! Silakan login.');
            showLoginForm();
            telephoneInput.value = '';
            if (usernameInput) usernameInput.value = '';
            passwordField.value = '';
            if (confirmPasswordInput) confirmPasswordInput.value = '';
        } else {
            const users = JSON.parse(localStorage.getItem('users'));
            if (users.length === 0) {
                showModal('Anda belum memiliki akun. Silakan daftar terlebih dahulu.', true);
                return;
            }
    
            if (!telephone || !password) {
                showModal('Nomor telepon dan password harus diisi!');
                return;
            }
    
            const user = users.find(user => (user.telephone === telephone) && user.password === password);
            if (user) {
                localStorage.setItem('currentUser', JSON.stringify(user));
                user.lastLogin = new Date().toISOString();
                localStorage.setItem('users', JSON.stringify(users));
                window.location.href = '/GFTO/index.php';
            } else {
                showModal('Nomor telepon atau password salah!');
            }
        }
    });    
    showLoginForm();
});