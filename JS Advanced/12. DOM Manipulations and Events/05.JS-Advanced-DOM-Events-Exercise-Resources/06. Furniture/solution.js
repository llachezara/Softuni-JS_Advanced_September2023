function solve() {
  const generateButtonElement = document.querySelector('#exercise button');
  const tableBodyElement = document.querySelector('table tbody');
  const firstTextareaElement = document.querySelector('#exercise textarea');

  generateButtonElement.addEventListener('click', createRow);
  function createRow() {
    const textareaValue = firstTextareaElement.value;
    const arrayOfObjectsFromInput = JSON.parse(textareaValue);

    const furnitureInfoObject = {};
    furnitureInfoObject.arrayOfObjects = [];

    for (const object of arrayOfObjectsFromInput) {
      furnitureInfoObject.arrayOfObjects.push(object);
    }

    for (const object of furnitureInfoObject.arrayOfObjects) {
      const imageSrc = object.img;
      let tdImage = document.createElement('td');
      let imageTag = document.createElement('img');
      imageTag.src = imageSrc;
      tdImage.appendChild(imageTag);

      const name = object.name;
      let tdName = document.createElement('td');
      tdName.textContent = name;
      tdName.classList.add('name-td');

      const decorationFactor = Number(object.decFactor);
      let tdDecFactor = document.createElement('td');
      tdDecFactor.textContent = decorationFactor;
      tdDecFactor.classList.add('decFactor-td');
      //sumDecoraterFactor += decorationFactor;


      const price = Number(object.price);
      let tdPrice = document.createElement('td');
      tdPrice.textContent = price;
      tdPrice.classList.add('price-td');
      //totalPrice += price;

      let tdMark = document.createElement('td');
      let newInput = document.createElement('input');
      newInput.type = 'checkbox';
      tdMark.appendChild(newInput);
      tdMark.classList.add('checkbox-td');

      let newRowElement = document.createElement('tr');
      newRowElement.appendChild(tdImage);
      newRowElement.appendChild(tdName);
      newRowElement.appendChild(tdPrice);
      newRowElement.appendChild(tdDecFactor);
      newRowElement.appendChild(tdMark);

      tableBodyElement.appendChild(newRowElement);

    }

  }

  const buyButtonElement = document.querySelector('button:last-child');
  const secondTextAreaElement = Array.from(document.querySelectorAll('textarea'))[1];

  const arrayWithBoughtFurnitureNames = [];
  let counterOfBoughtFurniture = 0;
  let totalPrice = 0;
  let sumDecoraterFactor = 0;

  buyButtonElement.addEventListener('click', printInTextarea);
  function printInTextarea() {

    let trsElements = Array.from(tableBodyElement.querySelectorAll('tr'));
    for (const row of trsElements) {
      let inputEl = row.querySelector('.checkbox-td input');
      let nameElementTD = row.querySelector('.name-td');
      let decorationFactorTD = row.querySelector('.decFactor-td');
      let priceTD = row.querySelector('.price-td');

      if (inputEl !== null) {
        if (inputEl.checked == true) {
          arrayWithBoughtFurnitureNames.push(nameElementTD.textContent);
          totalPrice += Number(priceTD.textContent)
          sumDecoraterFactor += Number(decorationFactorTD.textContent);
          counterOfBoughtFurniture++;
        }
      }
      
    }

    secondTextAreaElement.value += `Bought furniture: ${arrayWithBoughtFurnitureNames.join(', ')}\n`;
    secondTextAreaElement.value += `Total price: ${totalPrice.toFixed(2)}\n`;

    const averageDecFactor = (sumDecoraterFactor / counterOfBoughtFurniture);
    secondTextAreaElement.value += `Average decoration factor: ${averageDecFactor}`;

  }
}