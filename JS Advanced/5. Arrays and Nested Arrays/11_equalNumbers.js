function printEqualNeighborPairs(matrix) {

    let countOfEqualNeighborPairs = 0;
    for (let row = 0; row < matrix.length; row++) {

        for (let i = 0; i < matrix[row].length; i++) {

            let currElement = matrix[row][i];
            let neighborNextToElement = matrix[row][i + 1];

            if (neighborNextToElement === currElement) {
                countOfEqualNeighborPairs++;
            }

            if (row < matrix.length-1) {
                let neighborUnderElement = matrix[row + 1][i];

                if (currElement === neighborUnderElement ) {
                    countOfEqualNeighborPairs++;
                }
            }
        }
    }
    
    return countOfEqualNeighborPairs;
}
console.log(printEqualNeighborPairs([
    [2, 2, 5, 7, 4],
    [4, 0, 5, 3, 4],
    [2, 5, 5, 4, 2]]

));

//2 2 5 7 4
//4 0 5 3 4
//2 5 5 4 2