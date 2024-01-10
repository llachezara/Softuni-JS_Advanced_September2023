const main = document.querySelector('main');
const detailsSection = document.getElementById('details-view');
const divWithThemeContent = detailsSection.querySelector('div.theme-content')
detailsSection.remove();
const URL_FOR_POSTS = 'http://localhost:3030/jsonstore/collections/myboard/posts/';
const URL_FOR_COMMENTS = 'http://localhost:3030/jsonstore/collections/myboard/comments/';

let mostOuterDivOfHiddenPost;//has attribute id that is the same postId that a new comment has
let postId;
export async function showDetails(e) {
    showSectionDetails();

    mostOuterDivOfHiddenPost = e.target.parentElement.parentElement.parentElement;
    postId = mostOuterDivOfHiddenPost.getAttribute('id');

    const currentPost = await getPost(postId);
    const title = currentPost.title;
    const username = currentPost.username;
    const content = currentPost.content;
    const date = currentPost.date;

    showDetailedPost(title, username, content, date, postId)

}

async function getPost(postId) {
    const response = await fetch(URL_FOR_POSTS + postId);
    const responseData = await response.json();

    return responseData;
}

function showSectionDetails() {
    main.replaceChildren(detailsSection);
    const formForComments = document.querySelector('div.answer form');
    formForComments.addEventListener('submit', postComment);
};

function showDetailedPost(title, username, content, date, postId) {
    divWithThemeContent.innerHTML = '';
    showTitle(title)
    showContentAndComments(postId, username, content, date)
}

function showTitle(title) {
    divWithThemeContent.innerHTML +=
        ` <div class="theme-title">
            <div class="theme-name-wrapper">
               <div class="theme-name">
                   <h2>${title}</h2>
                </div>
            </div>
        </div>`
}

async function showContentAndComments(postId, username, content, date) {
    const div = document.createElement('div');
    div.classList.add('comment');

    div.innerHTML +=
        `<div class="header">
            <img src="./static/profile.png" alt="avatar">
            <p><span>${username}</span> posted on <time>${date}</time></p>
            <p class="post-content">${content}</p>
        </div>`;


    divWithThemeContent.appendChild(div);
    await getUserComments(postId, div);

}

async function getUserComments(idOfPost, elementToAppendFor) {

    console.log(idOfPost);
    const response = await fetch(URL_FOR_COMMENTS)
    const responseData = await response.json();

    appendComments(idOfPost, responseData, elementToAppendFor);
}

function appendComments(idOfPost, comments, elementToAppendFor = document.querySelector('#details-view div.comment')) {

    for (const comment of Object.keys(comments)) {
        const { text, username, postId, _id } = comments[comment];

        if (postId === idOfPost) {
            elementToAppendFor.innerHTML += `
            <div id="${_id}">
               <div class="topic-name-wrapper">
                 <div class="topic-name">
                     <p><strong>${username}</strong> commented on <time>3/15/2021, 12:39:02 AM</time></p>
                     <div class="post-content">
                        <p>${text}</p>
                     </div>
                 </div>
              </div>
            </div>`

        } else {
            continue;
        }
    }
}



async function postComment(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const username = formData.get('username');
    const text = formData.get('postText');

    if(!username || !text){
        window.alert('Fill in all fields!')
    }else{
       
        const response = await fetch(URL_FOR_COMMENTS,{
            method:'post',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({username, text, postId})
        })
        
        const responseData = await response.json();
        debugger
        appendComments(postId, {responseData}, );
    }
}