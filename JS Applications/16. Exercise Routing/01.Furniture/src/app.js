import page from "../node_modules/page/page.mjs";
import { html, render } from "../node_modules/lit-html/lit-html.js";

import { showCreateFurnitureView } from "./views/createFurnitureView.js";
import { showDashboardView } from "./views/dashboardView.js";
import { showLoginView } from "./views/loginView.js";
import { showRegisterView } from "./views/registerView.js";
import { logoutUser } from "./views/logoutView.js";
import { showFurnitureDetails } from "./views/furnitureDetailsView.js";
import { deleteView } from "./views/deleteView.js";
import { editView } from "./views/editView.js";
import { showMyFurnitureView } from "./views/myFurnitureView.js";

const root = document.querySelector('.container');
const userNav = document.querySelector('#user');
const guestNav = document.querySelector('#guest');


page(updateCTX)
page('/', showDashboardView)
page('/dashboard', showDashboardView)
page("/register", showRegisterView)
page("/login", showLoginView)
page("/logout", logoutUser)
page("/create", showCreateFurnitureView)
page('/my-furniture', showMyFurnitureView)
page('/details/:id', showFurnitureDetails)
page('/details/:id/edit', editView)
page('/details/:id/delete', deleteView)

page.start()
updateNav();

function updateCTX(ctx, next) {
    ctx.renderer = renderer;
    ctx.html = html;
    ctx.updateNav = updateNav;
    ctx.goTo = goTo;

    next();
}

function renderer(section){
    render(section, root);
}

function goTo(path) {
    page.redirect(path)
}

function updateNav() {
    const currUser = sessionStorage.getItem('user')
    if (currUser) {
        userNav.style.display = 'inline';
        guestNav.style.display = 'none';

    } else {
        userNav.style.display = 'none';
        guestNav.style.display = 'inline';
    }

}
