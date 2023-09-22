function numOperations(initialNumber, op1, op2, op3, op4, op5) {

    let number = Number(initialNumber);
    let operations = [op1, op2, op3, op4, op5];

    let obj = {
        chop(num) {

            return num / 2;
        },
        dice(num) {

            return Math.sqrt(num);
        },
        spice(num) {

            return num + 1;
        },
        bake(num) {

            return num * 3;
        },
        fillet(num) {


            return 0.8 * num;
        }
    }

    for (const operation of operations) {
        number = obj[operation](number);
        console.log(number);
    }

}
numOperations('9', 'dice', 'spice', 'chop', 'bake', 'fillet');