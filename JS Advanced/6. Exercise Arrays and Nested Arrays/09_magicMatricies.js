function isMagic(matrix) {
    let magicSum = 0;
    for (let i = 0; i < matrix[0].length; i++) {
        magicSum += matrix[0][i];

    }

    let isMagicBool = true;
    for (let row = 0; row < matrix.length; row++) {

        let sum = 0;
        for (let index = 0; index < matrix[row].length; index++) {
            sum += matrix[row][index];

        }

        if (sum != magicSum) {
            isMagicBool = false;
            break;
        }
    }

    for (let row = 0; row < matrix.length; row++) {

        let sum = 0;
        for (let index = 0; index < matrix.length; index++) {
            sum += matrix[index][row];

        }

        if (sum != magicSum) {
            isMagicBool = false;
            break;
        }
    }

    console.log(isMagicBool);
}
isMagic([
    [1, 1, 1],
    [1, 1, 1],
]);