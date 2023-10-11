function solve() {
    let generateButtonElement = document.querySelector('#exercise button');
    let tableBodyElement = document.querySelector('table tbody');
  
    generateButtonElement.addEventListener('click', createRow);
    let textareaElement = document.querySelector('#exercise textarea');
  
    let totalPrice = 0;
    let sumDecoraterFactor = 0;
    let counterOfFurnitureObj = 0;
    function createRow(event) {
      let textareaValueInJSON = textareaElement.value;
      let arrayOfObjects = JSON.parse(textareaValueInJSON);
  
      let objectWithFurnitureInfo = {};
      objectWithFurnitureInfo.furnitureObjectsArray = [];
  
      for (const objectFromInput of arrayOfObjects) {
  
        objectWithFurnitureInfo.furnitureObjectsArray.push(objectFromInput);
      }
  
  
      for (const object of objectWithFurnitureInfo.furnitureObjectsArray) {
        let imageSrc = object.img;
        let name = object.name;
  
        let decorationFactor = Number(object.decFactor);
        let price = Number(object.price);
  
        let tdImage = document.createElement('td');
        let imageTag = document.createElement('img');
        imageTag.src = imageSrc;
        tdImage.appendChild(imageTag);
  
        let tdName = document.createElement('td');
        tdName.textContent = name;
        tdName.id = 'name-td';
  
        let tdDecFactor = document.createElement('td');
        tdDecFactor.textContent = decorationFactor;
        sumDecoraterFactor += decorationFactor;
        counterOfFurnitureObj++;
  
        let tdPrice = document.createElement('td');
        tdPrice.textContent = price;
        totalPrice += price;
  
        let tdMark = document.createElement('td');
        let newInput = document.createElement('input');
        newInput.type = 'checkbox';
        tdMark.appendChild(newInput);
  
        let newRowElement = document.createElement('tr');
  
        newRowElement.appendChild(tdImage);
        newRowElement.appendChild(tdName);
        newRowElement.appendChild(tdPrice);
        newRowElement.appendChild(tdDecFactor);
        newRowElement.appendChild(tdMark);
  
        tableBodyElement.appendChild(newRowElement);
  
      }
  
    }
  
    let buyButtonElement = document.querySelector('button:last-child');
    buyButtonElement.addEventListener('click', printInTextarea);
  
  
    let textAreaToPrintInResult = document.querySelectorAll('textarea')[1];
    let boughtItemsArray = [];
  
    function printInTextarea(event) {
  
      let trsElements = tableBodyElement.querySelectorAll('tr');
      for (const row of trsElements) {
        let inputEl = row.querySelector('td input');
        let nameElement = row.querySelector('#name-td');
  
        if (inputEl.checked == true) {
          boughtItemsArray.push(nameElement.textContent);
        }
      }
  
      textAreaToPrintInResult.value += `Bought furniture: ${boughtItemsArray.join(', ')}\n`;
      textAreaToPrintInResult.value += `Total price: ${totalPrice.toFixed(2)}\n`;
  
      let averageDecFactor = (sumDecoraterFactor / counterOfFurnitureObj);
      textAreaToPrintInResult.value += `Average decoration factor: ${averageDecFactor}`;
  
    }
  
  }