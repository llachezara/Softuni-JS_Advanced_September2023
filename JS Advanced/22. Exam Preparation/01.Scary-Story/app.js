window.addEventListener("load", solve);

function solve() {
  const divMain = document.getElementById('main');

  const firstNameInputField = document.getElementById("first-name");
  const lastNameInputField = document.getElementById("last-name");
  const ageInputField = document.getElementById("age");
  const storyTitleInputField = document.getElementById("story-title");
  const genreInputField = document.getElementById("genre");
  const storyTextTextarea = document.getElementById("story");

  const previewSectionEl = document.getElementById('preview');
  const ulPreviewEl = document.getElementById('preview-list');
  const publishButton = document.getElementById("form-btn");

  publishButton.addEventListener('click', publishStory);

  function publishStory() {
    if (firstNameInputField.value !== "" && lastNameInputField.value !== "" && ageInputField.value !== "" && storyTitleInputField.value !== "" && storyTextTextarea.value !== "") {

      const liElement = createLiElement();
      ulPreviewEl.appendChild(liElement);

      publishButton.disabled = true;
      clearAllInputFields();

    } else {
      return
    }
  }

  function createLiElement() {
    const li = document.createElement('li');
    li.classList.add('story-info');

    const article = document.createElement('article');

    const h4WithName = document.createElement('h4');
    h4WithName.textContent = `Name: ${firstNameInputField.value} ${lastNameInputField.value}`

    const pWithAge = document.createElement('p');
    pWithAge.textContent = `Age: ${ageInputField.value}`;

    const pWithTitle = document.createElement('p');
    pWithTitle.textContent = `Title: ${storyTitleInputField.value}`;

    const pWithGenre = document.createElement('p');
    pWithGenre.textContent = `Genre: ${genreInputField.value}`;
    const pWithStoryText = document.createElement('p');
    pWithStoryText.textContent = `${storyTextTextarea.value}`;

    //Buttons
    const saveBtn = document.createElement('button');
    saveBtn.classList.add('save-btn');
    saveBtn.textContent = "Save Story";

    const editBtn = document.createElement('button');
    editBtn.classList.add('edit-btn');
    editBtn.textContent = "Edit Story";

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.textContent = "Delete Story";


    saveBtn.addEventListener('click', saveStory);
    editBtn.addEventListener('click', editStory);
    deleteBtn.addEventListener('click', deleteStory);

    //Append Children
    article.appendChild(h4WithName);
    article.appendChild(pWithAge);
    article.appendChild(pWithTitle);
    article.appendChild(pWithGenre);
    article.appendChild(pWithStoryText);

    li.appendChild(article);
    li.appendChild(saveBtn);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    return li;
  }

  function editStory(event) {
    const currEditButton = event.target;
    const currLi = currEditButton.parentNode;

    const articleInCurrLi = currLi.querySelector('article');

    const articleChildren = Array.from(articleInCurrLi.children);

    const headingWithNamesValue = articleChildren[0].textContent.replace('Name: ', '');
    const [firstName, lastName] = headingWithNamesValue.split(' ');

    const pWithAgeValue = articleChildren[1].textContent.replace('Age: ', '');
    const age = pWithAgeValue;

    const pWithTitleValue = articleChildren[2].textContent.replace('Title: ', '');
    const title = pWithTitleValue;

    const pWithGenreValue = articleChildren[3].textContent.replace('Genre: ', '');
    const genre = pWithGenreValue;

    const storyText = articleChildren[4].textContent;

    firstNameInputField.value = firstName;
    lastNameInputField.value = lastName;
    ageInputField.value = age;
    storyTitleInputField.value = title;
    genreInputField.value = genre;
    storyTextTextarea.value = storyText;

    //Take buttons from li
    const buttonsEl = Array.from(currLi.querySelectorAll('button'));
    const [saveBtn, editBtn, deleteBtn] = buttonsEl;

    currLi.removeChild(saveBtn);
    currLi.removeChild(editBtn);
    currLi.removeChild(deleteBtn);

    ulPreviewEl.removeChild(currLi);
    publishButton.disabled = false;
  }

  function saveStory() {
    divMain.innerHTML = '';
    const h1Element = document.createElement('h1');
    h1Element.textContent = "Your scary story is saved!";

    divMain.appendChild(h1Element);
  }

  function deleteStory(event) {
    const currDeleteBtn = event.target;
    const currLi = currDeleteBtn.parentNode;

    ulPreviewEl.removeChild(currLi);
    publishButton.disabled = false;
  }
  function clearAllInputFields() {
    firstNameInputField.value = '';
    lastNameInputField.value = '';
    ageInputField.value = '';
    storyTitleInputField.value = '';
    genreInputField.value = '';
    storyTextTextarea.value = '';
  }
}
