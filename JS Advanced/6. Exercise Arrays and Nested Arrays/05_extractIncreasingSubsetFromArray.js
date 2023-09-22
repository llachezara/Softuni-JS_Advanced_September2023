function extract(array) {
    let currentBiggestValue = array[0];

    // let result = [];
    let reducer = function (accumulator, currentValue, index) {
        if (currentValue < currentBiggestValue) {
            index++;

        } else {
            currentBiggestValue = currentValue;
            accumulator.push(currentValue);
            index++;
        }

        return accumulator;
    }

    return array.reduce(reducer,[]);
}
console.log(extract([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
));