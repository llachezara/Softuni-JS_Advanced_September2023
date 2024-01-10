import { html, render } from './node_modules/lit-html/lit-html.js'
const divMain = document.querySelector('#main');
const response = await (await fetch('http://localhost:3030/jsonstore/advanced/profiles')).json();

const profiles = Object.values(response);
render(createProfilesTemplate(profiles), divMain);

function createProfilesTemplate(array) {
    return html`
      ${array.map(element => createProfile(element))}
    `
}

function createProfile(object, hide) {
    return html`
    <div class="profile">
				<img src="./iconProfile2.png" class="userIcon" />
				<label>Lock</label>
				<input type="radio" name="user1Locked" value="lock" checked>
				<label>Unlock</label>
				<input type="radio" name="user1Locked" value="unlock"><br>
				<hr>
				<label>Username</label>
				<input type="text" name="user1Username" value="${object.username}" disabled readonly />
				<div style="${hide || hide == undefined ? "display:none" : "display:inline"}" class="user1Username ">
					<hr>
					<label>Email:</label>
					<input type="email" name="user1Email" value="${object.email}" disabled readonly />
					<label>Age:</label>
					<input type="email" name="user1Age" value="${object.age}" disabled readonly />
				</div>
				
				<button @click=${showMore} >${hide || hide == undefined ? "Show more" : "Hide it"}</button>
			</div>
    `
}


function showMore(e) {
    const btn = e.target;
    const divProfile = e.target.parentElement;
    const inputRadioLock = divProfile.querySelector('input[value="lock"]');

    if (btn.textContent == 'Show more') {
        inputRadioLock.checked ? lockProfile(divProfile) : unlockProfile(divProfile);
    }else if (btn.textContent == 'Hide it') {
        inputRadioLock.checked ? unlockProfile(divProfile) : lockProfile(divProfile);
    }

}

function lockProfile(div) {
    const divDetails = div.querySelector('div');
    divDetails.style.display = 'none';

    const btn = div.querySelector('button');
    btn.textContent = "Show more";
}

function unlockProfile(div) {
    const divDetails = div.querySelector('div');
    divDetails.style.display = 'block';

    const btn = div.querySelector('button');
    btn.textContent = "Hide it";
}