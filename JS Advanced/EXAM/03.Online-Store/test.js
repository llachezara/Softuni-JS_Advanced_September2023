const { expect } = require('chai');
const onlineStore = require('./onlineStore')

describe("isProductAvailable", () => {
    it("invalid params", function () {
        expect(() => onlineStore.isProductAvailable(9, "")).to.throw("Invalid input.");
    })

    it("no stock", function () {
        expect(onlineStore.isProductAvailable("apple", 0)).to.equal("Sorry, apple is currently out of stock.");
    })

    it("in stock", function () {
        expect(onlineStore.isProductAvailable("apple", 5)).to.equal("Great! apple is available for purchase.");
    })
    it("in stock", function () {
        expect(onlineStore.isProductAvailable("apple", 5.35)).to.equal("Great! apple is available for purchase.");
    })

})

describe("canAffordProduct", () => {
    it("invalid params", function () {
        expect(() => onlineStore.canAffordProduct("", "")).to.throw("Invalid input.");
    })

    it("can afford", function () {
        const remainingBalance = 3 - 3;
        expect(onlineStore.canAffordProduct(3, 3)).to.equal(`Product purchased. Your remaining balance is $${remainingBalance}.`);
    })
    it("can afford decimal ", function () {
        const remainingBalance = 4 - 3.56;
        expect(onlineStore.canAffordProduct(3.56, 4)).to.equal(`Product purchased. Your remaining balance is $${remainingBalance}.`);
    })

    it("can't afford", function () {
        const remainingBalance = 3 - 10;
        expect(onlineStore.canAffordProduct(10, 3)).to.equal("You don't have sufficient funds to buy this product.");
    })
    it("can't afford", function () {
        const remainingBalance = 3 - 10;
        expect(onlineStore.canAffordProduct(4.75, 2.3)).to.equal("You don't have sufficient funds to buy this product.");
    })
})

describe("getRecommendedProducts", () => {
    it("invalid params", function () {
        expect(() => onlineStore.getRecommendedProducts("", [])).to.throw("Invalid input.");
    })

    it("In category", function () {
        expect(onlineStore.getRecommendedProducts(
            [
                {
                    name: "Camera",
                    category: "Photography"
                },
                {
                    name: "Tablet",
                    category: "Photography"
                },
                {
                    name: "Phone",
                    category: "Photography"
                }
            ], "Photography")).to.equal("Recommended products in the Photography category: Camera, Tablet, Phone");
    })

    it("No products", function () {
        expect(onlineStore.getRecommendedProducts(
            [], "Photography")).to.equal("Sorry, we currently have no recommended products in the Photography category.");
    })
    it("No products", function () {
        expect(onlineStore.getRecommendedProducts(
            [
                {
                    name: "Camera",
                    category: "No"
                },
                {
                    name: "Tablet",
                    category: "No"
                },
                {
                    name: "Phone",
                    category: "No"
                }
            ], "Photography")).to.equal("Sorry, we currently have no recommended products in the Photography category.");
    })
})