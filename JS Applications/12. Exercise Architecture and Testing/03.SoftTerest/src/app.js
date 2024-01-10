import { showUserNavbar, showGuestNavbar } from "./views/changesInNav.js";
import { showHome } from "./views/homeView.js";
import { showDashboard } from "./views/dashboardView.js";
import { showCreate } from "./views/createView.js";
import { showLogin } from "./views/loginView.js";
import { showRegister } from "./views/registerView.js";
import { handleLogout } from "./views/logoutView.js";


document.querySelector('#section').remove();
document.querySelector('nav').addEventListener('click', onNavigate)
const main = document.querySelector('main');

function renderer(section) {
    main.replaceChildren(section);
}
const routs = {
    "/home": showHome,
    "/dashboard": showDashboard,
    "/create": showCreate,
    "/login": showLogin,
    "/register": showRegister,
    "/logout": handleLogout, 
};

export const ctx = {
    renderer,
    goTo
}

goTo("/home");

function onNavigate(e) {
    e.preventDefault();
    
    let target = e.target;

    if (target.tagName == "A" || target.tagName == "IMG") {

        if (target.tagName == "IMG") {
            target = e.target.parentElement;
        }

        const url = new URL(target);
        const viewName = url.pathname;

        goTo(viewName);
    }
}

function goTo(path) {
    const handler = routs[path];
    handler(ctx);
    localStorage.getItem('user') ? showUserNavbar() : showGuestNavbar();
}