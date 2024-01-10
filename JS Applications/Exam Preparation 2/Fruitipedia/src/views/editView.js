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
  //${object}
  return context.html`
<section id="edit">
          <div class="form">
            <h2>Edit Fruit</h2>
            <form @submit=${onSubmit} class="edit-form">
              <input
                type="text"
                name="name"
                id="name"
                value="${object.name}"
                placeholder="Fruit Name"
              />
              <input
                type="text"
                name="imageUrl"
                value="${object.imageUrl}"
                id="Fruit-image"
                placeholder="Fruit Image URL"
              />
              <textarea
                id="fruit-description"
                name="description"
                placeholder="Description"
                rows="10"
                cols="50"
              >${object.description}</textarea>
              <textarea
                id="fruit-nutrition"
                name="nutrition"
                placeholder="Nutrition"
                rows="10"
                cols="50"
              >${object.nutrition}</textarea>
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
  const { name, imageUrl, description, nutrition } = Object.fromEntries(formData);

  const itemId = context.params.id;

  if (name && imageUrl && description && nutrition) {
    await updateItem(itemId, { name, imageUrl, description, nutrition })

    form.reset();
    context.updateNav();
    context.goTo(`/details/${itemId}`);

  } else {
    return
  }
}


