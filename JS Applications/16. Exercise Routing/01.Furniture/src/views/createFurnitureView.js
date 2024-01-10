import { createFurniture, validateData } from "../api/data.js";

let context;
export function showCreateFurnitureView(ctx) {
    context = ctx;
    const template = createCreateTemp();
    context.renderer(template);
}

function createCreateTemp(validateObject) {
    return context.html`
    <div class="row space-top">
            <div class="col-md-12">
                <h1>Create New Furniture</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
        <form @submit = ${onSubmitCreateForm}>
            <div class="row space-top">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-make">Make</label>
                        <input class="form-control valid ${validateObject?.validMake == undefined ? "" : addClass(validateObject.validMake)}" id="new-make" type="text" name="make">
                    </div>
                    <div class="form-group has-success">
                        <label class="form-control-label" for="new-model">Model</label>
                        <input class="form-control ${validateObject?.validModel == undefined ? "" : addClass(validateObject.validModel)}" id="new-model" type="text" name="model">
                    </div>
                    <div class="form-group has-danger">
                        <label class="form-control-label" for="new-year">Year</label>
                        <input class="form-control ${validateObject?.validYear == undefined ? "" : addClass(validateObject.validYear)}" id="new-year" type="number" name="year">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-description">Description</label>
                        <input class="form-control ${validateObject?.validDescr == undefined ? "" : addClass(validateObject.validDescr)}" id="new-description" type="text" name="description">
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-price">Price</label>
                        <input class="form-control ${validateObject?.validPrice == undefined ? "" : addClass(validateObject.validPrice)}" id="new-price" type="number" name="price">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-image">Image</label>
                        <input class="form-control ${validateObject?.validImg == undefined ? "" : addClass(validateObject.validImg)}" id="new-image" type="text" name="img">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-material">Material (optional)</label>
                        <input class="form-control" id="new-material" type="text" name="material">
                    </div>
                    <input type="submit" class="btn btn-primary" value="Create" />
                </div>
            </div>
        </form>
    `
}
export function onSubmitCreateForm(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const { make, model, year, description, price, img, material } = Object.fromEntries(formData);

    const validateObject = validateData(make, model, year, description, price, img, material)
    context.renderer(createCreateTemp(validateObject));

    if (validateObject.allValid) {

        createFurniture(make, model, year, description, price, img, material);
        console.log('createView');
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


