function addItem() {
    const inputElement = document.querySelector('input[type=text]');


    const ulElement = document.getElementById('items');
    let li = document.createElement('li');
    li.textContent = inputElement.value;

    let link = document.createElement('a');
    link.textContent = '[Delete]';
    link.href = '#';

    li.appendChild(link);
    ulElement.appendChild(li);

    link.addEventListener('click', onClick);

    function onClick(event) {
        event.currentTarget.parentElement.remove();
    }
}