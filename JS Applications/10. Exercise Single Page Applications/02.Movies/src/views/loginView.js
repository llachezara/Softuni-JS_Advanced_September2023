import { login } from "../api/user.js";
import { userData } from "../api/userService.js";

let context;
export function showLoginView(ctx) {
    context = ctx;
    const template = createLoginTemp();
    context.renderer(template);
}

function createLoginTemp() {
    return context.html`
     <section id="form-login" class="view-section">
        <form @submit=${onSubmit}
          id="login-form"
          class="text-center border border-light p-5"
          action=""
          method=""
        >
          <div class="form-group">
            <label for="email">Email</label>
            <input
              id="email"
              type="email"
              class="form-control"
              placeholder="Email"
              name="email"
              value=""
            />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              id="password"
              type="password"
              class="form-control"
              placeholder="Password"
              name="password"
              value=""
            />
          </div>

          <button type="submit" class="btn btn-primary">Login</button>
        </form>
      </section>
    `
}

async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const { email, password } = Object.fromEntries(formData);

    if (email && password) {

        const data = await login({ email, password });
        if (data) {
            userData.setUser(data);
            console.log('Login');
            
            context.updateNav();
            context.goTo('/')
        }

        form.reset();

    } else {
        return
    }
}