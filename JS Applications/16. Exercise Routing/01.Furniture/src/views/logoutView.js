import { logout } from "../api/user.js";

let context;
export async function logoutUser(ctx) {
    context = ctx;
    await logout();
    sessionStorage.removeItem('user');

    console.log('logout');
    context.updateNav();
    context.goTo('/')
}