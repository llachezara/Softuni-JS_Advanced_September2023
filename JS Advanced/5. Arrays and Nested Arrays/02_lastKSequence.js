function printLastKNums(n, k) {
    // n = length of the sequence
    const firstElement = 1;
    let array = [firstElement];

    while (array.length !== n) {

        let sumOfPreviousKElements = 0;
        let indexOfLastElInArray = array.length - 1;
        for (let i = indexOfLastElInArray - k + 1; i <= indexOfLastElInArray; i++) {

            if (i >= 0 ) {
                sumOfPreviousKElements += array[i];

            } else {
                continue;
            }

        }

        let nextElement = sumOfPreviousKElements;
        array.push(nextElement);
    }

    return array;
}
//&& array[i] !== undefined
console.log(printLastKNums(8, 2));