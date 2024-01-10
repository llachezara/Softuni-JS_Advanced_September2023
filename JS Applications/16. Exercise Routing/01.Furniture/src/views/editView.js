import { editFurnitureByID, getFurnitureByID, validateData } from "../api/data.js";

let context;
let furnitureID;
let furnitureObject
export async function editView(ctx) {

    context = ctx;
    furnitureID = context.params.id;
    furnitureObject = await getFurnitureByID(furnitureID);
    if (typeof furnitureObject !== "object") {
        furnitureObject = furnitureObject[0];
    }

    const template = createEditViewTemp(furnitureObject);
    context.renderer(template);

}

function createEditViewTemp(object, validateObject) {
    return context.html`
    <div class="row space-top">
    <div class="col-md-12">
        <h1>Edit Furniture</h1>
        <p>Please fill all fields.</p>
    </div>
</div>
<form @submit=${onSubmit}>
    <div class="row space-top">
        <div class="col-md-4">
            <div class="form-group">
                <label class="form-control-label" for="new-make">Make</label>
                <input class="form-control ${validateObject?.validMake == undefined ? "" : addClass(validateObject.validMake)}" id="new-make" type="text" name="make" value="${object.make}">
            </div>
            <div class="form-group has-success">
                <label class="form-control-label" for="new-model">Model</label>
                <input class="form-control ${validateObject?.validModel == undefined ? "" : addClass(validateObject.validModel)}" id="new-model" type="text" name="model" value="${object.model}">
            </div>
            <div class="form-group has-danger">
                <label class="form-control-label" for="new-year">Year</label>
                <input class="form-control ${validateObject?.validYear == undefined ? "" : addClass(validateObject.validYear)}" id="new-year" type="number" name="year" value="${object.year}">
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-description">Description</label>
                <input class="form-control ${validateObject?.validDescr == undefined ? "" : addClass(validateObject.validDescr)}" id="new-description" type="text" name="description" value="${object.description}">
            </div>
        </div>
        <div class="col-md-4">
            <div class="form-group">
                <label class="form-control-label" for="new-price">Price</label>
                <input class="form-control ${validateObject?.validPrice == undefined ? "" : addClass(validateObject.validPrice)}" id="new-price" type="number" name="price" value="${object.price}">
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-image">Image</label>
                <input class="form-control ${validateObject?.validImg == undefined ? "" : addClass(validateObject.validImg)}" id="new-image" type="text" name="img" value="${object.img}">
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-material">Material (optional)</label>
                <input class="form-control" id="new-material" type="text" name="material" value="${object.material}">
            </div>
            <input type="submit" class="btn btn-info" value="Edit" />
        </div>
    </div>
</form>
    `
}

function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const { make, model, year, description, price, img, material } = Object.fromEntries(formData);


    const validateObject = validateData(make, model, year, description, price, img, material)
    context.renderer(createEditViewTemp(furnitureObject, validateObject));

    if (validateObject.allValid) {

        editFurnitureByID(furnitureID, make, model, year, description, price, img, material);
        console.log('editView');
        context.updateNav();
        context.goTo('/dashboard')
    } else {
        return
    }

}

function addClass(boolean) {
    if (boolean) {
        return "is-valid";
    } else {
        return "is-invalid"
    }
}
