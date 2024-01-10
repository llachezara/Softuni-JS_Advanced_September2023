import { createItem } from "../api/data.js";
import { userData } from "../api/userService.js";

let context;
export async function showAddView(ctx) {
  context = ctx;
  const user = userData.getUser();
  context.user = user;

  const template = createAddViewTemp();
  context.renderer(template);

}

function createAddViewTemp() {
  return context.html`
   <section id="create">
          <div class="form">
            <h2>Add Product</h2>
            <form @submit = ${onSubmit} class="create-form">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Product Name"
              />
              <input
                type="text"
                name="imageUrl"
                id="product-image"
                placeholder="Product Image"
              />
              <input
                type="text"
                name="category"
                id="product-category"
                placeholder="Category"
              />
              <textarea
                id="product-description"
                name="description"
                placeholder="Description"
                rows="5"
                cols="50"
              ></textarea>
              
              <input
                type="text"
                name="price"
                id="product-price"
                placeholder="Price"
              />

              <button type="submit">Add</button>
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

  if (name && imageUrl && category && description && price) {

    const _ownerId = context.user._ownerId;
    await createItem({
      name,
      imageUrl,
      category,
      description,
      price,
      _ownerId
    }
    )

    form.reset();
    context.updateNav();
    context.goTo('/dashboard');

  } else {
    context.updateNav();
    return
  }
}


