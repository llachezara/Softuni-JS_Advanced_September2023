function printListOfNames(array) {
    array.sort((a, b) => a.localeCompare(b));
    for (let i = 0; i < array.length; i++) {
        console.log(i + 1 + '.'+ array[i]);

    }
}
printListOfNames(["John", "Bob", "Christina", "Ema"])