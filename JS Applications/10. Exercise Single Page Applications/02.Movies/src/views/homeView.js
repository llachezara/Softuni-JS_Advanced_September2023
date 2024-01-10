import { getAllMovies } from "../api/data.js";
import { userData } from "../api/userService.js";

let context;
export async function showHomeView(ctx) {
    context = ctx;
    const movies = await getAllMovies();
    const user = userData.getUser();
    
    const template = createMoviesTemplate(movies, user);
    context.renderer(template)
}

function createMoviesTemplate(array, user) {
    return context.html`
   <section id="home-page" class="view-section">
        <div
          class="jumbotron jumbotron-fluid text-light"
          style="background-color: #343a40"
        >
          <img
            src="https://slicksmovieblog.files.wordpress.com/2014/08/cropped-movie-banner-e1408372575210.jpg"
            class="img-fluid"
            alt="Responsive image"
            style="width: 150%; height: 200px"
          />
          <h1 class="display-4">Movies</h1>
          <p class="lead">
            Unlimited movies, TV shows, and more. Watch anywhere. Cancel
            anytime.
          </p>
        </div>

        <h1 class="text-center">Movies</h1>

        ${user ? context.html`<section id="add-movie-button" class="user">
          <a href="/add-movie" class="btn btn-warning">Add Movie</a>
        </section>` : ""}

        <section id="movie">
          <div class="mt-3">
            <div class="row d-flex d-wrap">
              <ul
                id="movies-list"
                class="card-deck d-flex justify-content-center"
              >
                ${array?.map(el => createSingleMovieTemplate(el))}

              </ul>
            </div>
          </div>
        </section>
      </section>
   `
}

function createSingleMovieTemplate(object) {
    return context.html`
     <li>
        <div class="card-deck">
        <div class="card">
            <img src="${object.img}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${object.title}</h5>
            </div>

            <div class="card-footer">
            <a class="btn btn-info" data-id="${object._id}" href="/movie-details/${object._id}">Details</a>
            </div>
        </div>
    </li>
    `
}