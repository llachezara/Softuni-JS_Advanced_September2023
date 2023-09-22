function print(array) {
    let newArray = [];
    for (const element of array) {
        let indexOfCurrEl = array.indexOf(element);

        if (element < 0) {
            newArray.unshift(array[indexOfCurrEl]);
        } else {
            newArray.push(array[indexOfCurrEl]);
        }
    }
    console.log(newArray.join('\n'));
}
print([3, -2, 0, -1])