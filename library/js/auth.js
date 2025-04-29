function checkAuthStatus() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const accountButtonContainer = document.querySelector('.fungsi-kiri');
    if (currentUser) {
        accountButtonContainer.innerHTML = `
            <button id="logoutButton" class="logout-btn">
                <i class="fa fa-sign-out"></i> Logout (${currentUser.username})
            </button>
        `;
        document.getElementById('logoutButton').addEventListener('click', logout);
    }
}

function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'index.php';
}

document.addEventListener('DOMContentLoaded', checkAuthStatus);