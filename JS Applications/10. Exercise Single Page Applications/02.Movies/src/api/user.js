import { get, post, put, del } from "./requester.js";


const userEndpoints = {
    register: 'users/register',
    login: 'users/login',
    logout: 'users/logout',
}
export async function register(data) {
    const responseData = await post(userEndpoints.register, data);
    return responseData;

}

export async function login(data) {
    const responseData = await post(userEndpoints.login, data);
    return responseData;
}

export async function logout() {
    const responseData = await get(userEndpoints.logout);
}