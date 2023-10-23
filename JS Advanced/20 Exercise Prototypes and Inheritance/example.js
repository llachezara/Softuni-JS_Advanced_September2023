function Foo(who) {
    this.me = who;
}
Foo.prototype.identify = function () { return "I am " + this.me; }
function Bar(who) { Foo.call(this, who); }
//Bar.prototype = Object.create(Foo.prototype);
Bar.prototype.speak = function () {
    console.log("Hello, " + this.identify() + ".");
}
let b1 = new Bar("b1");
let b2 = new Bar("b2");
b1.speak(); b2.speak();
console.log(b1.identify());

console.log(Object.getPrototypeOf(Bar) == Foo.prototype);

