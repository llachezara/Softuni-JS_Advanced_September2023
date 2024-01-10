import { getAllItems } from "../api/data.js";
import { userData } from "../api/userService.js";

let context;
export async function showHomeView(ctx) {
  context = ctx;
  const user = userData.getUser();
  context.user = user;
  
  const template = createHomeViewTemplate();
  context.renderer(template)
}

function createHomeViewTemplate(array, user) {

  return context.html`
       <section id="home">
          <h1>Learn more about your favorite fruits</h1>
          <img
            src="./images/pexels-pixabay-161559-dImkWBDHz-transformed (1).png"
            alt="home"
          />

        </section>
   `
}

function createItemTemplate(object) {
  return context.html`
     
    `
}