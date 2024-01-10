import { requester } from "./requester.js"

const USER_ENDPOINTS = {
    login: "users/login",
    register: "users/register",
    logout: "users/logout",
    create: "data/ideas"
}
export async function register(email, password) {
    const data = await requester('POST', USER_ENDPOINTS.register, { email, password });
    if (data) {
        localStorage.setItem('user', JSON.stringify(data));
    }
}

export async function login(email, password) {
    const data = await requester('POST', USER_ENDPOINTS.login, { email, password })
    if (data) {
        localStorage.setItem('user', JSON.stringify(data));
    }
}


export async function logout() {
    const data = await requester('GET', USER_ENDPOINTS.logout);
    localStorage.removeItem('user');
}

export async function createIdea(title, description, img, _ownerId){
    const data = await requester('POST', USER_ENDPOINTS.create, {title, description, img, _ownerId});
    return data;
}