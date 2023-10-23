const { expect } = require('chai');
const lottery = require('./Lottery');

describe("Tests	buyLotteryTicket ", function () {
    it("Throw error invalid input", function () {
        expect(() => lottery.buyLotteryTicket('', '', '')).to.throw("Invalid input!");
    });
    // it("Throw error invalid all par input", function () {
    //     expect(() => lottery.buyLotteryTicket(0, 0, '')).to.throw("Invalid input!");
    // });
    // it("Throw error invalid input", function () {
    //     expect(() => lottery.buyLotteryTicket(0, '', true)).to.throw("Invalid input!");
    // });
    // it("Throw error invalid input", function () {
    //     expect(() => lottery.buyLotteryTicket('', 0, true)).to.throw("Invalid input!");
    // });

    it("Throw error when buy is false", function () {
        expect(() => lottery.buyLotteryTicket(0, 0, false)).to.throw("Unable to buy lottery ticket!");
    });

    //Valid input 
    //Number may be decimal!
    it("Valid input with edge case 1", function () {
        expect(lottery.buyLotteryTicket(3, 3, true)).to.equal("You bought 3 tickets for 9$.")
    });
    it("Valid input with edge case 1", function () {
        expect(lottery.buyLotteryTicket(1.5, 3, true)).to.equal("You bought 3 tickets for 4.5$.")
    });

});

describe("Test checkTicket", function () {
    it("Invalid input all params", function () {
        expect(() => lottery.checkTicket(0, 0)).to.throw("Invalid input!");
    });
    // it("Valid input but invalid lengths of arrays", function () {
    //     expect(() => lottery.checkTicket([], [])).to.throw("Invalid input!");
    // });
    //

    //Valid
    it("Valid input and valid lengths of arrays", function () {
        expect(lottery.checkTicket([1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12])).to.equal(undefined);
        //0 mactching nums!!!!!!!!!
    });
    it("Valid input and valid lengths of arrays", function () {
        expect(lottery.checkTicket([1, 2, 3, 4, 8, 10], [1, 2, 3, 4, 5, 6])).to.equal("Congratulations you win, check your reward!");//4 mactching nums
    });
    it("Valid input and valid lengths of arrays", function () {
        expect(lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6])).to.equal("You win the JACKPOT!!!");
    });

});
// T
describe("Test secondChance", function () {
    it("Invalid input all params", function () {
        expect(() => lottery.secondChance('', "")).to.throw("Invalid input!");
    });

    //Valid
    it("Valid input and valid lengths of arrays", function () {
        expect(lottery.secondChance(4, [1, 2, 3, 4, 5, 6])).to.equal("You win our second chance prize!");
    });// There is match
    it("Valid input and valid lengths of arrays", function () {
        expect(lottery.secondChance(0, [1, 2, 3, 4, 5, 6])).to.equal("Sorry, your ticket didn't win!");//No match
    });

});
// T
