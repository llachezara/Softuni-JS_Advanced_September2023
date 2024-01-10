const logoutEl = document.querySelector('a#logout');
logoutEl.addEventListener('click', logout);
const URI_LOGOUT = 'http://localhost:3030/users/logout';

async function logout() {
    const data = {
        method: 'GET',
        headers: {
            'X-Authorization': sessionStorage.getItem('token')
        }
    }
    const response = await fetch(URI_LOGOUT, data);
    sessionStorage.clear();
    window.location.href = './index.html';
}