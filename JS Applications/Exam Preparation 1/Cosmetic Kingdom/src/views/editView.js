import { getItemById, updateItem } from "../api/data.js";
import { userData } from "../api/userService.js";


let context;
export async function showEditView(ctx) {
  context = ctx;
  const user = userData.getUser();
  context.user = user;

  const itemId = context.params.id;
  const currentItem = await getItemById(itemId);

  const template = createEditViewTemp(currentItem);
  context.renderer(template);

}

//@submit=${onSubmit}
function createEditViewTemp(object) {

  return context.html`
 <section id="edit">
          <div class="form">
            <h2>Edit Product</h2>
            <form @submit=${onSubmit} class="edit-form">
              <input
                type="text"
                name="name"
                value="${object.name}"
                id="name"
                placeholder="Product Name"
              />
              <input
                type="text"
                name="imageUrl"
                value="${object.imageUrl}"
                id="product-image"
                placeholder="Product Image"
              />
              <input
                type="text"
                name="category"
                value="${object.category}"
                id="product-category"
                placeholder="Category"
              />
              <textarea
                id="product-description"
                name="description"
                placeholder="Description"
                rows="5"
                cols="50"
              >${object.description}</textarea>
              
              <input
                type="text"
                name="price"
                value="${object.price}"
                id="product-price"
                placeholder="Price"
              />
              <button type="submit">post</button>
            </form>
          </div>
        </section>

    `
}

async function onSubmit(e) {
  e.preventDefault();
  const form = e.currentTarget;
  const formData = new FormData(form);
  const { name, imageUrl, category, description, price } = Object.fromEntries(formData);

  const itemId = context.params.id;

  if (name && imageUrl && category && description && price) {

    await updateItem(itemId, {
      name,
      imageUrl,
      category,
      description,
      price
    })

    form.reset();
    context.updateNav();
    context.goTo(`/details/${itemId}`);

  } else {
    context.updateNav();
    return
  }
}


