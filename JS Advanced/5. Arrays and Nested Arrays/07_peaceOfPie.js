function pieceOfPie(array, startOfSection, endOfSection) {
    let startIndex = array.indexOf(startOfSection);
    let endIndex = array.indexOf(endOfSection);

    let section = array.slice(startIndex, endIndex+1);
    return section;
}
console.log(pieceOfPie(['Apple Crisp',
    'Mississippi Mud Pie',
    'Pot Pie',
    'Steak and Cheese Pie',
    'Butter Chicken Pie',
    'Smoked Fish Pie'],
    'Pot Pie',
    'Smoked Fish Pie'
));