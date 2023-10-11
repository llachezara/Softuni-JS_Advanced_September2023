function sortArray(numericArray, string) {
    if (string === 'asc') {
        return numericArray.sort((a, b) => a - b);
    } else {
        return numericArray.sort((a, b) => b - a);
    }
}
console.log(sortArray([14, 7, 17, 6, 8], 'desc',	[17, 14, 8, 7, 6]))