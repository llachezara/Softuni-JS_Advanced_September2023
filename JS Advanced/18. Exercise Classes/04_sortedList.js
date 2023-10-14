/*
•	add(element) - adds a new element to the collection
•	remove(index) - removes the element at position index
•	get(index) - returns the value of the element at position index
•	size - number of elements stored in the collection

*/

class List {
    constructor() {
        this.collection = [];
        this.size = this.collection.length;
    }
    add(element) {

        this.collection.push(element);
        this.size = this.collection.length;
        return this.collection.sort((a, b) => a - b);
    }

    remove(index) {
        if (index < 0 || index > this.size) {
            return;
        }
        this.collection.splice(index, 1);
        this.size = this.collection.length;
        return this.collection.sort((a, b) => a - b);
    }

    get(index) {
        if (index < 0 || index > this.size) {
            return;
        }

        return this.collection[index];
    }

}

let list = new List();
list.add(5);
list.add(12);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
console.log(list.size);

console.log(list.hasOwnProperty('size'));
