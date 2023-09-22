function sortingSmallBig(inputArray) {
    let [...smallToBigNumbers] = inputArray;
    let [...bigToSmallNumbers] = inputArray;

    smallToBigNumbers.sort((a, b) => a - b);
    bigToSmallNumbers.sort((a, b) => b - a);

    let biggerArrayLength = smallToBigNumbers.length >= bigToSmallNumbers.length ? smallToBigNumbers.length : bigToSmallNumbers.length;

    let mixedArray = [];
    for (let index = 0; index < biggerArrayLength / 2; index++) {

        if (smallToBigNumbers[index] === bigToSmallNumbers[index]) {
            mixedArray.push(smallToBigNumbers[index]);
            break;
        }
        if (smallToBigNumbers[index] !== undefined) {
            mixedArray.push(smallToBigNumbers[index]);
        }

        if (bigToSmallNumbers[index] !== undefined) {
            mixedArray.push(bigToSmallNumbers[index]);
        }

    }

    return mixedArray;

}
console.log(sortingSmallBig([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));