import { html, render } from './node_modules/lit-html/lit-html.js';
const root = document.getElementById('root');

const form = document.querySelector('.content');

form.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(form);
    const towns = formData.get('towns').split(', ');
    render(createUl(towns), root);
}

const createUl = (towns) =>
    html`<ul>
       ${towns.map((item) => html`<li>${item}</li>`)}
    </ul>`;

