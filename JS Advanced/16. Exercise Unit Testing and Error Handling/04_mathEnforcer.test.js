const { expect } = require('chai');
const { mathEnforcer } = require('./04_mathEnforcer');

describe("mathEnforcer", () => {
    describe("addFive", () => {
        it("invalid parameter", () => {
            expect(mathEnforcer.addFive('')).to.be.equal(undefined);
            expect(mathEnforcer.addFive('ahaat')).to.be.equal(undefined);
        })
        it("invalid parameter", () => {
            expect(mathEnforcer.addFive([])).to.be.equal(undefined);
        })
        it("invalid parameter", () => {
            expect(mathEnforcer.addFive({})).to.be.equal(undefined);
        })

        it("valid parameter", () => {
            expect(mathEnforcer.addFive(4)).to.be.equal(9);
        })
        it("valid parameter", () => {
            expect(mathEnforcer.addFive(-15)).to.be.equal(-10);
        })
        it("valid parameter", () => {
            expect(mathEnforcer.addFive(3.4)).to.be.equal(8.4);
        })
    })

    describe("subtractTen", () => {
        it("invalid parameter", () => {
            expect(mathEnforcer.subtractTen('')).to.be.equal(undefined);
            expect(mathEnforcer.subtractTen('ahtat')).to.be.equal(undefined);
        })
        it("invalid parameter", () => {
            expect(mathEnforcer.subtractTen([])).to.be.equal(undefined);
        })
        it("invalid parameter", () => {
            expect(mathEnforcer.subtractTen({})).to.be.equal(undefined);
        })

        it("valid parameter", () => {
            expect(mathEnforcer.subtractTen(4)).to.be.equal(-6);
        })
        it("valid parameter", () => {
            expect(mathEnforcer.subtractTen(-15)).to.be.equal(-25);
        })
        it("valid parameter", () => {
            expect(mathEnforcer.subtractTen(3.5)).to.be.equal(-6.5);
        })
    })

    describe("sum", () => {
        describe("first parameter ", () => {
            it("invalid parameter", () => {
                expect(mathEnforcer.sum('', 4)).to.be.equal(undefined);
                expect(mathEnforcer.sum({}, 4)).to.be.equal(undefined);
                expect(mathEnforcer.sum([], 4)).to.be.equal(undefined);
                expect(mathEnforcer.sum('sf', 4)).to.be.equal(undefined);

            })
        })

        describe("second parameter ", () => {
            it("invalid parameter", () => {
                expect(mathEnforcer.sum(3, '')).to.be.equal(undefined);
                expect(mathEnforcer.sum(3, [])).to.be.equal(undefined);
                expect(mathEnforcer.sum(3, {})).to.be.equal(undefined);
                expect(mathEnforcer.sum(3, 'str')).to.be.equal(undefined);
            })

        })

        describe("both parameters invalid", () => {
            it("invalid parameter", () => {
                expect(mathEnforcer.sum('', '')).to.be.equal(undefined);
                expect(mathEnforcer.sum([], [])).to.be.equal(undefined);
                expect(mathEnforcer.sum({}, {})).to.be.equal(undefined);
                expect(mathEnforcer.sum('sa', 'str')).to.be.equal(undefined);
                expect(mathEnforcer.sum('sa', [])).to.be.equal(undefined);
                expect(mathEnforcer.sum()).to.be.equal(undefined);
            })

            it("valid parameter", () => {
                expect(mathEnforcer.sum(3, 4)).to.be.equal(7);
                expect(mathEnforcer.sum(0, 0)).to.be.equal(0);
                expect(mathEnforcer.sum(-5, -10)).to.be.equal(-15);
                expect(mathEnforcer.sum(-13, 25)).to.be.equal(12);
                expect(mathEnforcer.sum(3.8, 4.6)).to.be.closeTo(8.3,0.2);
                expect(mathEnforcer.sum(-3.8, 6)).to.be.closeTo(2.1, 0.2);
                expect(mathEnforcer.sum(-3.8, -4.6)).to.be.closeTo(-8.3, 0.2);
            })
        })
    })

})
