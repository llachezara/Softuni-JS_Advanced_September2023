function addItem() {
    let listElement = document.getElementById('items');
    let inputElement = document.getElementById('newItemText');

    let newLI = document.createElement('li');
    let textInNewLI = inputElement.value;

    newLI.textContent = textInNewLI;
    listElement.appendChild(newLI);
}