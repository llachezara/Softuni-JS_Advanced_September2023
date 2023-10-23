let obj = {
    name: "zero",
}

obj.printHello = () => {
    console.log("HEllo");
}
console.log(Object.getPrototypeOf(obj));
obj.printHello();

class Vegetable {
    constructor(color, callBack) {
        this.color = color;
        this.print = callBack;
    }
}
printBye = function () {
    console.log("Bye");
}
let cucumber = new Vegetable("green", printBye);

console.log(Object.getPrototypeOf(cucumber));
cucumber.print();
console.log(Object.getPrototypeOf(obj) == Object.getPrototypeOf(cucumber)); //true - WHAT???
