(function changeArrayPrototype() {
    Array.prototype.last = function () {
        return this[this.length - 1];
    }
    Array.prototype.skip = function (n) {
        const newArray = [...this];
        for (let i = 0; i < n; i++) {
            newArray.shift();
        }
        return newArray;
    }
    Array.prototype.take = function (n) {
        const newArray = [];
        for (let i = 0; i < n; i++) {
            newArray.push(this[i]);
        }
        return newArray;
    }
    Array.prototype.sum = function () {

        let res = this.reduce((acc, el) => acc + el, 0);

        return res;
    }
    Array.prototype.average = function () {

        let sumOfElements = this.sum();
        let numberOfElements = this.length;

        return sumOfElements / numberOfElements;
    }


})();
let array = [1, 2, 3, 4];
console.log(array.average());

