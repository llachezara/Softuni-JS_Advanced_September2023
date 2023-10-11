function processCommands() {

    let storage = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    }

    let foods = {
        apple: {
            carbohydrate: 1,
            flavour: 2,
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20,
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3,
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1,
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10,
        }
    }

    return (command) => {
        let data = command.split(' ');
        let instruction = data[0];

        let allInstructions = {
            restock: (microelement, quantity) => {
                storage[microelement] += Number(quantity);
                return "Success";
            },
            prepare: (recipe, quantity) => {
                let product = foods[recipe];
                let microelements = Object.entries(product);

                let cannotPrepareRecipe = false;
                
                for (const [elementName, elementQuantity] of microelements) {
                    storage[elementName] -= Number(elementQuantity) * Number(quantity);

                    if (storage[elementName] < 0) {
                        cannotPrepareRecipe = true;
                        storage[elementName] = 0;
                        return `Error: not enough ${elementName} in stock`;
                    }
                }

                if (!cannotPrepareRecipe) {
                    return "Success";
                }

            },
            report: () => {
                let result = [];

                Object.keys(storage).forEach(element => {
                    let quantity = storage[element];
                    result.push(`${element}=${quantity}`);
                });

                return result.join(' ');
            },
        }

        return allInstructions[instruction](data[1], data[2]);
    }
}

let manager = processCommands();
/*
 ['restock carbohydrate 10', 'Success'],
    ['restock flavour 10', 'Success'],
    ['prepare apple 1', 'Success'],
    ['restock fat 10', 'Success'],
    ['prepare burger 1', 'Success'],
    ['report', 'protein=0 carbohydrate=4 fat=3 flavour=5']
*/

console.log(manager('restock carbohydrate 10'));
console.log(manager('restock flavour 10'));
console.log(manager("prepare apple 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare burger 1"));
console.log(manager("report")); // Error: not enough carbohydrate in stock 
