import { html, render } from './node_modules/lit-html/lit-html.js'
const form = document.querySelector('form');
const root = document.getElementById('menu');
getOptions();

async function getOptions() {
    const response = await fetch('http://localhost:3030/jsonstore/advanced/dropdown');
    const responseData = await response.json();

    const options = Object.values(responseData);
    generateTemp(options);
}

function generateTemp(options) {
    const allOptions = [];
    options.forEach(option => {
        console.log(option);
        const temp = html`
          <option value="${option._id}">
          ${option.text}
          </option>
        `;
        allOptions.push(temp);
    })
    render(allOptions, root);
}

form.addEventListener('submit', addItem)

async function addItem(e) {
    e.preventDefault();
    const text = document.getElementById('itemText').value;
    fetch('http://localhost:3030/jsonstore/advanced/dropdown', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text })
    })
    getOptions()
}