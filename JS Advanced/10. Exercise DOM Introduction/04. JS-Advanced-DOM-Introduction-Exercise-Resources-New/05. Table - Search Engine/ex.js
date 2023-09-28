// Search for John Dan - First table row must be selected
document.body.innerHTML = `
 <table class="container">
        <thead>
            <tr>
                <th>Student name</th>
                <th>Student email</th>
                <th>Student course</th>
            </tr>
        </thead>
        <tfoot>
            <tr>
                <td colspan="3">
                    <input type="text" id="searchField" />
                    <button type="button" id="searchBtn">Search</button>
                </td>
            </tr>
        </tfoot>
        <tbody>
            <tr>
                <td>John Dan</td>
                <td>john@john-dan.com</td>
                <td>JS-CORE</td>
            </tr>
            <tr>
                <td>Max Peterson</td>
                <td>max@softuni.bg</td>
                <td>JS-WEB</td>
            </tr>
            <tr>
                <td>Philip Anderson</td>
                <td>philip@softuni.bg</td>
                <td>FRONT-END</td>
            </tr>
            <tr>
                <td>Sam Lima</td>
                <td>sam@gmail.com</td>
                <td>TECH-JS</td>
            </tr>
            <tr>
                <td>Eva Longoria</td>
                <td>eva@gmail.com</td>
                <td>All possible courses</td>
            </tr>
        </tbody>
    </table>
    <div id="result"></div>
`;

result();

let input = document.getElementById('searchField');
let button = document.getElementById('searchBtn');
let rows = document.querySelectorAll('tbody tr');

Array.from(rows).forEach((row) => {
assert.equal(row.className, '', 'Some of the rows has different className');
})

input.value = "John Dan";
button.click();

// assert.equal(rows[0].className, 'select', 'First row has different class name');
// assert.equal(rows[1].className, '', 'Second row has different class name');
// assert.equal(rows[2].className, '', 'Third row has different class name');
// assert.equal(rows[3].className, '', 'Fourth row has different class name');

console.log(rows[0].className, 'select', 'First row has different class name');
console.log(rows[1].className, '', 'Second row has different class name');
console.log(rows[2].className, '', 'Third row has different class name');
console.log(rows[3].className, '', 'Fourth row has different class name');


function solve() {
    document.querySelector('#searchBtn').addEventListener('click', onClick);
 
    function onClick() {
       let inputFieldValue = document.getElementById('searchField');
 
       let searchString = inputFieldValue.value;
       inputFieldValue.value = ' ';
 
       let trs = document.querySelectorAll('tbody tr');
 
 
       for (const row of trs) {
          row.classList.remove('select');
       }
 
       for (const row of trs) {
 
          let [...rowtdS] = row.children;
 
          for (const td of rowtdS) {
 
             if (td.textContent.includes(searchString)) {
                row.classList.add('select');
             }
          }
 
       }
 
    }
 }