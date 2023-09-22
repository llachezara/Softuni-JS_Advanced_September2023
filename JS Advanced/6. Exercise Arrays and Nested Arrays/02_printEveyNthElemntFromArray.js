function print(array, step) {
    let newArray = [];
    for (let index = 0; index < array.length; index += step) {
        newArray.push(array[index]);
    }
    return newArray;
}