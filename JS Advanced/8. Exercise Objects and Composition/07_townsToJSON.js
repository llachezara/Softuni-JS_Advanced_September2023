function convertToJSON(arrayOfStrings) {

    let arrayOfObjects = [];
    let keys = arrayOfStrings.shift().split(/\s*[|]\s*/g).filter((el) => el !== '');

    for (const string of arrayOfStrings) {
        let elements = string.split(/\s*[|]\s*/g).filter((el) => el !== '');

        let obj = {};
        for (let i = 0; i < keys.length; i++) {
            if (i === 0) {
                obj[keys[i]] = elements[i];
            } else {
                let currEl = Number(elements[i]).toFixed(2);
                if (currEl[currEl.length - 1] == '0') {
                    obj[keys[i]] = Number(Number(elements[i]).toFixed(1));
                } else {
                    obj[keys[i]] = Number(Number(elements[i]).toFixed(2));
                }

            }

        }

        arrayOfObjects.push(JSON.stringify(obj));
    }


    console.log('[' + arrayOfObjects.join(',') + ']');

}
convertToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'])