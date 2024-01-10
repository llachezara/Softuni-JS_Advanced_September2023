import { del, get, post, put } from "./requester.js"

const dataEndpoints = {
    allFurniture: 'data/catalog',
    userFurniture: (userId) => `data/catalog?where=_ownerId%3D%22${userId}%22`
}

export async function getAllFurniture() {
    const data = await get(dataEndpoints.allFurniture);
    return data;
}

export async function getFurnitureByID(id) {
    const data = await get(`${dataEndpoints.allFurniture}/${id}`);
    return data;
}

export async function editFurnitureByID(id, make, model, year, description, price, img, material) {
    const _ownerId = JSON.parse(sessionStorage.getItem('user'))._id;

    if (_ownerId) {
        await put(`${dataEndpoints.allFurniture}/${id}`, {
            _ownerId,
            make,
            model,
            year,
            description,
            price,
            img,
            material
        })
    }

}
export async function createFurniture(make, model, year, description, price, img, material) {
    const _ownerId = JSON.parse(sessionStorage.getItem('user'))._id;

    if (_ownerId) {
        await post(dataEndpoints.allFurniture, {
            _ownerId,
            make,
            model,
            year,
            description,
            price,
            img,
            material
        })
    }

}

export function validateData(make, model, year, description, price, img, material, callback) {
    let allValid = false;

    let validMake = false;
    let validModel = false;
    let validYear = false;
    let validDescr = false;
    let validPrice = false;
    let validImg = false;

    if (make.length >= 4) validMake = true;

    if (model.length >= 4) validModel = true;

    if (Number(year) >= 1950 && Number(year) <= 2050) validYear = true;

    if (description.length > 10) validDescr = true;
    if (price > 0) validPrice = true;
    if (img) validImg = true;

    if (validMake && validModel && validYear && validDescr && validPrice && validImg) {
        allValid = true;
    }

    return { allValid, validMake, validModel, validYear, validDescr, validPrice, validImg };
}

export async function deleteFurniture(id) {
    const _ownerId = JSON.parse(sessionStorage.getItem('user'))._id;
    if (_ownerId) {
        await del(`${dataEndpoints.allFurniture}/${id}`)
    }
}

export async function getUserFurniture() {
    const _ownerId = JSON.parse(sessionStorage.getItem('user'))._id;

    if (_ownerId) {
        return get(dataEndpoints.userFurniture(_ownerId))
    }
}
