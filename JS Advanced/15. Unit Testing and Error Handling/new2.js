class Cat {
    constructor(name, foodForDaysinGrams) {
        this.name = name;
        this.foodForDaysinGrams = foodForDaysinGrams;
        this.daysToFeed = this.foodForDaysinGrams.length;
    }

    get name(){
       return this._name;
    }
    set name(string) {
        return this._name = string;
    }
}

let catBlack = new Cat("Panter", [200, 350, 400]);
console.log(catBlack.name);
console.log(catBlack.daysToFeed);
console.log(catBlack);
