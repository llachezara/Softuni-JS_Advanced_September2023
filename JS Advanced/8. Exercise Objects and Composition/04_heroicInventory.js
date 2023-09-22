function printJSONobjects(arrayOfStrings) {

    let arrayOfObjects = [];

    for (const string of arrayOfStrings) {
        let [name, level, items] = string.split(' / ');

        items = items ? items.split(', ') : [];
        let obj = {
            name,
            level: Number(level),
            items,
        }
        arrayOfObjects.push(obj);
    }
    console.log(JSON.stringify(arrayOfObjects));
}
printJSONobjects(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'])
