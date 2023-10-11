function addItem() {
    let inputElWithText = document.getElementById('newItemText');
    let inputElWithValue = document.getElementById('newItemValue');

    let newOptionElement = document.createElement('option');
    newOptionElement.textContent = inputElWithText.value;
    newOptionElement.value = inputElWithValue.value;

    let selectElement = document.getElementById('menu');
    selectElement.appendChild(newOptionElement);

    inputElWithText.value = '';
    inputElWithValue.value = '';

}
