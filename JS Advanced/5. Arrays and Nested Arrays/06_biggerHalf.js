function printBiggerHalf(array) {

    array.sort((a, b) => a - b);
    let indexToCopyFrom = Math.floor(array.length /2);
    let resultArray = array.slice(indexToCopyFrom);

    return resultArray;
}
printBiggerHalf([3, 19, 14, 7, 2, 19, 6])