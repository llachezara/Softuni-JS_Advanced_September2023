function deleteByEmail() {

    const inputElement = document.querySelector("input[type=text]");

    const tableRowsEl = document.querySelectorAll('tbody tr');

    let result = '';
    for (const row of tableRowsEl) {
        const tdsEl = row.querySelectorAll(':nth-child(2)');

        const tdWIthEmail = tdsEl[0].textContent;

        if (tdWIthEmail === inputElement.value) {
            row.remove();
            result = "Deleted.";
            break;
        }else{
            result = "Not found.";
        }
    }

    const resultDiv = document.getElementById('result');
    resultDiv.textContent = result;
}