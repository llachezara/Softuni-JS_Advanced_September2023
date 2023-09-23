function printMoreCarInfo(objectWithInfo) {
    let model = objectWithInfo.model;
    let color = objectWithInfo.color;
    let power = objectWithInfo.power;
    let type = objectWithInfo.carriage;
    let wheelsize = objectWithInfo.wheelsize;

    let engine = {};
    let typesOfEngines = {
        'Small engine': { power: 90, volume: 1800 },
        'Normal engine': { power: 120, volume: 2400 },
        'Monster engine': { power: 200, volume: 3500 }

    };

    if (power <= 90) {
        engine = typesOfEngines['Small engine'];
    } else if (power <= 120) {
        engine = typesOfEngines['Normal engine'];
    } else {
        engine = typesOfEngines['Monster engine'];
    }

    let carriage = {
        type,
        color
    }

    let emptyArray = [0,0,0,0];
    let wheels = wheelsize % 2 == 0 ? emptyArray.fill(wheelsize - 1, 0, 4) : emptyArray.fill(wheelsize, 0, 4);
    return {
        model,
        engine,
        carriage,
        wheels
    }
}
console.log(printMoreCarInfo({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}
));