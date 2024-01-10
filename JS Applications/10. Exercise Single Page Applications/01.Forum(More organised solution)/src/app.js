import { showHome, createNewTopic, clearForm, showPosts } from './homeView.js';
import './detailsView.js';

showHome();
showPosts();
const postButton = document.querySelector('button.public');
postButton.addEventListener('click', createNewTopic);

const cancelButton = document.querySelector('button.cancel');
cancelButton.addEventListener('click', clearForm);

