function lowestPricesInTown(arrayOfStrings) {

    let productsList = {};
    for (const string of arrayOfStrings) {
        let [townName, product, productPrice] = string.split(' | ');
        productPrice = Number(productPrice);

        if (!productsList.hasOwnProperty(product)) {
            productsList[product] = {
                townName,
                productPrice
            }
        } else {
            if (productsList[product].productPrice > productPrice) {
                productsList[product].productPrice = productPrice;
                productsList[product].townName = townName;
            }
        }
    }

    for (const product in productsList) {
        let { townName, productPrice } = productsList[product];

        console.log(`${product} -> ${productPrice} (${townName})`);
    }

}
lowestPricesInTown(['Sofia City | Audi | 100000',
    ' Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    ' Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999'])