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
            <h2>Add Fruit</h2>
            <form @submit = ${onSubmit} class="create-form">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Fruit Name"
              />
              <input
                type="text"
                name="imageUrl"
                id="Fruit-image"
                placeholder="Fruit Image"
              />
              <textarea
              id="fruit-description"
              name="description"
              placeholder="Description"
              rows="10"
              cols="50"
            ></textarea>
            <textarea
              id="fruit-nutrition"
              name="nutrition"
              placeholder="Nutrition"
              rows="10"
              cols="50"
            ></textarea>
              <button type="submit">Add Fruit</button>
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

  if (name && imageUrl && description && nutrition) {

    const _ownerId = context.user._ownerId;
    await createItem({ name, imageUrl, description, nutrition, _ownerId })

    form.reset();
    context.updateNav();
    context.goTo('/');

  } else {
    return
  }
}


