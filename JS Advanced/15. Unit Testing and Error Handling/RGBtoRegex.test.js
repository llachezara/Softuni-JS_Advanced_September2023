const expect = require('chai').expect;
const { rgbToHexColor } = require('./RGBtoRegex.js');
it("should return undefined", function () {
    expect(rgbToHexColor('', 234, 236)).to.be.equal(undefined);
})

describe(
    "rgb function returns undefined when input type is different from number",
    function () {
        it("should return undefined", function () {
            expect(rgbToHexColor([], [], [])).to.be.equal(undefined);
        })
        it("should return undefined", function () {
            expect(rgbToHexColor({}, {}, {})).to.be.equal(undefined);
        })
        it("should return undefined", function () {
            expect(rgbToHexColor('', '', '')).to.be.equal(undefined);
        })
        it("should return undefined", function () {
            expect(rgbToHexColor('affadv', 'afbafdb', 'qd')).to.be.equal(undefined);
        })
        
    })
describe(
    "rgb function test valid input",
    function () {
        it("should return hex", function () {
            expect(rgbToHexColor(66, 135, 245)).to.be.equal('#4287F5');
        })
        it("should return hex", function () {
            expect(rgbToHexColor(164, 245, 66)).to.be.equal('#A4F542');
        })
        it("should return hex", function () {
            expect(rgbToHexColor(245, 66, 120)).to.be.equal('#F54278');
        })
        it("should return hex", function () {
            expect(rgbToHexColor(66, 135, 245)).to.be.equal('#4287F5');
        })
        it("should return hex", function () {
            expect(rgbToHexColor(0, 0, 0)).to.be.equal('#000000');
        })
        it("should return hex", function () {
            expect(rgbToHexColor(255, 255, 255)).to.be.equal('#FFFFFF');
        })

    })
describe(
    "rgb function test invalid value",
    function () {
        it("should return undefined", function () {
            expect(rgbToHexColor(-1, 5, 6)).to.be.equal(undefined);
        })
        it("should return undefined", function () {
            expect(rgbToHexColor(12, -30, 9)).to.be.equal(undefined);
        })
        it("should return undefined", function () {
            expect(rgbToHexColor(5, 7, -45)).to.be.equal(undefined);
        })

        it("should return undefined", function () {
            expect(rgbToHexColor(279, 258, 289)).to.be.equal(undefined);
        })
        it("should return undefined", function () {
            expect(rgbToHexColor(256, 7, 9)).to.be.equal(undefined);
        })
        it("should return undefined", function () {
            expect(rgbToHexColor(5, 7, 280)).to.be.equal(undefined);
        })
        it("should return undefined", function () {
            expect(rgbToHexColor(300, 456, 280)).to.be.equal(undefined);
        })

    })