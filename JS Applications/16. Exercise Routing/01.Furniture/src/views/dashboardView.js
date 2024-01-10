import { getAllFurniture } from "../api/data.js";

let context;
export async function showDashboardView(ctx) {
    context = ctx;
    const furniture = await getAllFurniture();
    if (!Array.isArray(furniture)) {
        furniture = [furniture];
    }
    const template = createDashboardTemp(furniture);
    context.renderer(template);
}

function createDashboardTemp(furniture) {
    return context.html`
    <div class="row space-top">
    <div class="col-md-12">
        <h1>Welcome to Furniture System</h1>
        <p>Select furniture from the catalog to view details.</p>
    </div>
</div>
<div class="row space-top">
    ${furniture.map(element => createFurnitureCard(element))}
</div>
    `
}

function createFurnitureCard(object) {
    return context.html`
    <div class="col-md-4">
        <div class="card text-white bg-primary">
            <div class="card-body">
                    <img src="${object.img}" />
                    <p>${object.description}</p>
                    <footer>
                        <p>Price: <span>${object.price} $</span></p>
                    </footer>
                    <div>
                        <a href="details/${object._id}" class="btn btn-info">Details</a>
                    </div>
            </div>
        </div>
    </div>
    `
}