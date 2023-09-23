function createSortedList() {
    const obj = {
        listOfNumbers: [],
        add(element) {
            this.listOfNumbers.push(element);
            this.listOfNumbers.sort((a, b) => a - b);
        },
        remove(index) {
            if (index >= 0 && index <= this.listOfNumbers.length - 1) {
                this.listOfNumbers.splice(index, 1);
            }

        },
        get(index) {
            if (index >= 0 && index <= this.listOfNumbers.length - 1) {
                return this.listOfNumbers[index]
            }

        },
        get size() {
            return this.listOfNumbers.length;
        }

    }

    return obj;
}
let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.size);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
