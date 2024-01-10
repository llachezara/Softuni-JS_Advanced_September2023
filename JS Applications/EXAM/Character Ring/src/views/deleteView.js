import { deleteItem } from "../api/data.js";


let context;
export async function showDeleteView(ctx) {
    context = ctx;
    const itemId = context.params.id;
    if (confirm('Are you sure?')) {
        await deleteItem(itemId);
        context.goTo(`/dashboard`);
    }

    context.updateNav();

}