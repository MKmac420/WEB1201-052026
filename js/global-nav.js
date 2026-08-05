document.addEventListener('DOMContentLoaded', () => {
    updateNavAuthButton();
});

function updateNavAuthButton() {
    const navLoginBtn = document.getElementById('nav-login-button');
    if (!navLoginBtn) return;

    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
        try {
            const user = JSON.parse(storedUser);
            if (user && user.username) {
                navLoginBtn.textContent = `PROFILE (${user.username})`;
            }
        } catch (e) {
            console.error('Error parsing user session', e);
        }
    } else {
        navLoginBtn.textContent = 'LOGIN/REGISTER';
    }
}
