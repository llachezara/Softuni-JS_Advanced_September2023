import { html, render } from './node_modules/lit-html/lit-html.js';

const bodyEl = document.querySelector('body');
const sectionPosts = document.getElementById('posts');
const btnLoadPosts = document.getElementById('btnLoadPosts');
btnLoadPosts.addEventListener('click', onClick);
const btnView = document.getElementById('btnViewPost');
const sectionPostInfo = document.getElementById('post-info');

async function onClick(e) {
    await getPosts(e);
    showArticle()
    btnView.addEventListener('click', showArticle)
}

async function getPosts(e) {
    const response = await fetch('http://localhost:3030/jsonstore/blog/posts');
    const responseData = await response.json();
    let posts;
    if (Array.isArray(responseData)) {
        posts = responseData;
    } else {
        posts = Object.values(responseData);
    }

    console.log('Posts: ', posts);
    render(createOptions(posts), sectionPosts);
    function createOptions(array) {
        return array.map((object) => html`
        <option value="${object.id}">${object.title}</option>
        `)
    }
}

// function createViewButton() {
//     const button = html`<button @click=${showArticle} id="btnViewPost">View</button>`
//     render(button, bodyEl);
// }

async function showArticle(e) {
    const articleId = document.querySelector('select').value;
    const response = await fetch(`http://localhost:3030/jsonstore/blog/posts/${articleId}`);
    let responseData = await response.json();

    if (Array.isArray(responseData)) {
        responseData = responseData[0];
    }
    console.log('Article: ', responseData);

    const title = responseData.title;
    const body = responseData.body;
    const commentsForPost = await getComments(articleId);

    render(showPostInfo(title, body, commentsForPost), sectionPostInfo);

}


async function getComments(id) {
    const response = await fetch(`http://localhost:3030/jsonstore/blog/comments`);
    const responseData = await response.json();

    const allComments = Object.values(responseData);
    const commentsForCurrArticle = allComments.filter((el) => el.postId == id);

    return commentsForCurrArticle;
}

function showPostInfo(title, body, comments) {

    return html`
     <h1 id="post-title">${title}</h1>
     <p id="post-body">${body}</p>
     <h2>Comments</h2>
    <ul id="post-comments">${comments.map((obj) => createLiCommentTemplate(obj))}</ul>
  `
}

function createLiCommentTemplate(obj) {
    return html`<li id="${obj.id}">${obj.text}</li>`
}