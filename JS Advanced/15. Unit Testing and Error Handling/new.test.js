const expect = require('chai').expect;

const { sum } = require('./new.js');

describe('sum', function () {
    it("should equal 5", function () {

        let result = sum(2,3);
        expect(result).to.be.equal(5);
    })
});