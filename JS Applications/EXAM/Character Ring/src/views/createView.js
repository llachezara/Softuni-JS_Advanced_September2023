import { createItem } from "../api/data.js";
import { userData } from "../api/userService.js";

let context;
export async function showCreateView(ctx) {
  context = ctx;
  const user = userData.getUser();
  context.user = user;

  const template = createCreateView();
  context.renderer(template);

}

//@submit = ${onSubmit}
function createCreateView() {
  return context.html`
   
    `
}

async function onSubmit(e) {
  e.preventDefault();
  const form = e.currentTarget;
  const formData = new FormData(form);
  //TO DO
  const { title, description, img } = Object.fromEntries(formData);

  if (title && description && img) {

    //const _ownerId = context.user._ownerId;
    await createItem({ title, description, img, _ownerId })

    form.reset();
    context.updateNav();
    context.goTo('/');

  } else {
    context.updateNav();
    return
  }
}


