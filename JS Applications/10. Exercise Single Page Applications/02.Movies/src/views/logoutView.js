import { logout } from "../api/user.js";
import { userData } from "../api/userService.js";

let context;
export async function logoutUser(ctx) {
    context = ctx;
    await logout();
    userData.removeUser();
    console.log('Logout');

    context.updateNav();
    context.goTo('/');
}