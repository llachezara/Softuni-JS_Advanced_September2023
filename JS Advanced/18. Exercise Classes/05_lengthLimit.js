class Stringer {
    constructor(string, length) {

        this.innerString = string;
        this.innerLength = length;
       // this.currLength = length;

    }
    increase(value) {
        this.innerLength += value;
    }
    decrease(value) {
        this.innerLength -= value;
        if (this.innerLength < 0) {
        }
            this.innerLength = 0;
    }

    toString() {

        let str = this.innerString;

        if (this.innerString.length > this.innerLength) {
            
            str = this.innerString.substring(0, this.innerLength );

        }  

        if (str.length < this.innerString.length) {
            str += "...";
        }
        return str;
    }
}



let test = new Stringer("Test", 3);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4);
console.log(test.toString()); // Test
