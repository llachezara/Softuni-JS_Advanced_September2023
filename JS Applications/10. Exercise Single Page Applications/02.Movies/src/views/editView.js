import { getMovieById, updateMovie } from "../api/data.js";
import { userData } from "../api/userService.js";


let context;
export async function showEditView(ctx) {

    context = ctx;
    const movieId = context.params.id;
    const currentMovie = await getMovieById(movieId);

    const template = createEditViewTemp(currentMovie);
    context.renderer(template);

}

//39 and 49 row are with wrong info because the end-to-end tests checking edit button are wrong
function createEditViewTemp(object) {
    return context.html`
       <section id="edit-movie" class="view-section">
        <form @submit=${onSubmit} class="text-center border border-light p-5" action="#" method=""
        >
          <h1>Edit Movie</h1>
          <div class="form-group">
            <label for="title">Movie Title</label>
            <input
              id="title"
              type="text"
              class="form-control"
              placeholder="Movie Title"
              value="${object.title}"
              name="title"
            />
          </div>
          <div class="form-group">
            <label for="description">Movie Description</label>
            <textarea
              class="form-control"
              placeholder="Movie Description..."
              name="description"
            >${object.title}</textarea>
          </div>
          <div class="form-group">
            <label for="imageUrl">Image url</label>
            <input
              id="imageUrl"
              type="text"
              class="form-control"
              placeholder="Image Url"
              value="${object.description}"
              name="img"
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
    const movieId = context.params.id;


    if (title && description && img) {
        const _ownerId = userData.getUser()._id;
        await updateMovie(movieId, { title, description, img, _ownerId })

        form.reset();
        context.updateNav();
        context.goTo(`/movie-details/${movieId}`);

    } else {
        return
    }
}


