import { getAllItems } from "../api/data.js";
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

function createHomeViewTemplate(array, user) {
  // ${array?.map(el => createItemTemplate(el))}

  return context.html`
   <section id="hero">
          <h1>Welcome to Elden Ring Explorer, your gateway
             to the mystical world of Elden Ring! Embark
              on an epic journey through a land shrouded
               in myth and mystery. Whether you're a seasoned
                adventurer or new to this realm, our app will
                 guide you through the wonders and challenges
                  that await in this extraordinary game world</h1>
                  <img id="hero-img" src="./images/hero.png" alt="hero">
        </section>
   `
}

function createItemTemplate(object) {
  return context.html`
     
    `
}