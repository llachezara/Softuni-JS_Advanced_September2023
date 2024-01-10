function attachEvents() {
    const ulPhonebook = document.getElementById('phonebook');
    const btnLoad = document.getElementById('btnLoad');
    const btnCreate = document.getElementById('btnCreate');

    const personNameEl = document.getElementById('person');
    const phoneEl = document.getElementById('phone');

    btnLoad.addEventListener('click', showInfoInUl)

    async function showInfoInUl() {
        const response = await fetch('http://localhost:3030/jsonstore/phonebook');
        const objectData = await response.json();

        clearUl();
        appendNewLiItems(objectData);
    }


    btnCreate.addEventListener('click', createNewContact)

    async function createNewContact() {

        const response = await fetch('http://localhost:3030/jsonstore/phonebook', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ person: personNameEl.value, phone: phoneEl.value })
        });

        clearInputFields()
        showInfoInUl();
    }

    function appendNewLiItems(object) {

        for (const { person, phone, _id } of Object.values(object)) {
            const newLi = document.createElement('li');
            newLi.textContent = `${person}: ${phone}`;
            newLi.setAttribute('id', _id);

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', deletePersonFromPhonebook)
            newLi.appendChild(deleteBtn);
            console.log(newLi.textContent);
            ulPhonebook.appendChild(newLi);
        }
    }

    function clearUl() {
        ulPhonebook.textContent = '';
    }

    function clearInputFields() {
        personNameEl.value = '';
        phoneEl.value = '';
    }

    async function deletePersonFromPhonebook(e) {
        const li = e.target.parentElement;
        const id = li.getAttribute('id');
        //const [personFromLi, phoneFromLi] = li.textContent.split(': ');

        fetch(`http://localhost:3030/jsonstore/phonebook/${id}`, {
            method: 'delete'
        })

    }
}
attachEvents();