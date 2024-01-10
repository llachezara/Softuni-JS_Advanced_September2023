import page from "../node_modules/page/page.mjs";
import { html, render } from "../node_modules/lit-html/lit-html.js";
import { userData } from "./api/userService.js";

import { showHomeView } from "./views/homeView.js";
import { showDashboardView } from "./views/dashboardView.js";

import { showLoginView } from "./views/loginView.js";
import { showRegisterView } from "./views/registerView.js"
import { logoutUser } from "./views/logoutView.js";
import { showAddView } from "./views/addView.js";

import { showDetailsView } from "./views/detailsView.js";
import { showEditView } from "./views/editView.js";
import { showDeleteView } from "./views/deleteView.js";

const root = document.querySelector('main');
//a[data-id="home"]
const userDiv = document.querySelector('nav div.user');
const guestDiv = document.querySelector('nav div.guest');

page(updateCTX)
page('/', showHomeView)
page('/dashboard', showDashboardView)

page('/register', showRegisterView)
page('/login', showLoginView)
page('/logout', logoutUser)

page('/add', showAddView)

page('/details/:id', showDetailsView)
page('/details/edit/:id', showEditView)
page('/details/delete/:id', showDeleteView)
//page('/buy/:id', buyItem)

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
    //.style.display = '';
    //.style.display = 'none';

    if (currUser) {
        userDiv.style.display = '';
        guestDiv.style.display = 'none';
    } else {
        userDiv.style.display = 'none';
        guestDiv.style.display = '';
    }

}
