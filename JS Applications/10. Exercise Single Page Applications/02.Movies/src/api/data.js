import { del, get, post, put } from "./requester.js"

const movieEndpoints = {
    getAllMovies: () => `data/movies`,
    getSingleMovie: (movieId) => `data/movies/${movieId}`,
    createMovie: () => `data/movies`,
    updateMovie: (movieId) => `data/movies/${movieId}`,
    deleteMovie: (movieId) => `data/movies/${movieId}`,
}

const likesEndpoints = {
    getNumberOfLikes: (movieId) => `data/likes?where=movieId%3D%22${movieId}%22&distinct=_ownerId&count`,
    getLikeFromUser: (movieId, userId) => `data/likes?where=movieId%3D%22${movieId}%22%20and%20_ownerId%3D%22${userId}%22`,
    addLike: () => `data/likes`,
    revokeLike: () => `data/likes/${id}`
}

//Movie related
export async function getAllMovies() {

    const data = await get(movieEndpoints.getAllMovies());
    return data;
}
export async function getMovieById(movieId) {
    const data = await get(movieEndpoints.getSingleMovie(movieId));
    return data;
}
export async function createMovie(body) {
    const data = await post(movieEndpoints.createMovie(), body);
}

export async function updateMovie(movieId, body) {
    const data = await put(movieEndpoints.updateMovie(movieId), body);
}

export async function deleteMovie(movieId) {
    await del(movieEndpoints.deleteMovie(movieId));
}


// Likes
export async function getLikesForMovie(movieId) {
    const data = await get(likesEndpoints.getNumberOfLikes(movieId));
    return data;
}

export async function getLikeFromSpecificUser(movieId, userId) {
    const data = await get(likesEndpoints.getLikeFromUser(movieId, userId));
    return data;
}

export async function addLike(movieId) {
    const data = await post(likesEndpoints.addLike(), { movieId });

}

export async function deleteLike(movieId) {
    const data = await del(likesEndpoints.addLike(movieId));
}




