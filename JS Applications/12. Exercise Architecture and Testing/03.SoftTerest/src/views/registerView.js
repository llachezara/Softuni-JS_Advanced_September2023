import { register } from "../api/user.js";

const registerView = document.getElementById('registerView');
const form = document.querySelector('#registerView form');
form.addEventListener('submit', onSubmit);

let context = null;

export function showRegister(ctx) {
    context = ctx;
    context.renderer(registerView);
}

async function onSubmit(e) {
    e.preventDefault()
    const formData = new FormData(e.target);
    const { email, password, repeatPassword } = Object.fromEntries(formData.entries());
    
    if (email.length >= 3 && password.length >= 3 && repeatPassword == password) {
        await register(email, password);
        
        if (localStorage.getItem('user')) {
            context.goTo('/home');
        }

    } else {
        
        if (email.length < 3 || password.length < 3)
            alert('Email and password must be at least 3 characters long.')
        if (repeatPassword != password) {
            alert('The repeated password must match your password.')
        }
    }
    
    form.reset();
}



