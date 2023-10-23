const { expect } = require('chai');
const { chooseYourCar } = require('./chooseYourCar');

describe("Test choosingType", function () {
    it("throw error eith year 1899", function () {
        expect(() => chooseYourCar.choosingType("Sadan", "dd", 1899)).to.throw(`Invalid Year!`);
    });
    it("throw error eith year 2023", function () {
        expect(() => chooseYourCar.choosingType("Sadan", "dd", 2023)).to.throw(`Invalid Year!`);
    });
    it("throw error type is not Sedan", function () {
        expect(() => chooseYourCar.choosingType("Sadan", "dd", 2022)).to.throw(`This type of car is not what you are looking for.`);
    });
    it("type is Sedan but year is 2010", function () {
        expect(chooseYourCar.choosingType("Sedan", "dd", 2010)).to.equal(`This dd Sedan meets the requirements, that you have.`);
    });
    it("type is Sedan but year is 2009", function () {
        expect(chooseYourCar.choosingType("Sedan", "dd", 2009)).to.equal(`This Sedan is too old for you, especially with that dd color.`);
    });
});
describe("Test brandName", function () {
    it("test with not array first parameter", function () {
        expect(() => chooseYourCar.brandName({}, 1)).to.throw("Invalid Information!");
    });
    it("test with negative num second parameter", function () {
        expect(() => chooseYourCar.brandName([], -1)).to.throw("Invalid Information!");
    });

    it("test with throw error 0 second parameter", function () {
        expect(() => chooseYourCar.brandName([], 0)).to.throw("Invalid Information!");
    });
    it("test with throw error 3 second parameter", function () {
        expect(() => chooseYourCar.brandName([], 3)).to.throw("Invalid Information!");
    });

    it("test with 0 valid second parameter", function () {
        expect(() => chooseYourCar.brandName(["Array"], 0)).to.not.throw("Invalid Information!");
    });
    it("valid input", function () {
        expect(chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 1)).to.equal(["BMW", "Peugeot"].join(', '));
    })
    it("valid input", function () {
        expect(chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 0)).to.equal(["Toyota", "Peugeot"].join(', '));
    })

});

describe("Test carFuelConsumption ", () => {
    it("negative nums as input", function () {
        expect(() => chooseYourCar.carFuelConsumption(-3, -3)).to.throw("Invalid Information!");
    })
    it("0 nums as input", function () {
        expect(() => chooseYourCar.carFuelConsumption(0, 0)).to.throw("Invalid Information!");
    })
    it("arrays as input", function () {
        expect(() => chooseYourCar.carFuelConsumption([], [])).to.throw("Invalid Information!");
    })
    it("invalid nums as input", function () {
        expect(() => chooseYourCar.carFuelConsumption({}, 5)).to.throw("Invalid Information!");
        expect(() => chooseYourCar.carFuelConsumption(5, {})).to.throw("Invalid Information!");
    })

    it("car is efficient enough", function () {
        let num = 7;
        expect(chooseYourCar.carFuelConsumption(100, num)).to.equal(`The car is efficient enough, it burns ${num.toFixed(2)} liters/100 km.`)
    })
    it("car is efficient enough", function () {
        let num = 7.5;
        expect(chooseYourCar.carFuelConsumption(200, num)).to.equal(`The car is efficient enough, it burns 3.75 liters/100 km.`)
    })
    it("burns too much fuel", function () {
        expect(chooseYourCar.carFuelConsumption(2, 7)).to.equal("The car burns too much fuel - 350.00 liters!")
    })
    it("burns too much fuel", () => {
        expect(chooseYourCar.carFuelConsumption(99, 7)).to.equal("The car burns too much fuel - 7.07 liters!");
    })
    it("burns too much fuel", () => {
        expect(chooseYourCar.carFuelConsumption(99, 7.8)).to.equal("The car burns too much fuel - 7.88 liters!");
    })

})
