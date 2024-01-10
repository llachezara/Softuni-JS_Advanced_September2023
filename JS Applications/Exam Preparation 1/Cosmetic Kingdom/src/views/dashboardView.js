import { getAllItems } from "../api/data.js";
import { userData } from "../api/userService.js";

let context;
export async function showDashboardView(ctx) {
  context = ctx;
  const user = userData.getUser();
  context.user = user;

  const items = await getAllItems();
  const template = createDashboardViewTemplate(items);
  context.renderer(template);
  context.updateNav();
}

function createDashboardViewTemplate(array) {
  // ${array?.map(el => createItemTemplate(el))}

  return context.html`
   <h2>Products</h2>
        ${array?.length > 0 ?
      context.html`<section id="dashboard">
        ${array.map(el => createItemTemplate(el))}
        </section>`
      :
      context.html`<h2>No products yet.</h2>`}
   `
}

function createItemTemplate(object) {
  return context.html`
     <div class="product">
            <img src=".${object.imageUrl}" alt="example1" />
            <p class="title">${object.name}</p>
            <p><strong>Price:</strong><span class="price">${object.price}</span>$</p>
            <a class="details-btn" href="/details/${object._id}">Details</a>
          </div>
    `
}