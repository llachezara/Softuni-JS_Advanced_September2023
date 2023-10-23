window.addEventListener("load", solve);

function solve() {
  const firstNameInputField = document.getElementById('first-name');
  const lastNameInputField = document.getElementById('last-name');
  const ageInputField = document.getElementById('age'); const selectElGender = document.getElementById("genderSelect");
  const textAreaDishDescription = document.getElementById("task");

  const submitBtn = document.getElementById("form-btn");

  submitBtn.addEventListener("click", onClickSubmit);

  const ulInProgess = document.getElementById("in-progress");
  const ulFinished = document.getElementById("finished");

  const clearBtn = document.getElementById("clear-btn");
  clearBtn.addEventListener('click', clearEverythingFromUlFinished);

  const dishesCounterInProgressEl = document.getElementById("progress-count");
  let dishCounterNumber = 0;

  function onClickSubmit(event) {

    if (firstNameInputField.value == "" || lastNameInputField.value == "" || ageInputField.value == "" || textAreaDishDescription.value == "") {

      return;
    }
    const newLiEl = createLi(firstNameInputField.value, lastNameInputField.value, ageInputField.value, selectElGender.value, textAreaDishDescription.value);

    ulInProgess.appendChild(newLiEl);
    clearAllInputFields();
    increaseDishCounterInProgress();
  }

  function createLi(firstNameValue, secondNameValue, ageValue, selectElGenderValue, textAreaDishDescrValue) {
    const liEl = document.createElement("li");
    liEl.classList.add('each-line')

    const article = document.createElement('article');

    firstAndLastNameHeading = document.createElement('h4');
    firstAndLastNameHeading.textContent = `${firstNameValue} ${secondNameValue}`

    pGenderAndAge = document.createElement('p');
    pGenderAndAge.textContent = `${selectElGenderValue}, ${ageValue}`

    pDishDescription = document.createElement('p');
    pDishDescription.textContent = `Dish description: ${textAreaDishDescrValue}`


    editBtn = document.createElement('button');
    editBtn.classList.add("edit-btn");
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", onClickEditBtn);

    completeBtn = document.createElement('button');
    completeBtn.classList.add("complete-btn");
    completeBtn.textContent = "Mark as complete";
    completeBtn.addEventListener("click", onClickCompleteBtn);

    article.appendChild(firstAndLastNameHeading);
    article.appendChild(pGenderAndAge);
    article.appendChild(pDishDescription);

    liEl.appendChild(article);
    liEl.appendChild(editBtn);
    liEl.appendChild(completeBtn);


    return liEl;
  }

  function onClickEditBtn(event) {
    const currEditBtn = event.target;
    const currLiEl = currEditBtn.parentNode;

    const currLiChildren = Array.from(currLiEl.children);
    const currLiArticle = currLiChildren[0];
    const currArticleChildren = Array.from(currLiArticle.children);

    const h4WithFirstAndLastName = currArticleChildren[0];
    const firstNameValue = h4WithFirstAndLastName.textContent.split(' ')[0];
    const lastNameValue = h4WithFirstAndLastName.textContent.split(' ')[1];
    firstNameInputField.value = firstNameValue;
    lastNameInputField.value = lastNameValue;

    const pGenderAndAge = currArticleChildren[1];
    const genderValue = pGenderAndAge.textContent.split(', ')[0];
    const ageValue = pGenderAndAge.textContent.split(', ')[1];
    selectElGender.value = genderValue;
    ageInputField.value = ageValue;

    const pDishDescription = currArticleChildren[2];
    const dishDescriptionValue = pDishDescription.textContent.replace('Dish description: ', "");//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    textAreaDishDescription.value = dishDescriptionValue;

    ulInProgess.removeChild(currLiEl);
    decreaseDishCounterInProgress();
  }

  function onClickCompleteBtn(event) {
    const currCompleteBtn = event.target;
    const currLiEl = currCompleteBtn.parentNode;

    const currLiChildren = Array.from(currLiEl.children);
    const editBtnOfCurrLi = currLiChildren[1];
    const completeBtnOfCurrLi = currLiChildren[2];

    currLiEl.removeChild(editBtnOfCurrLi);
    currLiEl.removeChild(completeBtnOfCurrLi);//!!!!!!!!

    ulFinished.appendChild(currLiEl);//?
    decreaseDishCounterInProgress();

  }

  function clearEverythingFromUlFinished() {
    ulFinished.innerHTML = "";

  }

  function clearAllInputFields() {
    firstNameInputField.value = "";
    lastNameInputField.value = "";
    ageInputField.value = "";
    selectElGender.value = "";
    textAreaDishDescription.value = "";
  }

  function increaseDishCounterInProgress(params) {
    dishCounterNumber++;
    dishesCounterInProgressEl.textContent = dishCounterNumber;
  }
  function decreaseDishCounterInProgress(params) {
    dishCounterNumber--;
    dishesCounterInProgressEl.textContent = dishCounterNumber;
  }
}
