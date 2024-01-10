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
            <img class="border" src="./images/border.png" alt="">
            <h2>Edit Character</h2>
            <form @submit=${onSubmit} class="edit-form">
              <input
              type="text"
              name="category"
              value="${object.category}"
              id="category"
              placeholder="Character Type"
            />
            <input
              type="text"
              name="image-url"
              value="${object.imageUrl}"
              id="image-url"
              placeholder="Image URL"
            />
            <textarea
            id="description"
            name="description"
            placeholder="Description"
            rows="2"
            cols="10"
          >${object.description}</textarea>
          <textarea
            id="additional-info"
            name="additional-info"
            placeholder="Additional Info"
            rows="2"
            cols="10"
          >${object.moreInfo}</textarea>
              <button type="submit">Edit</button>
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

  const itemId = context.params.id;

  if (category && imageUrl && description && moreInfo) {
    //const _ownerId = context.user._ownerId;

    await updateItem(itemId, {
      category,
      imageUrl, 
      description, 
      moreInfo,
      
    })

    form.reset();
    context.updateNav();
    context.goTo(`/details/${itemId}`);

  } else {
    context.updateNav();
    return
  }
}


