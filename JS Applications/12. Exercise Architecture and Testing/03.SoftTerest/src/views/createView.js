import { createIdea } from "../api/user.js";

const createView = document.getElementById('createView');
const form = document.querySelector('#createView form');
form.addEventListener('submit', onSubmit);

let context = null;

export function showCreate(ctx) {
    context = ctx;
    context.renderer(createView);
}

async function onSubmit(e) {
    e.preventDefault()
    const formData = new FormData(e.target);
    const { title, description, imageURL } = Object.fromEntries(formData.entries());
    const userId = JSON.parse(localStorage.getItem('user'))._id;

    if (title.length >= 6 && description.length >= 10 && imageURL.length >= 5) {
        await createIdea(title, description, imageURL, userId);
        form.reset();
        context.goTo('/dashboard');
    } else {
        return alert('Title must be at least 6 characters long, description must be at least 10 characters long and image url must be at least 5 characters long.')
    }

}
