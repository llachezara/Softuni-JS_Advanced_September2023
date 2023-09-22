function printSmallestTwoNums(array) {
    let smallestNum = array[0];
    for (const el of array) {
        if (el < smallestNum) {
            let indexOfCurrEl = array.indexOf(el);
            smallestNum = array[indexOfCurrEl];
        }
    }

    let indexOfSmallestNum = array.indexOf(smallestNum);
    array.splice(indexOfSmallestNum, 1);

    let arrayOfSmallNums = [];
    arrayOfSmallNums.push(smallestNum);

    let secondSmallestNum = array[0];
    for (const el of array) {
        if (el < secondSmallestNum) {
            let indexOfCurrEl = array.indexOf(el);
            secondSmallestNum = array[indexOfCurrEl];
        }
    }

   
    arrayOfSmallNums.push(secondSmallestNum);

    console.log(arrayOfSmallNums.join(' '));
}
printSmallestTwoNums(
	[3, 0, 10, 4, 7, 3]
)