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

const URI_LOGIN = 'http://localhost:3030/users/login';
const loginForm = document.querySelector('form#login');

loginForm.addEventListener('submit', login)


async function login(e) {
    e.preventDefault()
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');
    //debugger

    const data = {
        method: "post",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    }


    try {
        const response = await fetch(URI_LOGIN, data);
        if (response.status != 200) {

            throw new Error('You are not registered!')

        }
        const responseData = await response.json();

        sessionStorage.setItem('token', responseData.accessToken)
        sessionStorage.setItem('email', responseData.email)
        sessionStorage.setItem('id', responseData._id)
        window.location.href = './index.html'

    } catch (error) {
        window.alert(error)
    }

}