window.addEventListener('load', solution);

function solution() {
  const employeeNameInputField = document.getElementById('employee');
  const categorySelectEl = document.getElementById('category');
  const urgencySelectEl = document.getElementById('urgency');
  const assignedTeamSelectEl = document.getElementById('team');
  const descriptionInputField = document.getElementById('description');

  const ulInPreviewSection = document.querySelector('.preview-list');

  const ulInPendingSection = document.querySelector('.pending-list');

  const ulInResolvedSection = document.querySelector('.resolved-list');

  const addButton = document.getElementById('add-btn');
  addButton.addEventListener('click', addInfoToPreviewSection)

  function addInfoToPreviewSection(event) {
    event.preventDefault();//!!!!

    if (
      employeeNameInputField.value !== "" &&
      categorySelectEl.value !== "" &&
      urgencySelectEl.value !== "" &&
      assignedTeamSelectEl.value !== "" &&
      descriptionInputField.value !== ""
    ) {

      const newLi = createLi();
      ulInPreviewSection.appendChild(newLi);
      clearAllInputFields();
      addButton.disabled = true;

    } else {
      return
    }
  }


  function createLi() {
    const li = document.createElement('li');
    li.classList.add('problem-content');

    const article = document.createElement('article');

    const pWithEmployeeName = document.createElement('p');
    pWithEmployeeName.textContent = `From: ${employeeNameInputField.value}`;

    const pWithCategory = document.createElement('p');
    pWithCategory.textContent = `Category: ${categorySelectEl.value}`;

    const pWithUrgency = document.createElement('p');
    pWithUrgency.textContent = `Urgency: ${urgencySelectEl.value}`;

    const pWithAssignedTeam = document.createElement('p');
    pWithAssignedTeam.textContent = `Assigned to: ${assignedTeamSelectEl.value}`;

    const pWithDescription = document.createElement('p');
    pWithDescription.textContent = `Description: ${descriptionInputField.value}`;//Space after value??

    article.appendChild(pWithEmployeeName);
    article.appendChild(pWithCategory);
    article.appendChild(pWithUrgency);
    article.appendChild(pWithAssignedTeam);
    article.appendChild(pWithDescription);

    //Create Buttons for li
    const editBtn = document.createElement('button');
    editBtn.classList.add('edit-btn');
    editBtn.textContent = "Edit";
    editBtn.addEventListener('click', editInformation);

    const continueBtn = document.createElement('button');
    continueBtn.classList.add('continue-btn');
    continueBtn.textContent = "Continue";
    continueBtn.addEventListener('click', moveInfoIntoPendingSection)

    //Append all elements to Li
    li.appendChild(article);
    li.appendChild(editBtn);
    li.appendChild(continueBtn);

    return li;
  }

  function editInformation(event) {
    const currEditBtn = event.target;
    const currLiEl = currEditBtn.parentElement;

    const [articleIncurrLi, editBtn, continueBtn] = Array.from(currLiEl.children);

    currLiEl.removeChild(editBtn);
    currLiEl.removeChild(continueBtn);

    const [pWithEmployeeName, pWithCategory, pWithUrgency, pWithAssignedTeam, pWithDescription] = Array.from(articleIncurrLi.children);

    employeeNameInputField.value = pWithEmployeeName.textContent.replace('From: ', "");

    categorySelectEl.value = pWithCategory.textContent.replace('Category: ', "");

    urgencySelectEl.value = pWithUrgency.textContent.replace('Urgency: ', "");

    assignedTeamSelectEl.value = pWithAssignedTeam.textContent.replace('Assigned to: ', "");

    descriptionInputField.value = pWithDescription.textContent.replace('Description: ', "");

    ulInPreviewSection.removeChild(currLiEl);

    addButton.disabled = false;
  }

  function moveInfoIntoPendingSection(event) {

    const currContinueBtn = event.target;
    const currLiEl = currContinueBtn.parentElement;

    const [articleInCurrLi, editBtn, continueBtn] = Array.from(currLiEl.children);

    currLiEl.removeChild(editBtn);
    currLiEl.removeChild(continueBtn);

    //Create Resolved Button and append it to currLi
    const newResolvedBtn = document.createElement('button');
    newResolvedBtn.classList.add('resolve-btn');
    newResolvedBtn.textContent = "Resolved";
    newResolvedBtn.addEventListener('click', moveInfoIntoResolvedSection);

    currLiEl.appendChild(newResolvedBtn);

    ulInPendingSection.appendChild(currLiEl);

  }

  function moveInfoIntoResolvedSection(event) {
    const currResolveBtn = event.target;
    const currLiEl = currResolveBtn.parentElement;

    const [articleInCurrLi, resolveBtn] = Array.from(currLiEl.children);

    currLiEl.removeChild(resolveBtn);

    //Create Resolved Button and append it to currLi
    const newClearBtn = document.createElement('button');
    newClearBtn.classList.add('clear-btn');
    newClearBtn.textContent = "Clear";
    newClearBtn.addEventListener('click', removeLiFromResolvedSection);

    currLiEl.appendChild(newClearBtn);

    ulInResolvedSection.appendChild(currLiEl);
  }

  function removeLiFromResolvedSection(event) {
    const currClearBtn = event.target;
    const currLiEl = currClearBtn.parentElement;

    ulInResolvedSection.removeChild(currLiEl);
  }
  function clearAllInputFields() {
    employeeNameInputField.value = "";
    categorySelectEl.value = "";
    urgencySelectEl.value = "";
    assignedTeamSelectEl.value = "";
    descriptionInputField.value = "";
  }
}




