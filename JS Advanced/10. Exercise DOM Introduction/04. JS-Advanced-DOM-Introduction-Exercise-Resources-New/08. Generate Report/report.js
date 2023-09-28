function generateReport() {
    // console.log(document.querySelector('[name="employee"]').checked);
    let thElementsArray = Array.from(document.querySelectorAll('thead tr th'));
    let thElementsLength = thElementsArray.length;
    let arrayOfTableHeadingsNames = [];

    for (const th of thElementsArray) {
        arrayOfTableHeadingsNames.push(th.querySelector('input').name);
    }

    let objectWithFinalInfo = [];
    let tableRows = Array.from(document.querySelectorAll('tbody tr'));

    for (let i = 0; i < tableRows.length; i++) {
        let row = tableRows[i];

        let tds = Array.from(row.querySelectorAll('td'));
        let obj = {};
        for (let i = 0; i < arrayOfTableHeadingsNames.length; i++) {

            let name = arrayOfTableHeadingsNames[i];
            if (document.querySelector(`[name=${name}]`).checked) {
                obj[name] = tds[i].textContent;
            }

        }

        objectWithFinalInfo.push(obj);
    }
    
    let result = JSON.stringify(objectWithFinalInfo, null, 2);
    document.getElementById('output').value = result;

}