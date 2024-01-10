import { html, render } from './node_modules/lit-html/lit-html.js'
const BASE_URL = 'http://localhost:3030/jsonstore/collections/books/';

const bodyEl = document.querySelector('body');
render(loadInitialElements(), bodyEl)

const tableEl = document.querySelector('table');
getAllBooks()
//render(loadInitialElements(true), bodyEl)

function loadInitialElements(loadEditForm, bookId) {
    return html`
    <button @click=${getAllBooks} id="loadBooks">LOAD ALL BOOKS</button>
    <table></table>  
    ${loadEditForm ?
            html` <form @submit=${saveBook} data-id="${bookId}" id="edit-form">
        <input type="hidden" name="id">
        <h3>Edit book</h3>
        <label>TITLE</label>
        <input type="text" name="title" placeholder="Title...">
        <label>AUTHOR</label>
        <input type="text" name="author" placeholder="Author...">
        <input type="submit" value="Save">
    </form>`
            :
            html`<form @submit=${addBook}  id="add-form">
        <h3>Add book</h3>
        <label>TITLE</label>
        <input type="text" name="title" placeholder="Title...">
        <label>AUTHOR</label>
        <input type="text" name="author" placeholder="Author...">
        <input type="submit" value="Submit">
    </form>`}
     `
}

async function getAllBooks() {
    const response = await fetch(BASE_URL);
    const data = await response.json();

    const books = Object.entries(data);
    render(createTableContentTemplate(books), tableEl)
}

function createTableContentTemplate(array) {
    return html`
        <thead>
            <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            ${array.map(([bookId, book]) => {
        return html`
                <tr>
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>
                    <button @click = ${editBook} id="${bookId}">Edit</button>
                    <button @click = ${deleteBook} id="${bookId}">Delete</button>
                </td>
            </tr>
                `
    })}
             
        </tbody>
    `
}

async function addBook(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { title, author } = Object.fromEntries(formData.entries());

    if (title && author) {
        const response = await fetch(BASE_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title, author })
        })
    }
    form.reset();
    alert('Added book to collection!');
}

async function editBook(e) {
    e.preventDefault();
    const currentEditBtn = e.target;
    const bookId = currentEditBtn.getAttribute('id');
    render(loadInitialElements(true, bookId), bodyEl);
    const book = await getBookById(bookId);

    const editForm = document.getElementById('edit-form');
    const inputWithTitle = editForm.querySelector('input[name="title"]');
    inputWithTitle.value = book.title;

    const inputWithAuthor = editForm.querySelector('input[name="author"]');
    inputWithAuthor.value = book.author;

}

async function getBookById(bookId) {
    const response = await fetch(BASE_URL + bookId);
    const data = await response.json();

    return data;
}

async function saveBook(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { title, author } = Object.fromEntries(formData.entries());
    const bookId = form.dataset.id;

    if (title && author) {
        const response = await fetch(BASE_URL + bookId, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title, author })
        })
    }

    form.reset();
    alert('Saved book!');
}

async function deleteBook(e) {
    e.preventDefault();
    const currentDeleteBtn = e.target;
    const bookId = currentDeleteBtn.getAttribute('id');

    const response = await fetch(BASE_URL + bookId, {
        method: "DELETE",
    })
    alert('Deleted!');
}