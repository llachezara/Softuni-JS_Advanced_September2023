import { html, render } from './node_modules/lit-html/lit-html.js';
import { cats } from './catSeeder.js';
const sectionWithCards = document.getElementById('allCats');

render(createUl(), sectionWithCards)

function createUl() {
    return html`<ul>
  ${cats.map(cat => createCard(cat))}
    </ul>`
}


function createCard(cat) {
    const id = cat.id;
    const statusCode = cat.statusCode;
    const message = cat.statusMessage;
    const imageLocation = cat.imageLocation;

    return html
        ` <li>
        <img src="./images/${imageLocation}.jpg" width="250" height="250" alt="Card image cap">
        <div class="info">
           <button @click=${handleClick} class="showBtn">Show status code</button>

           <div class="status" style="display: none" id="${id}">
              <h4>Status Code: ${statusCode}</h4>
              <p>${message}</p>
           </div>
        </div>
</li>`
}

function handleClick(e) {
    const currBtn = e.target;
    currBtn.textContent == 'Show status code' ? currBtn.textContent = 'Hide status code' : currBtn.textContent = 'Show status code';
    const divInfo = currBtn.parentElement;
    const divStatus = divInfo.querySelector('.status');
    divStatus.style.display =='block' ? divStatus.style.display = 'none' : divStatus.style.display = 'block';
}

//"test": "echo \"Error: no test specified\" && exit 1" in package.json
