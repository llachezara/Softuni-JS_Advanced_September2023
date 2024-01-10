import page from "../node_modules/page/page.mjs";
import { html, render } from "../node_modules/lit-html/lit-html.js";
import { userData } from "./api/userService.js";

import { showHomeView } from "./views/homeView.js";
import { showLoginView } from "./views/loginView.js";
import { showRegisterView } from "./views/registerView.js"
import { logoutUser } from "./views/logoutView.js";
import { showAddView } from "./views/addView.js";

import { showDetailsView } from "./views/movieDetailsView.js";
import { showEditView } from "./views/editView.js";
import { showDeleteView } from "./views/deleteView.js";

const root = document.querySelector('main');
const homeLink = document.querySelector('a[data-id="home"]');
const loginLink = document.querySelector('a[data-id="login"]');
const logoutLink = document.querySelector('a[data-id="logout"]');
const registerLink = document.querySelector('a[data-id="register"]');
const welcomeMessageLink = document.getElementById('welcome-msg');


page(updateCTX)
page('/', showHomeView)
page("/register", showRegisterView)
page("/login", showLoginView)
page("/logout", logoutUser)
page("/add-movie", showAddView)
page('/movie-details/:id', showDetailsView)
page('/movie-details/edit/:id', showEditView)
page('/movie-details/delete/:id', showDeleteView)

page.start()
updateNav();


function updateCTX(ctx, next) {
    ctx.renderer = renderer;
    ctx.html = html;
    ctx.updateNav = updateNav;
    ctx.goTo = goTo;

    next();
}

function renderer(section) {
    render(section, root);
}

function goTo(path) {
    page.redirect(path)
}

function updateNav() {
    const currUser = userData.getUser();
    homeLink.style.display = 'inline';

    if (currUser) {
        welcomeMessageLink.style.display = '';
        welcomeMessageLink.textContent = `Welcome, ${currUser.email}`;

        logoutLink.style.display = '';
        loginLink.style.display = 'none';
        registerLink.style.display = 'none';

    } else {
        welcomeMessageLink.style.display = 'none';
        logoutLink.style.display = 'none';
        loginLink.style.display = '';
        registerLink.style.display = '';
    }

}
