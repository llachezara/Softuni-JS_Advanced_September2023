import { del, get, post, put } from "./requester.js"

const itemsEndpoints = {
    getAll: () => `/data/products?sortBy=_createdOn%20desc`,
    getItem: (itemId) => `/data/products/${itemId}`,
    create: () => `/data/products`,
    update: (itemId) => `/data/products/${itemId}`,
    delete: (itemId) => `/data/products/${itemId}`,
}

const buyBtnEndpoints = {
    addBuy: () => `/data/bought`,
    getTotalCount: (productId) => `/data/bought?where=productId%3D%22${productId}%22&distinct=_ownerId&count`,
    getBuysFromUser: (productId, userId) => `/data/bought?where=productId%3D%22${productId}%22%20and%20_ownerId%3D%22${userId}%22&count`

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

//Buy Button

export async function addToBoughtCount(body) {
    await post(buyBtnEndpoints.addBuy(), body)
}

export async function getTotalCountById(itemId) {
    const data = await get(buyBtnEndpoints.getTotalCount(itemId))
    return data;
}

export async function getBuysFromCurrentUser(itemId, userId) {
    const data = await get(buyBtnEndpoints.getBuysFromUser(itemId, userId))
    return data
}




