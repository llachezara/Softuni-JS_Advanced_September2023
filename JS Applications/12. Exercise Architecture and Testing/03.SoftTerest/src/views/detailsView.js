import { deleteIdea, getIdeaDetails } from "../api/data.js";
import { ctx } from "../app.js";
//const detailsView = document.querySelector('#idea-details');

export async function showDetails(e) {
    e.preventDefault();
    const currentIdea = e.target.parentElement;

    const ideaID = currentIdea.getAttribute('id');
    const data = await getIdeaDetails(ideaID);
    const ideaWithDetails = createIdeaWithDetails(data);
    ctx.renderer(ideaWithDetails);

}

function createIdeaWithDetails(ideaObject) {

    const divWithDetails = document.createElement('div');
    divWithDetails.setAttribute('id', ideaObject._id);
    divWithDetails.setAttribute('data-id', "idea-Details");
    divWithDetails.classList.add('container', 'home', 'some');
    divWithDetails.innerHTML =
        `
    <img class="det-img" src="${ideaObject.img}" />
        <div class="desc">
            <h2 class="display-5">${ideaObject.title}</h2>
            <p class="infoType">Description:</p>
            <p class="idea-description">${ideaObject.description}</p>
        </div>
    `;


    const div = document.createElement('div');
    div.classList.add('text-center');

    const a = document.createElement('a');
    a.classList.add('btn', 'debt');
    a.textContent = 'Delete';
    a.addEventListener('click', onDelete);

    if (localStorage.getItem('user')) {

        if (ideaObject._ownerId == JSON.parse(localStorage.getItem('user'))._id) {
            div.appendChild(a);
        }
    }


    divWithDetails.appendChild(div);

    return divWithDetails;

}

async function onDelete(e) {
    e.preventDefault();
    const currentIdea = e.target.parentElement.parentElement;
    const ideaId = currentIdea.getAttribute('id');

    await deleteIdea(ideaId);
    ctx.goTo('/dashboard');
}