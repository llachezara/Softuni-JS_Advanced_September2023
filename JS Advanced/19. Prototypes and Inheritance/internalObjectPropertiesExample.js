let ob = {};
Object.defineProperty(ob, 'a', { configurable: false, writable: true });
//Object.defineProperty(ob, 'a', { enumerable: true }); // throws a TypeError
Object.defineProperty(ob, 'a', { value: 12 }); // throws a TypeError
Object.defineProperty(ob, 'a', { writable: false }); // This is allowed!!
Object.defineProperty(ob, 'a', { writable: true }); // throws a TypeError
delete ob.a; // => false
