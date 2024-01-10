import { getAllIdeas } from "../api/data.js";
import { showDetails } from "./detailsView.js";

const dashboardView = document.getElementById('dashboard-holder');

let context = null;
export async function showDashboard(ctx) {
    context = ctx;
    context.renderer(dashboardView);

    dashboardView.innerHTML = '';
    const ideas = await getIdeas();
    
    if (ideas.length != 0) {
        addIdeasToDashboard(ideas) 
    }else{
        dashboardView.innerHTML = '<h1>No ideas yet! Be the first one :)</h1>';
    }
     
}

async function getIdeas() {
    const data = await getAllIdeas(); // data is an Array
    return data;
}

function addIdeasToDashboard(arrayOfIdeas) {
    console.log(arrayOfIdeas);
    for (const idea of arrayOfIdeas) {
        const id = idea._id;
        const title = idea.title;
        const img = idea.img;

        dashboardView.innerHTML +=
            ` <div id="${id}" class="card overflow-hidden current-card details" style="width: 20rem; height: 18rem;">
               <div class="card-body">
                  <p class="card-text">${title}</p>
               </div>
               <img class="card-image" src="${img}" alt="Card image cap">
          </div>`;

    }

    addEventsOnIdeaLinks(dashboardView);
    // <a class="btn" href="">Details</a>
}

function addEventsOnIdeaLinks(elementWithLinks) {
    for (const ideaDiv of elementWithLinks.querySelectorAll('div.details')) {
        const a = document.createElement('a');
        a.classList.add('btn');
        a.textContent = 'Details';
        a.addEventListener('click', showDetails);
        ideaDiv.appendChild(a);
    }
}
