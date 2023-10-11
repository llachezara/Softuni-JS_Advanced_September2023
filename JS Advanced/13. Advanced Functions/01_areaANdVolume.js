function calcVolumeAndArea(areaFunc, volFunc, arrayOfObjects) {
    const array = JSON.parse(arrayOfObjects);

    let resultArray = [];
    for (const object of array) {
        let area = areaFunc.apply(object);
        let volume = volFunc.apply(object);

        let obj = {
            area,
            volume
        }
        resultArray.push(obj);
    }

    return (resultArray);
}
function area() {
    return Math.abs(this.x * this.y);
};
function vol() {
    return Math.abs(this.x * this.y * this.z);
};
let actual = calcVolumeAndArea(area, vol, '[{"x":"1","y":"2","z":"10"},{"x":"7","y":"7","z":"10"},{"x":"5","y":"2","z":"10"}]');
let expected = [
    { area: 2, volume: 20 },
    { area: 49, volume: 490 },
    { area: 10, volume: 100 }
];
