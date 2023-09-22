function printNumsAtOddPosReversedAndDoubled(array) {
    return array.filter((el, i) => i % 2 !== 0)
    .map((el)=> el*2)
    .reverse()
    .join(' ');
}
console.log(printNumsAtOddPosReversedAndDoubled([3, 0, 10, 4, 7, 3]))