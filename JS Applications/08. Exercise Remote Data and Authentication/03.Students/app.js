const btnSubmit = document.getElementById('submit');
const tableBodyElement = document.querySelector('#results tbody');

btnSubmit.addEventListener('click', saveStudentToDatabase);
extractStudents();


async function saveStudentToDatabase(e) {
    e.preventDefault();

    const formElement = e.target.parentElement;
    const data = new FormData(formElement)
    const dataObject = Object.fromEntries(data.entries());

    if (dataObject.firstName != '' && dataObject.lastName != '' && dataObject.facultyNumber != '' && dataObject.grade != '') {

        const response = await fetch('http://localhost:3030/jsonstore/collections/students', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dataObject)

        })
    }
    //const responseData = await response.json();
    clearForm(formElement);
    //extractStudents();
}

async function extractStudents(e) {
    // e.preventDefault();
    tableBodyElement.textContent = '';
    const response = await fetch('http://localhost:3030/jsonstore/collections/students')
    const data = await response.json();

    for (const studentObject of Object.values(data)) {
        const firstName = studentObject.firstName;
        const lastName = studentObject.lastName;
        const facultyNumber = studentObject.facultyNumber;
        const grade = studentObject.grade;

        const tdItemWithFirstName = document.createElement('td');
        tdItemWithFirstName.textContent = firstName;

        const tdItemWithLastName = document.createElement('td');
        tdItemWithLastName.textContent = lastName;

        const tdItemWithFacultyNumberName = document.createElement('td');
        tdItemWithFacultyNumberName.textContent = facultyNumber;

        const tdItemWithGradeName = document.createElement('td');
        tdItemWithGradeName.textContent = grade;

        const trItem = document.createElement('tr');
        trItem.appendChild(tdItemWithFirstName);
        trItem.appendChild(tdItemWithLastName);
        trItem.appendChild(tdItemWithFacultyNumberName);
        trItem.appendChild(tdItemWithGradeName);

        tableBodyElement.appendChild(trItem);

    }
}
function clearForm(form) {
    const inputFieldsArray = Array.from(form.querySelectorAll('.inputs input'))

    for (const inputField of inputFieldsArray) {
        inputField.value = '';
    }
}