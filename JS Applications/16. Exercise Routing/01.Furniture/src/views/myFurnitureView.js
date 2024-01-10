import { getUserFurniture } from "../api/data.js";

let context;
export async function showMyFurnitureView(ctx) {
    context = ctx;
    const furniture = await getUserFurniture();
    if (!Array.isArray(furniture)) {
        furniture = [furniture];
    }
    const template = createUserFurnitureTemp(furniture);
    context.renderer(template);
}

function createUserFurnitureTemp(array) {
    
    return context.html`
    <div class="row space-top">
            <div class="col-md-12">
                <h1>My Furniture</h1>
                <p>This is a list of your publications.</p>
            </div>
        </div>
        <div class="row space-top">
            ${array.map((element) => createSingleFurnitureTemp(element))}
        </div>
    `
}

function createSingleFurnitureTemp(object) {
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
                                <a href="/details/${object._id}" class="btn btn-info">Details</a>
                            </div>
                    </div>
                </div>
            </div>
   `
}