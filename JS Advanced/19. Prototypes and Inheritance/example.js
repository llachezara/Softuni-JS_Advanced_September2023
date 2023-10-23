let obj = {
    name: "zero",
}

obj.printHello = () => {
    console.log("HEllo");
}
console.log(Object.getPrototypeOf(obj));
obj.printHello();

let cucumber = {
    color: "green",
    printBye: function () {
        console.log("Bye");
    }
}
console.log(Object.getPrototypeOf(cucumber));

console.log(Object.getPrototypeOf(obj) == Object.getPrototypeOf(cucumber)); //true - WHAT???
