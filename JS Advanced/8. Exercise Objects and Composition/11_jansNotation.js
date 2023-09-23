function numberOperations(arrayWithInstructions) {

    let instructions = {
        numbers: [],
        operators: []
    }

    let arithmeticOperators = {
        "+": (num1, num2) => {
            return num1 + num2;
        },
        "-": (num1, num2) => {
            return num1 - num2;
        },
        "*": (num1, num2) => {
            return num1 * num2;
        },
        "/": (num1, num2) => {
            return num1 / num2;
        },
        calc(operator, num1, num2) {

            let result = this[operator](num1, num2);
            return result;

        }
    }

    for (const instruction of arrayWithInstructions) {

        if (instruction === Number(instruction)) {

            instructions.numbers.push(instruction);

        } else {

            if (instructions.numbers.length > 1) {
                let num2 = instructions.numbers.pop();
                let num1 = instructions.numbers.pop();
                if (num1 === undefined) {
                    num1 = 0;
                }
                if (num2 === undefined) {
                    num2 = 0;
                }
                let result = arithmeticOperators.calc(instruction, num1, num2);
                instructions.numbers.push(result);
            } else {
                return console.log('Error: not enough operands!');
            }
        }
    }

    if (instructions.numbers.length > 1) {
        console.log('Error: too many operands!');
    } else {
        console.log(instructions.numbers.join(''));
    }

}
numberOperations([-1,
    1,
    "+",
    101,
    '*',
    18,
    "+",
    3,
    "/"]

);
console.log('---------------');
numberOperations([3,
    4,
    '+']
)
console.log('---------------');
numberOperations([5,
    3,
    4,
    '*',
    '-']
)
console.log('---------------');
numberOperations([7,
    33,
    8,
    '-']
)
console.log('---------------');
numberOperations([15,
    '/']
)
