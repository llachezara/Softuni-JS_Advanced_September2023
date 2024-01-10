import { login } from "../api/user.js";
import { userData } from "../api/userService.js";

let context;
export function showLoginView(ctx) {
  context = ctx;
  const template = createLoginTemp();
  context.renderer(template);
}

function createLoginTemp() {
  //@submit=${onSubmit}
  return context.html`
    <section id="login">
          <div class="form">
            <img class="border" src="./images/border.png" alt="">
            <h2>Login</h2>
            <form @submit=${onSubmit} class="login-form">
              <input type="text" name="email" id="email" placeholder="email" />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="password"
              />
              <button type="submit">login</button>
              <p class="message">
                Not registered? <a href="/register">Create an account</a>
              </p>
            </form>
            <img class="border" src="./images/border.png" alt="">
          </div>
        </section>
    `
}

async function onSubmit(e) {
  e.preventDefault();
  const form = e.currentTarget;
  const formData = new FormData(form);

  const { email, password } = Object.fromEntries(formData);

  //Validation
  if (email && password) {
    const data = await login({ email, password });

    if (data) {
      userData.setUser(data);
      console.log('Login');

      context.updateNav();
      context.goTo('/')
    } else {
      window.alert('Error login!');
      return
    }

    form.reset();

  } else {
    form.reset();
    window.alert('Error register!');

    context.updateNav();
    return
  }
}