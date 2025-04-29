document.addEventListener('DOMContentLoaded', function() {
    const guestModal = document.getElementById('guestModal');
    const guestOption = document.getElementById('guestOption');
    const memberOption = document.getElementById('memberOption');
    const closeModalBtn = guestModal.querySelector('.close-modal');
    const guestBtn = document.querySelector('.fungsi-kiri button');

    function updateLoginStatus() {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        const isGuest = localStorage.getItem('isGuest') === 'true';
        if (currentUser) {
            guestBtn.classList.remove('guest-active');
            guestBtn.classList.add('member-active');
            guestBtn.innerHTML = `<i class="fa fa-user-check"></i> ${currentUser.name || 'Member'}`;
            localStorage.removeItem('isGuest'); 
        } else if (isGuest) {
            guestBtn.classList.remove('member-active');
            guestBtn.classList.add('guest-active');
            guestBtn.innerHTML = '<i class="fa fa-user"></i> Guest <i class="fa fa-chevron-down"></i>';
        } else {
            guestBtn.classList.remove('member-active', 'guest-active');
            guestBtn.innerHTML = '<i class="fa fa-user"></i> Login <i class="fa fa-chevron-down"></i>';
        }
    }
    updateLoginStatus();

    guestBtn.addEventListener('click', function() {
        guestModal.classList.remove('hidden');
        guestModal.classList.add('active');
    });    

    closeModalBtn.addEventListener('click', function() {
        guestModal.classList.remove('active');
        guestModal.classList.add('hidden');
    });

    guestOption.addEventListener('click', function() {
        guestModal.classList.remove('active');
        guestModal.classList.add('hidden');
        localStorage.setItem('isGuest', 'true');
        localStorage.removeItem('currentUser'); 
        updateLoginStatus();
    });

    memberOption.addEventListener('click', function() {
        guestModal.classList.remove('active');
        guestModal.classList.add('hidden');
        window.location.href = 'login.php';
    });

    guestModal.addEventListener('click', function(e) {
        if (e.target === guestModal) {
            guestModal.classList.remove('active');
            guestModal.classList.add('hidden');
        }
    });

    window.addEventListener('storage', function(e) {
        if (e.key === 'currentUser' || e.key === 'isGuest') {
            updateLoginStatus();
        }
    });
});