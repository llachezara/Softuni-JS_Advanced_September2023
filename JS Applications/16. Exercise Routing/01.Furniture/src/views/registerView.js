import { register } from "../api/user.js";

let context;
export function showRegisterView(ctx) {
    context = ctx;
    const template = createRegisterTemp();
    context.renderer(template);
}

function createRegisterTemp() {
    return context.html`
    <div class="row space-top">
    <div class="col-md-12">
        <h1>Register New User</h1>
        <p>Please fill all fields.</p>
    </div>
</div>
<form @submit=${onSubmit} >
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
            <div class="form-group">
                <label class="form-control-label" for="rePass">Repeat</label>
                <input class="form-control" id="rePass" type="password" name="rePass">
            </div>
            <input type="submit" class="btn btn-primary" value="Register" />
        </div>
    </div>
</form>
    `
}

async function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const { email, password, rePass } = Object.fromEntries(formData);

    if (email && password && rePass) {
        
        const data = await register({ email, password });
        if (data) {
            sessionStorage.setItem('user', JSON.stringify(data));
        }
        console.log('registerView');
        context.updateNav();
        context.goTo('/')

    } else {
        return
    }
}