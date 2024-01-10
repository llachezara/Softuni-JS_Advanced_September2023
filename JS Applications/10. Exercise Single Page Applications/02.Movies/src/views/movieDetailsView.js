import { addLike, getLikeFromSpecificUser, getLikesForMovie, getMovieById } from "../api/data.js";
import { userData } from "../api/userService.js";

let context;
let currUserLikedCurrMovie = false;
export async function showDetailsView(ctx) {
    context = ctx;
    const movieId = context.params.id;
    const currentMovie = await getMovieById(movieId);
    const likes = await getLikesForMovie(movieId);
    const user = userData.getUser();
    
    if (user) {
        const response = await getLikeFromSpecificUser(movieId, user._id)
        currUserLikedCurrMovie = response.length > 0;
    }
    
    const template =  createDetalisView(currentMovie, user,  likes, currUserLikedCurrMovie);
    context.renderer(template);
}

 function createDetalisView(object, user, likes, curUserLikedCurrMovie) {

    return context.html`
    <section id="movie-example" class="view-section">
        <div class="container">
          <div class="row bg-light text-dark">
            <h1>Movie title: ${object.title}</h1>

            <div class="col-md-8">
              <img
                class="img-thumbnail"
                src="${object.img}"
                alt="Movie"
              />
            </div>
            <div class="col-md-4 text-center">
              <h3 class="my-3">Movie Description</h3>
              <p>
              ${object.description}
              </p>
             ${user && user._id === object._ownerId ? 
                context.html`<a class="btn btn-danger" href="/movie-details/delete/${object._id}">Delete</a>
                             <a class="btn btn-warning" href="/movie-details/edit/${object._id}">Edit</a>` : ``}
              ${user && user._id !== object._ownerId && curUserLikedCurrMovie != true ? 
                context.html`<a data-id="${object._id}" @click=${ onClickLikeBtn} class="btn btn-primary" href="#">Like</a>` : ``}
    
              <span class="enrolled-span">Liked ${likes}</span>
            </div>
          </div>
        </div>
      </section>
    `
}


async function onClickLikeBtn(e) {
    const currLikeLink = e.target;
    const movieId = currLikeLink.dataset.id;

    await addLike(movieId);
    const likes = await getLikesForMovie(movieId);
    const currentMovie = await getMovieById(movieId);
    const user = userData.getUser();

    const template = await createDetalisView(currentMovie, user, likes, currUserLikedCurrMovie);
    context.renderer(template);
}


