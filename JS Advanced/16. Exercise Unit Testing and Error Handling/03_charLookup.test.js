const { expect } = require('chai');
const { lookupChar } = require('./03_charLookup.js');

describe('test lookupChar', () => {
    it('test invalid first parameter', () => {
        expect(lookupChar([], 3)).to.be.equal(undefined);
    })
    it('test invalid first parameter', () => {
        expect(lookupChar({}, 3)).to.be.equal(undefined);
    })
    it('test invalid first parameter', () => {
        expect(lookupChar(3, 3)).to.be.equal(undefined);
    })

    it('test invalid second parameter', () => {
        expect(lookupChar('str', [])).to.be.equal(undefined);
    })
    it('test invalid second parameter', () => {
        expect(lookupChar('string', {})).to.be.equal(undefined);
    })
    it('test invalid second parameter', () => {
        expect(lookupChar('s', 'string')).to.be.equal(undefined);
    })
    it('test invalid second parameter', () => {
        expect(lookupChar('s', 3.4)).to.be.equal(undefined);
    })

    it('test invalid index', () => {
        expect(lookupChar('s', -1)).to.be.equal("Incorrect index");
    })
    it('test index bigger than length of string', () => {
        expect(lookupChar('string', 10)).to.be.equal("Incorrect index");
    })

    it('test valid parameters', () => {
        expect(lookupChar('s', 0)).to.be.equal('s');
    })
    it('test valid parameters', () => {
        expect(lookupChar('string', 4)).to.be.equal("n");
    })
    it('test valid parameters', () => {
        expect(lookupChar('pineapple',8 )).to.be.equal("e");
    })    
})