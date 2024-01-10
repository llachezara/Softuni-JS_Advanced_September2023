const navigation = document.querySelector('nav');
const spanWIthEmail = navigation.querySelector('p.email span');
const registerBtn = navigation.querySelector('#register');
const loginBtn = navigation.querySelector('#login');
const logoutBtn = navigation.querySelector('#logout');

if (sessionStorage.getItem('email')) {
    spanWIthEmail.textContent = sessionStorage.getItem('email');
    registerBtn.style.display = 'none';
    loginBtn.style.display = 'none';
    logoutBtn.style.display = 'inline';
} else {
    spanWIthEmail.textContent = 'guest';
    registerBtn.style.display = 'inline';
    loginBtn.style.display = 'inline';
    logoutBtn.style.display = 'none';
}

const registerForm = document.querySelector
    ('form#register');
const URI_REGISTER = 'http://localhost:3030/users/register';
//postRequest(email, password, rePass);

registerForm.addEventListener('submit', postRequest);

async function postRequest(event) {
    event.preventDefault();
    const formData = new FormData(registerForm);
    const email = formData.get('email');
    const password = formData.get('password');
    const rePass = formData.get('rePass');

    try {
        if (!email || !password || !rePass || password != rePass) {
            throw new Error('Invalid registration. Try to register again!');

        }
        const data = {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        };

        const response = await fetch(URI_REGISTER, data)

        if (response.status != 200) {
            throw new Error('You are already registered. Try logging in.')
        }
        const responseData = await response.json();

        sessionStorage.setItem('token', responseData.accessToken)
        sessionStorage.setItem('email', responseData.email)
        sessionStorage.setItem('id', responseData._id)

        window.location.href = './index.html';

    } catch (error) {
        window.alert(error)
    }

}


