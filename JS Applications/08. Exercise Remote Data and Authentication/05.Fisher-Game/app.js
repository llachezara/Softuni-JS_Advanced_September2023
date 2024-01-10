// const navigation = document.querySelector('nav');
// const spanWIthEmail = navigation.querySelector('p.email span');
// const registerBtn = navigation.querySelector('#register');
// const loginBtn = navigation.querySelector('#login');
// const logoutBtn = navigation.querySelector('#logout');

// if (sessionStorage.getItem('email')) {
//     spanWIthEmail.textContent = sessionStorage.getItem('email');
//     registerBtn.style.display = 'none';
//     loginBtn.style.display = 'none';
//     logoutBtn.style.display = 'inline';

// } else {
//     spanWIthEmail.textContent = 'guest';
//     registerBtn.style.display = 'inline';
//     loginBtn.style.display = 'inline';
//     logoutBtn.style.display = 'none';
// }

// //Catches-related
// const divWithCatches = document.getElementById('catches');
// divWithCatches.innerHTML = '';
// let catchesOfCurrentUser = [];
// let changeCatch = false;
// let idOfCatchToChange = '';

// //Load Button
// const loadBtn = document.querySelector('button.load');
// loadBtn.addEventListener('click', loadAllCatches);

// async function loadAllCatches(e) {
//     divWithCatches.innerHTML = '';
//     const response = await fetch('http://localhost:3030/data/catches');
//     const responseData = await response.json();

//     for (const catchObj of responseData) {
//         const catchID = catchObj._id;
//         divWithCatches.innerHTML +=
//             `<div id="${catchID}" class="catch">
//             <label>Angler</label>
//             <input type="text" class="angler" value="${catchObj.angler}" disabled>
//             <label>Weight</label>
//             <input type="text" class="weight" value="${catchObj.weight}" disabled>
//             <label>Species</label>
//             <input type="text" class="species" value="${catchObj.species}" disabled>
//             <label>Location</label>
//             <input type="text" class="location" value="${catchObj.location}" disabled>
//             <label>Bait</label>
//             <input type="text" class="bait" value="${catchObj.bait}" disabled>
//             <label>Capture Time</label>
//             <input type="number" class="captureTime" value="${catchObj.captureTime}" disabled>
//             <button class="update" data-id="${catchObj._ownerId}" disabled>Update</button>
//             <button class="delete" data-id="${catchObj._ownerId}" disabled>Delete</button>
//         </div>`
//     }

//     catchesOfCurrentUser = getUserCatches();
// }

// //Add button
// const addBtn = document.querySelector('button.add');
// if (sessionStorage.getItem('email')) {
//     addBtn.disabled = false;
// }
// const addForm = document.getElementById('addForm');
// addForm.addEventListener('submit', onSubmit)

// function onSubmit(e) {
//     e.preventDefault();

//     const formData = new FormData(e.currentTarget);
//     const angler = formData.get('angler');
//     const weight = formData.get('weight');
//     const species = formData.get('species');
//     const location = formData.get('location');
//     const bait = formData.get('bait');
//     const captureTime = formData.get('captureTime');
//     clearDataInForm(e.currentTarget);

//     if (changeCatch == true) {
//         updateCatch(angler, weight, species, location, bait, captureTime, idOfCatchToChange);
//         idOfCatchToChange = '';
//     } else {
//         createCatch(angler, weight, species, location, bait, captureTime);
//     }


// }
// function clearDataInForm(formData) {
//     const formInputs = getFormInputs(formData);
//     for (const inputField of formInputs) {
//         inputField.value = '';
//     }
// }

// async function createCatch(angler, weight, species, location, bait, captureTime) {
//     const _ownerId = sessionStorage.getItem('id');
//     //If empty fields??

//     const data = {
//         method: 'post',
//         headers: {
//             'Content-type': 'application/json',
//             'X-Authorization': sessionStorage.getItem('token')
//         },
//         body: JSON.stringify({ angler, weight, species, location, bait, captureTime, _ownerId })
//     }

//     try {
//         const response = await fetch('http://localhost:3030/data/catches', data);
//         const responseData = await response.json();
//         console.log(responseData);

//     } catch (err) {
//         console.log(err);
//     }


// }

// async function updateCatch(angler, weight, species, location, bait, captureTime, id) {
//     const URL_FOR_PUT_REQUEST = `http://localhost:3030/data/catches/${id}`

//     const data = {
//         method: 'put',
//         headers: {
//             'Content-type': 'application/json',
//             'X-Authorization': sessionStorage.getItem('token')
//         },
//         body: JSON.stringify({ angler, weight, species, location, bait, captureTime })
//     }

//     try {
//         const response = await fetch(URL_FOR_PUT_REQUEST, data);
//         const responseData = await response.json();
//         //console.log(responseData);

//     } catch (err) {
//         console.log(err);
//     }
// }

// //Operations with catches
// function getUserCatches() {
//     const updateButtonsOfCurrentUser = Array.from(document.querySelectorAll(`div.catch button.update[data-id="${sessionStorage.getItem('id')}"]`));
//     const userCatches = getCatchesFromButtons(updateButtonsOfCurrentUser);

//     function getCatchesFromButtons(updateButtonsArray) {
//         const catches = [];
//         for (const updateBtn of updateButtonsArray) {
//             const currentCatch = updateBtn.parentNode;

//             updateBtn.disabled = false;
//             updateBtn.addEventListener('click', addCatchToChangeArea);

//             const deleteBtn = currentCatch.querySelector('button.delete');
//             deleteBtn.disabled = false;
//             deleteBtn.addEventListener('click', deleteCatch)

//             catches.push(currentCatch);
//         }
//         return catches;
//     }

//     return userCatches;
// }

// //Update Btn Callback
// function addCatchToChangeArea(e) {

//     const currCatch = e.currentTarget.parentNode;
//     idOfCatchToChange = currCatch.getAttribute('id');
//     changeCatch = true;

//     divWithCatches.removeChild(currCatch);

//     const catchInputFields = Array.from(currCatch.querySelectorAll('input'));
//     const addFormInputs = getFormInputs(addForm);
//     for (let i = 0; i < addFormInputs.length; i++) {
//         const currInputFromCatch = catchInputFields[i];
//         const currInputFromForm = addFormInputs[i];

//         currInputFromForm.value = currInputFromCatch.value;
//     }
// }

// // Delete BTN Callback
// async function deleteCatch(e) {
//     const currCatch = e.currentTarget.parentNode;
//     const URL_FOR_DELETE_REQUEST = `http://localhost:3030/data/catches/${currCatch.getAttribute('id')}`;
//     const data = {
//         method: 'delete',
//         headers: {
//             'X-Authorization': sessionStorage.getItem('token')
//         },
//     }
//     fetch(URL_FOR_DELETE_REQUEST, data)
//     console.log('Success');
// }
// function getFormInputs(form) {
//     const inputFields = Array.from(form.querySelectorAll('input'));
//     return inputFields;
// }

// //Login
// const URI_LOGIN = 'http://localhost:3030/users/login';
// const loginForm = document.querySelector('form#login');

// loginForm.addEventListener('submit', login)


// async function login(e) {
//     e.preventDefault()
//     const formData = new FormData(e.target);
//     const email = formData.get('email');
//     const password = formData.get('password');

//     const data = {
//         method: "post",
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, password })
//     }


//     try {
//         const response = await fetch(URI_LOGIN, data);
//         if (response.status != 200) {

//             throw new Error('You are not registered!')

//         }
//         const responseData = await response.json();

//         sessionStorage.setItem('token', responseData.accessToken)
//         sessionStorage.setItem('email', responseData.email)
//         sessionStorage.setItem('id', responseData._id)
//         window.location.href = './index.html'

//     } catch (error) {
//        throw new Error(error)
//     }

// }

// //Logout
// const logoutEl = document.querySelector('a#logout');
// logoutEl.addEventListener('click', logout);
// const URI_LOGOUT = 'http://localhost:3030/users/logout';

// async function logout() {
//     const data = {
//         method: 'GET',
//         headers: {
//             'X-Authorization': sessionStorage.getItem('token')
//         }
//     }
//     const response = await fetch(URI_LOGOUT, data);
//     sessionStorage.clear();
//     window.location.href = './index.html';
// }

// //Register
// const registerForm = document.querySelector
//     ('form#register');
// const URI_REGISTER = 'http://localhost:3030/users/register';
// //postRequest(email, password, rePass);

// registerForm.addEventListener('submit', postRequest);

// async function postRequest(event) {
//     event.preventDefault();
//     const formData = new FormData(registerForm);
//     const email = formData.get('email');
//     const password = formData.get('password');
//     const rePass = formData.get('rePass');

//     try {
//         if (!email || !password || !rePass || password != rePass) {
//             throw new Error('Invalid registration. Try to register again!');

//         }
//         const data = {
//             method: 'post',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ email, password })
//         };
        
//         const response = await fetch(URI_REGISTER, data)
       
//         if (response.status != 200) {
//             throw new Error('You are already registered. Try logging in.')
//         }
//         const responseData = await response.json();

//         sessionStorage.setItem('token', responseData.accessToken)
//         sessionStorage.setItem('email', responseData.email)
//         sessionStorage.setItem('id', responseData._id)

//         window.location.href = './index.html';

//     } catch (error) {
//         throw new Error(error)
//     }

// }