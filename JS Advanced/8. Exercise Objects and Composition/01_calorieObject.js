function composeObject(arrayOfInfo) {
    let calorieObject = {};

    for (let i = 0; i < arrayOfInfo.length; i += 2) {
        let key = arrayOfInfo[i];
        let value = arrayOfInfo[i + 1];

        calorieObject[key] = Number(value);

    }
    console.log(calorieObject);
}
composeObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42'])