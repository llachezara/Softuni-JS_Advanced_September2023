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

//@submit = ${onSubmit}
function createAddViewTemp() {
  return context.html`
   <section id="create">
          <div class="form">
            <img class="border" src="./images/border.png" alt="">
            <h2>Add Character</h2>
            <form @submit = ${onSubmit} class="create-form">
              <input
                type="text"
                name="category"
                id="category"
                placeholder="Character Type"
              />
              <input
                type="text"
                name="image-url"
                id="image-url"
                placeholder="Image URL"
              />
              <textarea
              id="description"
              name="description"
              placeholder="Description"
              rows="2"
              cols="10"
            ></textarea>
            <textarea
              id="additional-info"
              name="additional-info"
              placeholder="Additional Info"
              rows="2"
              cols="10"
            ></textarea>
              <button type="submit">Add Character</button>
            </form>
            <img class="border" src="./images/border.png" alt="">
          </div>
        </section>
    `
}

async function onSubmit(e) {
  e.preventDefault();
  const form = e.currentTarget;
  const formData = new FormData(form);
  //TO DO
  const category = formData.get('category');
  const imageUrl = formData.get('image-url');
  const description = formData.get('description');
  const moreInfo = formData.get('additional-info');
  //formData.get('image-url');

  if (category && imageUrl && description && moreInfo) {

    const _ownerId = context.user._ownerId;
    await createItem({
      category,
      imageUrl, 
      description, 
      moreInfo,
      _ownerId
    })

    form.reset();
    context.updateNav();
    context.goTo('/dashboard');

  } else {
    context.updateNav();
    return
  }
}


