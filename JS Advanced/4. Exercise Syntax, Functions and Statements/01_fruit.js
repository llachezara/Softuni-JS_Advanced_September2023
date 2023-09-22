function calculateMoneyToBuyFruit(fruitType, weightInGrams, pricePerKilogram) {

    weightInKilograms = weightInGrams / 1000;
    neededMoney = weightInKilograms * pricePerKilogram;

    console.log(`I need $${neededMoney.toFixed(2)} to buy ${weightInKilograms.toFixed(2)} kilograms ${fruitType}.`);
}
calculateMoneyToBuyFruit('orange', 2500, 1.80);