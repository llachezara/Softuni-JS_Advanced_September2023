import { userData } from "../api/userService.js";

let context;
export async function showHomeView(ctx) {
  context = ctx;
  const user = userData.getUser();
  context.user = user;

  const template = createHomeViewTemplate();
  context.renderer(template);
  context.updateNav();
}

function createHomeViewTemplate() {

  return context.html`
  <section id="home">
          <img
            src="./images/beauty-g0d19af267_1920-removebg.png"
            alt="home"
          />
          <h2>Looking for the best beauty products?</h2>
          <h3>You are in the right place!</h3>
        </section>
   `
}
