import { logout } from "../api/user.js";

let context = null;
export async function handleLogout(ctx) {
    await logout();
    context = ctx;
    if (localStorage.getItem('user') == null) {
        context.goTo('/home');
    }
}