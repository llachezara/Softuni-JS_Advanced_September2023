import { html, render } from './node_modules/lit-html/lit-html.js';
import { towns } from './towns.js';

const root = document.getElementById('towns');
const inputField = document.getElementById('searchText');
const divResult = document.getElementById('result');
generateTemp(towns);

function generateTemp(towns, matches) {
   const temp = html`
   <ul>
     ${towns.map(town => createTemp(town, matches))}
   </ul>
   `
   render(temp, root);
}

function createTemp(town, matches){
   return html`<li class=${matches?.includes(town) ? "active" : ""}>${town}</li>`
}

const searchBtn = document.querySelector('button');
searchBtn.addEventListener('click', search);

function search() {
   const text = inputField.value;
   const matches = towns.filter(x => x.includes(text));
   divResult.textContent = `${matches.length} matches found`;
   generateTemp(towns, matches)
}

// const ul = html`<ul>${towns.map(town => createLi(town))}</ul>`;
// render(ul, root);

// function createLi(townName) {
//    return html`<li>${townName}</li>`;
// }

// const searchBtn = document.querySelector('button');
// searchBtn.addEventListener('click', search);

// function search(e) {
//    const text = inputField.value;
//    const liItems = Array.from(document.querySelectorAll('ul li'));
//    liItems.forEach(li => li.classList.remove('active'))

//    let matches = 0;
//    for (const li of liItems) {
      
//       if (li.textContent.includes(text)) {
//          li.classList.add('active');
//          matches++;
//       }
//    }

//    divResult.textContent = `${matches} matches found`
// }
