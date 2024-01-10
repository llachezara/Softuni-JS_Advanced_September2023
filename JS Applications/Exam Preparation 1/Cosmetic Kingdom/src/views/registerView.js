import { register } from "../api/user.js";
import { userData } from "../api/userService.js";

let context;
export function showRegisterView(ctx) {
  context = ctx;
  const template = createRegisterTemp();
  context.renderer(template);
}

function createRegisterTemp() {
  //@submit=${onSubmit}
  return context.html`
   <section id="register">
          <div class="form">
            <h2>Register</h2>
            <form @submit=${onSubmit} class="register-form">
              <input
                type="text"
                name="email"
                id="register-email"
                placeholder="email"
              />
              <input
                type="password"
                name="password"
                id="register-password"
                placeholder="password"
              />
              <input
                type="password"
                name="re-password"
                id="repeat-password"
                placeholder="repeat password"
              />
              <button type="submit">register</button>
              <p class="message">Already registered? <a href="/login">Login</a></p>
            </form>
          </div>
        </section>
    `
}

async function onSubmit(e) {
  e.preventDefault();
  const form = e.currentTarget;
  const formData = new FormData(form);
  //TO DO
  const email = formData.get('email');
  const password = formData.get('password');
  const repeatPassword = formData.get('re-password');

  //Validation
  if (email && password && password == repeatPassword) {

    const data = await register({ email, password });
    if (data) {

      userData.setUser(data);
      console.log('Register');

      context.updateNav();
      context.goTo('/dashboard')
    }

    form.reset();

  } else {
    context.updateNav();
    window.alert('Incorrect info in input fields!');
    form.reset();
    return
  }
}