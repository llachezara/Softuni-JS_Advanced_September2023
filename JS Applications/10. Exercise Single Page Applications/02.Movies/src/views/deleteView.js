import { deleteMovie } from "../api/data.js";


let context;
export async function showDeleteView(ctx) {

    context = ctx;
    const movieId = context.params.id;
    alert('Are you sure you want to delete it?')
    await deleteMovie(movieId);

    context.updateNav();
    context.goTo(`/`);
}