import { register } from "../api/user.js";
import { userData } from "../api/userService.js";

let context;
export function showRegisterView(ctx) {
  context = ctx;
  const template = createRegisterTemp();
  context.renderer(template);
}

function createRegisterTemp() {
  return context.html`
    <section id="form-sign-up" class="view-section">
        <form @submit=${onSubmit}
          id="register-form"
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

          <div class="form-group">
            <label for="repeatPassword">Repeat Password</label>
            <input
              id="repeatPassword"
              type="password"
              class="form-control"
              placeholder="Repeat-Password"
              name="repeatPassword"
              value=""
            />
          </div>

          <button type="submit" class="btn btn-primary">Register</button>
        </form>
      </section>
    `
}

async function onSubmit(e) {
  e.preventDefault();
  const form = e.currentTarget;
  const formData = new FormData(form);
  const { email, password, repeatPassword } = Object.fromEntries(formData);

  if (email && password.length >= 6 && password == repeatPassword) {

    const data = await register({ email, password });
    if (data) {
      userData.setUser(data);
      console.log('Register');

      context.updateNav();
      context.goTo('/')
    }

    form.reset();

  } else {
    
    console.log('Incorrect!');
    return
  }
}