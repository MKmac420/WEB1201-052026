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

/* Author: vimesh
Desc: on mobile, shows or hides the hamburger menu when clicked 
*/

const menuButton = document.getElementById('mobile-menu-button');
const navLinks = document.getElementById('nav-links');

menuButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
