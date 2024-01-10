import { createMovie } from "../api/data.js";
import { userData } from "../api/userService.js";

let context;
export async function showAddView(ctx) {

    context = ctx;
    const template = createAddMovieTemp();
    context.renderer(template);

}

function createAddMovieTemp() {
    return context.html`
    <section id="add-movie" class="view-section">
        <form @submit = ${onSubmit}
          id="add-movie-form"
          class="text-center border border-light p-5"
          action="#"
          method=""
        >
          <h1>Add Movie</h1>
          <div class="form-group">
            <label for="title">Movie Title</label>
            <input
              id="title"
              type="text"
              class="form-control"
              placeholder="Title"
              name="title"
              value=""
            />
          </div>
          <div class="form-group">
            <label for="description">Movie Description</label>
            <textarea
              class="form-control"
              placeholder="Description"
              name="description"
            ></textarea>
          </div>
          <div class="form-group">
            <label for="imageUrl">Image url</label>
            <input
              id="imageUrl"
              type="text"
              class="form-control"
              placeholder="Image Url"
              name="img"
              value=""
            />
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </section>
    `
}

async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const { title, description, img } = Object.fromEntries(formData);

    if (title && description && img) {
        const _ownerId = userData.getUser()._id;
        await createMovie({ title, description, img, _ownerId })

        form.reset();
        context.updateNav();
        context.goTo('/');

    } else {
        return
    }
}


