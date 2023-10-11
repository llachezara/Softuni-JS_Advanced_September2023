function printTypeOfArguments(...arguments) {
    let resultArray = [];
    let objectOfTypes = {};

    for (const argument of arguments) {
        let typeOfArg = typeof (argument);
        let obj = {};

        obj[typeOfArg] = typeOfArg === "object" ? '' : argument;
        resultArray.push(obj);

        if (!objectOfTypes.hasOwnProperty(typeOfArg)) {
            objectOfTypes[typeOfArg] = 0;
        }
        objectOfTypes[typeOfArg]++;
    }

    for (const object of resultArray) {

        for (const key in object) {
            console.log(`${key}: ${object[key]}`);
        }
    }

    let sorted = Object.entries(objectOfTypes).sort((a, b) => b[1] - a[1]);

    for (const [type, occurences] of sorted) {
        console.log(`${type} = ${occurences}`);
    }
}
printTypeOfArguments({ name: 'bob' }, 3.333, 9.999)
