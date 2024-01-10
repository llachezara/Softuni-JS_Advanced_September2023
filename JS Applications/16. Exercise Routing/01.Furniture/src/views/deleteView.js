import { deleteFurniture } from "../api/data.js";

let context;
export function deleteView(ctx) {
    const furnitureID = ctx.params.id;
    context = ctx;
    if (window.confirm("Are you sure you want to delete it?")) {
        deleteFurniture(furnitureID);
        console.log('deleteView');
        context.updateNav();
        context.goTo('/dashboard')
    } else {
        return
    }

}