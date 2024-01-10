import { html, render } from './node_modules/lit-html/lit-html.js'
const root = document.querySelector('#main');

const response = await fetch('http://localhost:3030/jsonstore/advanced/articles/list');
const responseData = await response.json();
render(createArticlesTemplate(responseData), root);

function createArticlesTemplate(array, id, content) {

    return array.map((object) => html`
    <div class="accordion">
            <div class="head">
                <span>${object.title}</span>
                <button @click=${onClick} class="button" id="${object._id}">More</button>
            </div>
           ${id == object._id ?
            html`<div class="extra">
                 <p>${content}</p>
               </div>` : ``}
    </div> 
    ` )

}

async function onClick(e) {
    const btn = e.target;
    const id = btn.getAttribute('id');
    const object = await (await fetch(`http://localhost:3030/jsonstore/advanced/articles/details/${id}`)).json();

    if (btn.textContent == 'More') {
        const template = createArticlesTemplate(responseData, object._id, object.content);
        render(template, root);
        btn.textContent = 'Less';
    } else {
        render(createArticlesTemplate(responseData), root);
        btn.textContent = 'More';
    }
}
