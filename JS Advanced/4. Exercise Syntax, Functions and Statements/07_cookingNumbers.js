function numOperations(initialNumber, op1, op2, op3, op4, op5) {

    let number = Number(initialNumber);
    let operations = [op1, op2, op3, op4, op5];

    let chop = (num) => {
        return num / 2;
    };
    let dice = (num) => {
        return Math.sqrt(num);

    };
    let spice = (num) => {
        return num + 1;
    };
    let bake = (num) => {
        return num * 3;

    };
    let fillet = (num) => {
        return 0.8 * num;
    };

    for (const operation of operations) {
        number = eval(`${operation}(${number})`)
        console.log(number);
    }

}
numOperations('9', 'dice', 'spice', 'chop', 'bake', 'fillet');