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
  context.updateNav();
}

function createDashboardViewTemplate(array, user) {
  // ${array?.map(el => createItemTemplate(el))}

  return context.html`
   <h2>Characters</h2>
        <section id="characters">
        ${array.length > 0 ? array.map(el => createItemTemplate(el)) 
        : 
        context.html `<h2>No added Heroes yet.</h2>`}
        </section>
        
   `
}

function createItemTemplate(object) {
  return context.html`
     <div class="character">
            <img src=".${object.imageUrl}" alt="example1" />
            <div class="hero-info">
              <h3 class="category">${object.category}</h3>
              <p class="description">${object.description}</p>
              <a class="details-btn" href="/details/${object._id}">More Info</a>
            </div>
            
          </div>
    `
}