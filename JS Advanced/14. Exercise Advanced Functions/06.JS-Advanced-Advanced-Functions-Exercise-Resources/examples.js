
const myMethod = () => {
    console.log(this);
  };
  
const myObject = {};

const myMethodBound = myMethod.bind(myObject);
myMethodBound();
console.log(myMethod());
//myMethodBound();
myMethod.call(myObject); // this === window or global object
myMethod.apply(myObject);
