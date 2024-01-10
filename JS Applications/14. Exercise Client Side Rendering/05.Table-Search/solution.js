import { html, render } from './node_modules/lit-html/lit-html.js';
const root = document.querySelector('tbody');
const searchBtn = document.querySelector('#searchBtn');
const inputField = document.querySelector('#searchField');

getTableRows();
async function getTableRows(matches) {
   const response = await fetch('http://localhost:3030/jsonstore/advanced/table');
   const responseData = await response.json();

   const tableRows = Object.values(responseData);
   if(!matches) updateTableRows(tableRows);

   return tableRows;
}

function updateTableRows(tableRows, matches) {
   matches ? generateTableRows(tableRows, matches) : generateTableRows(tableRows);
}

function generateTableRows(tableRows, matches) {
   const rows = [];
   tableRows.forEach(element => {
      const row = html`
            <tr class=${matches?.includes(element) ? "select" : ""}>
                <td>${element.firstName} ${element.lastName}</td>
                <td>${element.email}</td>
                <td>${element.course}</td>
            </tr>
      `
      rows.push(row);
   });

   render(rows, root);
}

searchBtn.addEventListener('click', search);

async function search() {
   const text = inputField.value.toLowerCase();
   const rows = await getTableRows();
   updateTableRows(rows)

   const rowMatches = rows.filter(row => {
      const tdsText = Object.values(row);
      const matches = tdsText.filter(tdText => tdText.toLowerCase().includes(text));
      return matches.length > 0
   })

   if (rowMatches.length > 0) {
      updateTableRows(rows, rowMatches);
   }

   inputField.value = '';
}