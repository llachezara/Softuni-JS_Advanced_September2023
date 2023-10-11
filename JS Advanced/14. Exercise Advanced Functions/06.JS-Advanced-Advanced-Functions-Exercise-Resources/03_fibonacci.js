function getFibonator() {
    let number1 = 0;
    let number2 = 1;
    return () => {
        let result = number1 + number2;
        number1 = number2;
        number2 = result;

        return number1;
    }
}
let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
