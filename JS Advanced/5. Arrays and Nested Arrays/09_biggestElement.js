function printBiggestElement(matrix) {
    let biggestNum = matrix[0][0];
    for (let i = 0; i < matrix.length; i++) {
        let currArray = matrix[i];
        for (let k = 0; k < currArray.length; k++) {

            if (currArray[k] > biggestNum) {
                biggestNum = currArray[k];
            }

        }
    }

    return biggestNum;
}
console.log(printBiggestElement([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
   
   ));