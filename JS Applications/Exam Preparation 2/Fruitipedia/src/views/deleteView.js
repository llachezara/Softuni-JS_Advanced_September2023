import { deleteItem } from "../api/data.js";


let context;
export async function showDeleteView(ctx) {
    context = ctx;
    const itemId = context.params.id;
    alert("Are you sure you want to DELETE the card?")
    await deleteItem(itemId);


    context.updateNav();
    context.goTo(`/dashboard`);
}