function printDiagonalSums(matrix) {
    let rightDiagonalSum = 0;
    let leftDiagonalSum = 0;

    for (let i = 0; i < matrix.length; i++) {
        leftDiagonalSum += matrix[i][i];

    }

    let index= matrix.length-1;
    for (let i = 0; i < matrix.length; i++) {
       
        rightDiagonalSum += matrix[i][index--];

    }

    return [leftDiagonalSum,rightDiagonalSum].join(' ');
}
console.log(printDiagonalSums([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
));