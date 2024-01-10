import { showDetails } from './detailsView.js';
const main = document.querySelector('main');
const homeSection = document.getElementById('home-view');
const divWithTopics = homeSection.querySelector('div.topic-container');
const URL_FOR_POSTS = 'http://localhost:3030/jsonstore/collections/myboard/posts/';

export function showHome() {
    main.replaceChildren(homeSection);
}
export async function showPosts() {
    try {
        const response = await fetch(URL_FOR_POSTS)
        const responseData = await response.json();

        const arrayOfDataKeys = Object.keys(responseData)
        divWithTopics.innerHTML = '';

        if (arrayOfDataKeys.length !== 0) {
            for (const key of arrayOfDataKeys) {
                const post = responseData[key];

                divWithTopics.innerHTML += `<div id="${post._id}" class="topic-name-wrapper">
                <div class="topic-name">
                   <a href="#" class="normal">
                     <h2>${post.title}</h2>
                   </a>
                   <div class="columns">
                      <div>
                        <p>Date: <time>${post.date}</time></p>
                        <div class="nick-name">
                           <p>Username: <span>${post.username}</span></p>
                        </div>
                      </div>
                   </div>
                </div>
          </div>`
            }
            addEventOnTopicTitles(divWithTopics);
        }
    } catch (err) {
        console.log(err);
    }


}

export async function createNewTopic(e) {
    e.preventDefault();

    const formEl = e.target.parentElement.parentElement;
    const formData = new FormData(formEl);
    const topicName = formData.get('topicName');
    const username = formData.get('username');
    const postText = formData.get('postText');

    if (!topicName || !username || !postText) {
        window.alert('No content in form!');
    } else {
        const dateOfCreation = getDate();
        await postTopic(topicName, username, postText, dateOfCreation);
        await showPosts();
        formEl.reset();
    }

}

async function postTopic(topicName, username, postText, dateOfCreation) {

    const response = await fetch(URL_FOR_POSTS, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: topicName, username, content: postText, date: dateOfCreation })
    })

};

function addEventOnTopicTitles(elementContainingAncherTags) {
    const titles = Array.from(elementContainingAncherTags.querySelectorAll('a'));
    for (const title of titles) {
        title.addEventListener('click', showDetails)
    }
}

export function clearForm(e) {
    e.preventDefault();
    const form = e.target.parentElement.parentElement;
    form.reset();
}

function getDate() {
    return new Date();
}