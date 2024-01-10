import { getFurnitureByID } from "../api/data.js";

let context;
export async function showFurnitureDetails(ctx) {
    context = ctx;
    const furnitureID = context.params.id;
    const furnitureObject = await getFurnitureByID(furnitureID);
    if (typeof furnitureObject !== "object") {
        furnitureObject = furnitureObject[0];
    }
    const template = createDetailsTepm(furnitureObject)
    context.renderer(template);
}

function createDetailsTepm(object) {

    let ownerId;
    if (sessionStorage.getItem('user')) {
        ownerId = JSON.parse(sessionStorage.getItem('user'))._id;
    }

    return context.html`
    <div class="row space-top">
    <div class="col-md-12">
        <h1>Furniture Details</h1>
    </div>
</div>
<div class="row space-top">
    <div class="col-md-4">
        <div class="card text-white bg-primary">
            <div class="card-body">
                <img src=".${object.img}" />
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <p>Make: <span>${object.make}</span></p>
        <p>Model: <span>${object.model}</span></p>
        <p>Year: <span>${object.year}</span></p>
        <p>Description: <span>${object.description}</span></p>
        <p>Price: <span>${object.price}</span></p>
        <p>Material: <span>${object.material}</span></p>
        <div>
            <!-- <a style = ${ownerId == object._ownerId ? "display:inline" : "display:none"} href="${object._id}/edit" class="btn btn-info">Edit</a>
             <a style = ${ownerId == object._ownerId ? "display:inline" : "display:none"} href="${object._id}/delete" class="btn btn-red">Delete</a> -->
             ${ownerId && ownerId == object._ownerId ?
            context.html`<a  href="${object._id}/edit" class="btn btn-info">Edit</a>
                      <a  href="${object._id}/delete" class="btn btn-red">Delete</a>` : ""}
        </div>
    </div>
</div>
    `
}

// ${ownerId == object._ownerId ? context.html
//     `<a href="${object._id}/edit" class="btn btn-info">Edit</a>
//      <a  href="${object._id}/delete" class="btn btn-red">Delete</a>`
//     : ""}