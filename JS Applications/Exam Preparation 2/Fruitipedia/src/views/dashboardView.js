import { getAllItems } from "../api/data.js";
import { userData } from "../api/userService.js";

let context;
export async function showDashboardView(ctx) {
  context = ctx;
  const user = userData.getUser();
  context.user = user;

  const items = await getAllItems();
  const template = createDashboardViewTemplate(items, user);
  context.renderer(template);
}

function createDashboardViewTemplate(array, user) {

  return context.html`
         <h2>Fruits</h2>
         <section id="dashboard">
          
         ${array.length > 0 ? context.html`
              ${array.map(el => createItemTemplate(el))}
         ` : ``}
          </section>

          ${array.length > 0 ? `` : context.html`<h2>No fruit info yet.</h2>`}
         
   `
}

function createItemTemplate(object) {
  return context.html`
     <div class="fruit">
            <img src='..${object.imageUrl}' alt="example1" />
            <h3 class="title">${object.name}</h3>
            <p class="description">${object.description}</p>
            <a class="details-btn" href="/details/${object._id}">More Info</a>
     </div>
          
    `
}