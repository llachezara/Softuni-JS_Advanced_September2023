// const obj = {
//     name: 'Peter',
//     inner() { console.log(this); },
//     outer() {
//         console.log(this); // Object {name: "Peter"}
//     },

// }
// obj.outer();
// obj.inner()

// //
// const firstPerson = {
//     name: "Peter",
//     prof: "Fisherman",
//     shareInfo: function () {
//     console.log(`${this.name} works as a ${this.prof}`);
//     }
//     };
//     const secondPerson = { name: "George", prof: "Manager" };
//     firstPerson.shareInfo.apply(secondPerson);
//


const obj = {
    name: 'Peter',
    outer() {
        console.log(this); // Object {name: "Peter"}
        const inner = () => console.log(this);
        inner();
    }
}
obj.outer();
console.log('--------------');

const f = (function () {
    let counter = 0;
    return function () {
        console.log(++counter);
    }
})();
f(); // 1
f(); // 2
f(); // 3
f(); // 4
f(); // 5
f(); // 6
f(); // 
