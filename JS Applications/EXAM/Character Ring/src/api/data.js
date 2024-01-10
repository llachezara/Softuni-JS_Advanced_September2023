import { del, get, post, put } from "./requester.js"

const itemsEndpoints = {
    getAll: () => `/data/characters?sortBy=_createdOn%20desc`,
    getItem: (itemId) => `/data/characters/${itemId}`,
    create: () => `/data/characters`,
    update: (itemId) => `/data/characters/${itemId}`,
    delete: (itemId) => `/data/characters/${itemId}`,
}

//Items related
export async function getAllItems() {

    const data = await get(itemsEndpoints.getAll());
    return data;
}

//One item related
export async function getItemById(itemId) {
    const data = await get(itemsEndpoints.getItem(itemId));
    return data;
}
export async function createItem(body) {
    const data = await post(itemsEndpoints.create(), body);
}

export async function updateItem(itemId, body) {
    const data = await put(itemsEndpoints.update(itemId), body);
}

export async function deleteItem(itemId) {
    await del(itemsEndpoints.delete(itemId));
}

const likeEndpoints = {
    postLike: () => `/data/useful`,
    getLikesForChar: (characterId) => `/data/useful?where=characterId%3D%22${characterId}%22&distinct=_ownerId&count`,
    getLikesFromUser: (characterId, userId) => `/data/useful?where=characterId%3D%22${characterId}%22%20and%20_ownerId%3D%22${userId}%22&count`
}
//Likes

export async function addLike(characterId) {
    await post(likeEndpoints.postLike(), { characterId })
}

export async function getLikesForCurrentCharacter(characterId) {
    const data = await get(likeEndpoints.getLikesForChar(characterId))
    return data
}

export async function getLikesForCharacterFromCurrUser(characterId, userId) {
   const data = await get(likeEndpoints.getLikesFromUser(characterId, userId))
   return data
}



