const navigation = document.querySelector('nav');
const spanWIthEmail = navigation.querySelector('p.email span');
const registerBtn = navigation.querySelector('#register');
const loginBtn = navigation.querySelector('#login');
const logoutBtn = navigation.querySelector('#logout');

if (sessionStorage.getItem('email')) {
    spanWIthEmail.textContent = sessionStorage.getItem('email');
    registerBtn.style.display = 'none';
    loginBtn.style.display = 'none';
    logoutBtn.style.display = 'inline';

} else {
    spanWIthEmail.textContent = 'guest';
    registerBtn.style.display = 'inline';
    loginBtn.style.display = 'inline';
    logoutBtn.style.display = 'none';
}

//Catches-related
const divWithCatches = document.getElementById('catches');

// const divWithCatchesButtons = Array.from(divWithCatches.querySelectorAll('button'));
// divWithCatchesButtons.forEach(btn => btn.disabled = true)
// divWithCatches.innerHTML = '';

//Load Button
const loadBtn = document.querySelector('button.load');
loadBtn.addEventListener('click', loadAllCatches);


async function loadAllCatches(e) {
    divWithCatches.innerHTML = '';

    const response = await fetch('http://localhost:3030/data/catches');
    console.log(response);
    let responseData = await response.json();
    if (!Array.isArray(responseData)) {
        responseData = [responseData];
    }
    console.log(responseData);
    console.log(1);
    generateAllCatches(responseData);

}

function generateAllCatches(arrayOfCatchesObjects) {
    console.log(2);
    for (const catchObj of arrayOfCatchesObjects) {
        const catchID = catchObj._id;
        const div = document.createElement('div');
        div.classList.add('catch');
        div.setAttribute('id', catchID)
        div.innerHTML =
            `
            <label>Angler</label>
            <input type="text" class="angler" value="${catchObj.angler}" disabled>
            <label>Weight</label>
            <input type="text" class="weight" value="${catchObj.weight}" disabled>
            <label>Species</label>
            <input type="text" class="species" value="${catchObj.species}" disabled>
            <label>Location</label>
            <input type="text" class="location" value="${catchObj.location}" disabled>
            <label>Bait</label>
            <input type="text" class="bait" value="${catchObj.bait}" disabled>
            <label>Capture Time</label>
            <input type="number" class="captureTime" value="${catchObj.captureTime}" disabled>
            <button class="update" data-id="${catchObj._ownerId}" disabled>Update</button>
            <button class="delete" data-id="${catchObj._ownerId}" disabled>Delete</button>
        `

        if (catchObj._ownerId == sessionStorage.getItem('id')) {
            const catchInputFields = Array.from(div.querySelectorAll('input'));
            catchInputFields.forEach(inputField => inputField.disabled = false);

            const buttons = Array.from(div.querySelectorAll('button'));
            buttons.forEach(btn => {
                btn.disabled = false;
                if (btn.classList.contains('update')) {
                    btn.addEventListener('click', onUpdate)
                } else if (btn.classList.contains('delete')) {
                    btn.addEventListener('click', deleteCatch)
                }
            })
        }
        divWithCatches.appendChild(div);

    }

}
//Add button
const addBtn = document.querySelector('button.add');
addBtn.disabled = true;
const addForm = document.getElementById('addForm');
const addFormInputs = addForm.querySelectorAll('input');
addFormInputs.forEach(input => input.disabled = true);
addForm.addEventListener('submit', onSubmit)

if (sessionStorage.getItem('email')) {
    addBtn.disabled = false;
    addFormInputs.forEach(input => input.disabled = false);
}



function onSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const angler = formData.get('angler');
    const weight = formData.get('weight');
    const species = formData.get('species');
    const location = formData.get('location');
    const bait = formData.get('bait');
    const captureTime = formData.get('captureTime');

    if (!angler || !weight || !species || !location || !bait || !captureTime) {
        throw new Error('Missing fields');
    }
    e.currentTarget.reset();

    createCatch(angler, weight, species, location, bait, captureTime);

   // loadAllCatches()
}

async function createCatch(angler, weight, species, location, bait, captureTime) {
    const _ownerId = sessionStorage.getItem('id');

    const data = {
        method: 'post',
        headers: {
            'Content-type': 'application/json',
            'X-Authorization': sessionStorage.getItem('token')
        },
        body: JSON.stringify({ angler, weight, species, location, bait, captureTime, _ownerId })
    }

    try {
        const response = await fetch('http://localhost:3030/data/catches', data);

        if (response.status !== 200) {
            throw new Error("Cannot create catch")
        }

        const responseData = await response.json();
    } catch (err) {
        window.alert(err)
    }


}


//Operations with catches

//Update Btn Callback
async function onUpdate(e) {
    const currCatch = e.currentTarget.parentNode;

    const URL_FOR_PUT_REQUEST = `http://localhost:3030/data/catches/${currCatch.getAttribute('id')}`
    const catchInputFields = Array.from(currCatch.querySelectorAll('input'));
    const angler = catchInputFields[0].value;
    const weight = Number(catchInputFields[1].value);
    const species = catchInputFields[2].value;
    const location = catchInputFields[3].value;
    const bait = catchInputFields[4].value;
    const captureTime = Number(catchInputFields[5].value);

    if (!angler || !weight || !species || !location || !bait || !captureTime) {
        throw new Error('Missing fields');
    }
    const data = {
        method: 'put',
        headers: {
            'Content-type': 'application/json',
            'X-Authorization': sessionStorage.getItem('token')
        },
        body: JSON.stringify({ angler, weight, species, location, bait, captureTime })
    }

    try {
        const response = await fetch(URL_FOR_PUT_REQUEST, data);
        if (response.status !== 200) {
            throw new Error("Cannot update catch")
        }
        const responseData = await response.json();

    } catch (err) {
        window.alert(err)
    }
}

// Delete BTN Callback
async function deleteCatch(e) {
    const currCatch = e.currentTarget.parentNode;
    const URL_FOR_DELETE_REQUEST = `http://localhost:3030/data/catches/${currCatch.getAttribute('id')}`;
    const data = {
        method: 'delete',
        headers: {
            'X-Authorization': sessionStorage.getItem('token')
        },
    }
    try {
        const response = await fetch(URL_FOR_DELETE_REQUEST, data);
        if (response.status !== 200) {
            throw new Error('Cannot delete catch')
        }
    } catch (err) {
        window.alert(err)
    }

    //loadAllCatches()
}
function getFormInputs(form) {
    const inputFields = Array.from(form.querySelectorAll('input'));
    return inputFields;
}


