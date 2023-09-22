function objectFactory(library, orders) {
    let functions = Object.keys(library);

    let arrayWithComposedObjects = [];
    
    for (let i = 0; i < orders.length; i++) {

        let obj = {};
        let keysOfObj = Object.keys(orders[i].template);
        let [...functionsOfObj] = orders[i].parts;
        console.log(functionsOfObj === orders[i].parts);
        break

        for (const key of keysOfObj) {
            obj[key]= orders[i].template[key];
        }
        for (const func of functionsOfObj) {
            obj[func]= library[func];
        }

        arrayWithComposedObjects.push(obj);
    }

    return arrayWithComposedObjects;
}
/*
function factory(library, orders) {
const result = [];
for (let order of orders) {
// Create a copy of the 'template' object from the current order
const current = Object.assign({}, order.template);
for (let part of order.parts) {
current[part] = library[part];
}
result.push(current);
}
return result;
}

*/
const library = {
    print: function () {
        console.log(`${this.name} is printing a page`);
    },
    scan: function () {
        console.log(`${this.name} is scanning a document`);
    },
    play: function (artist, track) {
        console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
};

const orders = [
    {
        template: { name: 'ACME Printer' },
        parts: ['print']
    },
    {
        template: { name: 'Initech Scanner' },
        parts: ['scan']
    },
    {
        template: { name: 'ComTron Copier' },
        parts: ['scan', 'print']
    },
    {
        template: { name: 'BoomBox Stereo' },
        parts: ['play']
    }
];
const products = objectFactory(library, orders);
console.table(products);

