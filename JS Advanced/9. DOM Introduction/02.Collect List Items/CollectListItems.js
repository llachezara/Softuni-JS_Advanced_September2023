function extractText() {
    let items = document.querySelectorAll('#items li');
    let textarea = document.getElementById('result');

    for (const item of items) {
        textarea.value += item.textContent + '\n';
    }
}