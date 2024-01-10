import { login } from "../api/user.js";

let context;
export function showLoginView(ctx) {
    context = ctx;
    const template = createLoginTemp();
    context.renderer(template);
}

function createLoginTemp() {
    return context.html`
    <div class="row space-top">
            <div class="col-md-12">
                <h1>Login User</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
        <form @submit = ${onSubmit}>
            <div class="row space-top">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="email">Email</label>
                        <input class="form-control" id="email" type="text" name="email">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="password">Password</label>
                        <input class="form-control" id="password" type="password" name="password">
                    </div>
                    <input type="submit" class="btn btn-primary" value="Login" />
                </div>
            </div>
        </form>
    `
}

async function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const { email, password } = Object.fromEntries(formData);

    if (email && password) {
    
        const data = await login({ email, password });
        if (data) {
            sessionStorage.setItem('user', JSON.stringify(data));
        }
        console.log('login');
        context.updateNav();
        context.goTo('/')
    } else {
        return
    }
}