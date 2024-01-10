const loadBtn = document.getElementById('loadBooks');
const tableBody = document.querySelector('tbody');
const form = document.querySelector('form');

loadBtn.addEventListener('click', loadBooksFromServer)
form.addEventListener('submit', createBook)

h3FromForm = form.getElementsByTagName('h3')[0];
buttonFromForm = form.getElementsByTagName('button')[0];

let idOfBookToUpdate = '';

async function createBook(e, bookId) {
    e.preventDefault();
    const data = new FormData(e.target);
    const dataObject = Object.fromEntries(data.entries())

    if (data.get('title') != '' && data.get('author') != '') {

        if (h3FromForm.textContent == 'FORM') {
            const response = await fetch('http://localhost:3030/jsonstore/collections/books', {
                method: "post",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(dataObject)
            })


        } else {
            h3FromForm.textContent = 'FORM';
            buttonFromForm.textContent = 'Sumbit';

            const response = await fetch(`http://localhost:3030/jsonstore/collections/books/${idOfBookToUpdate}`, {
                method: "put",
                body: JSON.stringify(dataObject)
            })
            const result = await response.json();
            appendBookToTableBody(idOfBookToUpdate, result);
            idOfBookToUpdate = '';
        }

        clearForm(form);
        loadBooksFromServer();
    }

}

async function loadBooksFromServer() {
    tableBody.textContent = '';
    const response = await fetch('http://localhost:3030/jsonstore/collections/books');
    const result = await response.json();

    for (const [bookId, book] of Object.entries(result)) {
        appendBookToTableBody(bookId, book)
    }
}
function appendBookToTableBody(bookId, bookObject) {

    const tdWithTitle = document.createElement('td');
    tdWithTitle.textContent = bookObject.title;
    const tdWithAuthor = document.createElement('td');
    tdWithAuthor.textContent = bookObject.author;

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', updateBookOnServer);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', deleteBookFromServer);

    const tdWithButtons = document.createElement('td');
    tdWithButtons.appendChild(editBtn);
    tdWithButtons.appendChild(deleteBtn);

    const tr = document.createElement('tr');
    tr.setAttribute('id', bookId)
    tr.appendChild(tdWithTitle);
    tr.appendChild(tdWithAuthor);
    tr.appendChild(tdWithButtons);

    tableBody.appendChild(tr);
}
function clearForm(form) {
    const inputFieldsArray = Array.from(form.querySelectorAll('input'))

    for (const inputField of inputFieldsArray) {
        inputField.value = '';
    }
    //console.log('Cleared!');
}


function updateBookOnServer(e) {
    const currTableRowItem = e.target.parentElement.parentElement;

    const [tdWIthTitle, tdWithAuthor] = Array.from(currTableRowItem.children);

    const [inputWithTitle, inputWithAuthor] = Array.from(form.querySelectorAll('input'));

    inputWithTitle.value = tdWIthTitle.textContent;
    inputWithAuthor.value = tdWithAuthor.textContent;

    h3FromForm.textContent = 'EditFORM';
    buttonFromForm.textContent = 'Save';

    idOfBookToUpdate = currTableRowItem.getAttribute('id');

}
async function deleteBookFromServer(e) {
    const currTableRowItem = e.target.parentElement.parentElement;

    bookId = currTableRowItem.getAttribute('id');

    fetch(`http://localhost:3030/jsonstore/collections/books/${bookId}`, {
        method: 'delete',
    });
    loadBooksFromServer();
}