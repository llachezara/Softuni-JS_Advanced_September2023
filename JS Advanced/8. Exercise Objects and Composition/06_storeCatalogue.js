function printInfoLikeCatalogue(arrayOfStrings) {
    let catalogue = {};
    for (const string of arrayOfStrings) {
        let [product, price] = string.split(' : ');
        catalogue[product] = price;
    }

    let sortedKeys = Object.keys(catalogue).sort((a, b) => a.localeCompare(b));

    let letter = '';
    for (let i = 0; i < sortedKeys.length; i++) {
        let currKey = sortedKeys[i];

        if (letter !== currKey[0]) {
            letter = currKey[0];
            console.log(letter);
        }

        let productAndPriceString = `${currKey}: ${catalogue[currKey]}`;
        console.log(productAndPriceString);

    }
}
printInfoLikeCatalogue(['Banana : 2',"Rubic's Cube : 5",
'Raspberry P : 4999',
'Rolex : 100000',
'Rollon : 10',
'Rali Car : 2000000',
'Pesho : 0.000001',
'Barrel : 10']
);