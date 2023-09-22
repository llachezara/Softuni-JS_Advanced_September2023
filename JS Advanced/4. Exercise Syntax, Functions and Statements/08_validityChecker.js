function validityChecker(x1, y1, x2, y2) {

    function check(x1, y1, x2, y2) {
        let distanceBetweenPoints = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)
        if (Number.isInteger(distanceBetweenPoints)) {
            return true;
        } else {
            return false;
        }
    }

    let firstPointCoordinatestoBeginningValidity = check(x1, y1, 0, 0) ? 'valid' : 'invalid';
    console.log(`{${x1}, ${y1}} to {${0}, ${0}} is ${firstPointCoordinatestoBeginningValidity}`);

    let secondPointCoordinatestoBeginningValidity = check(x2, y2, 0, 0) ? 'valid' : 'invalid';
    console.log(`{${x2}, ${y2}} to {${0}, ${0}} is ${secondPointCoordinatestoBeginningValidity}`);

    let firstToSecondCoordinatesValidity = check(x1, y1, x2, y2) ? 'valid' : 'invalid';
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${firstToSecondCoordinatesValidity}`);
   
}
validityChecker(2, 1, 1, 1)