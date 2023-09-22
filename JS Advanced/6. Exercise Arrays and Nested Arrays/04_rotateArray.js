function printRotatedArray(array, rotations) {
    let indexToStartFrom = array.length - Math.floor(rotations / array.length);


    if (array.length > rotations) {
        indexToStartFrom = array.length - rotations;
    }

    let rotatedArray = [];
    for (let i = indexToStartFrom; i < array.length; i++) {
        rotatedArray.push(array[i]);

    }

    for (let k = 0; k < indexToStartFrom; k++) {
        rotatedArray.push(array[k]);
    }

    console.log(rotatedArray.join(' '));
}
printRotatedArray(['1', 
'2', 
'3', 
'4'], 
2


)