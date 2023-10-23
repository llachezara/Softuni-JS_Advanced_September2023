const { expect } = require('chai');
const { movieTheater } = require('./03. Movie Theater.js');

describe("Test ageRestrictions", function () {

    it("case G", function () {
        expect(movieTheater.ageRestrictions("G")).to.equal("All ages admitted to watch the movie")
    });
    it("case PG", function () {
        expect(movieTheater.ageRestrictions("PG")).to.equal("Parental guidance suggested! Some material may not be suitable for pre-teenagers")
    });
    it("case R", function () {
        expect(movieTheater.ageRestrictions("R")).to.equal("Restricted! Under 17 requires accompanying parent or adult guardian")
    });
    it("case NC", function () {
        expect(movieTheater.ageRestrictions("NC-17")).to.equal("No one under 17 admitted to watch the movie")
    });
    it("case default", function () {
        expect(movieTheater.ageRestrictions("CD")).to.equal("There are no age restrictions for this movie");
    });

});
describe("Test moneySpent", function () {

    describe("Validate input", function () {

        it("tickets should be number", function () {
            expect(() => movieTheater.moneySpent(8, [], [])).to.not.throw("Invalid input");
            expect(() => movieTheater.moneySpent({})).to.throw("Invalid input");
        });
        it("food should be array", function () {

            expect(() => movieTheater.moneySpent(9, [], [])).to.not.throw("Invalid input");
            expect(() => movieTheater.moneySpent(1, "pop")).to.throw("Invalid input");
        });
        it("drinks should be array", function () {

            expect(() => movieTheater.moneySpent(2, ["", ""], ["", ""])).to.not.throw("Invalid input");
            expect(() => movieTheater.moneySpent(1, "pop", "drink")).to.throw("Invalid input");
        });

    });

    it("With coupon", function () {

        expect(movieTheater.moneySpent(2, ["Nachos", "Popcorn", "Nachos", "Popcorn", "Nachos", "Popcorn"], ["Soda", "Water", "Soda", "Water"])).to.equal("The total cost for the purchase with applied discount is 55.60");

    });
    it("Without coupon", function () {

        expect(movieTheater.moneySpent(2, ["Nachos", "Popcorn"], ["Soda", "Water"])).to.equal("The total cost for the purchase is 44.50");
    });
    it("Without coupon", function () {

        expect(movieTheater.moneySpent(2, ["Nachos", "Popcorn"], ["Soda", "Water"])).to.equal("The total cost for the purchase is 44.50");
    });

});
describe("Test reservation", function () {


    it("rowsArray should be array and seats should be a number", function () {

        expect(() => movieTheater.reservation([], 9)).to.not.throw("Invalid input");
        expect(() => movieTheater.reservation("", "")).to.throw("Invalid input");
        expect(() => movieTheater.reservation(9, [])).to.throw("Invalid input");
    });
    it("when seats are 0", function () {

        expect(movieTheater.reservation(
            [{ rowNumber: 1, freeSeats: 7 }, { rowNumber: 2, freeSeats: 5 }], 0)).to.equal(2);

    });
    it("when seats are 0", function () {

        expect(movieTheater.reservation(
            [{ rowNumber: 1, freeSeats: 15 }, { rowNumber: 2, freeSeats: 5 }], 7)).to.equal(1);

    });


});

