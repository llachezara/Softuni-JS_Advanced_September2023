const expect = require('chai').expect;
let { isOddOrEven } = require('./02_evenOrOdd.js');

describe("testing function", () => {
    it("test invalid input", () => {
        expect(isOddOrEven([])).to.be.equal(undefined);
        
    })
    it("test invalid input", () => {
        expect(isOddOrEven({})).to.be.equal(undefined);
        
    })
    it("test invalid input", () => {
       
        expect(isOddOrEven(12)).to.be.equal(undefined);
        
    })
    it("test invalid input", () => {
        expect(isOddOrEven(-13)).to.be.equal(undefined);
        
    })
    it("test invalid input", () => {
        expect(isOddOrEven([1,2,3])).to.be.equal(undefined);
        
    })
    it("test no input", () => {
        expect(isOddOrEven()).to.be.equal(undefined);
        
    })


    it("test with valid input", () => {
        expect(isOddOrEven('apple')).to.be.equal('odd');
        
    })
    it("test with valid input", () => {
        expect(isOddOrEven('k')).to.be.equal('odd');
        
    })
    it("test with valid input", () => {
        expect(isOddOrEven('soghtyjff')).to.be.equal('odd');
        
    })
    it("test with valid input", () => {
        expect(isOddOrEven('sock')).to.be.equal('even');
        
    })
    it("test with valid input", () => {
        expect(isOddOrEven('')).to.be.equal('even');
        
    })
  
   
})