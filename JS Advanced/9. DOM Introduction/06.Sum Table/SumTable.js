function sumTable() {
    let elements = document.querySelectorAll('tbody td:nth-child(2n)');

    let sum = 0;
    for (let i = 0; i < elements.length - 1; i++) {
        sum += Number(elements[i].textContent);
    }

    let resElement = document.getElementById('sum');
    resElement.textContent = sum;
}