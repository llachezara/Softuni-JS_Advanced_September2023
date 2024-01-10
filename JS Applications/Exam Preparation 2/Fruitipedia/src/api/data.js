import { del, get, post, put } from "./requester.js"

const itemsEndpoints = {
    getAll: () => `data/fruits?sortBy=_createdOn%20desc`,
    getItem: (itemId) => `data/fruits/${itemId}`,
    create: () => `data/fruits`,
    update: (itemId) => `data/fruits/${itemId}`,
    delete: (itemId) => `data/fruits/${itemId}`,
    getArrayOfFruits: (query) => `data/fruits?where=name%20LIKE%20%22${query}%22`
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

//Search
export async function getArrayForSearch(query) {
    const data = await get(itemsEndpoints.getArrayOfFruits(query));
    return data
}






