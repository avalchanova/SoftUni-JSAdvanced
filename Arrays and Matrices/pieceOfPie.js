function pieceOfPie(arr, pie1, pie2) {
    let i = arr.indexOf(pie1);
    let k = arr.indexOf(pie2);
    let rez = arr.slice(i, k + 1);
    return rez;
}
console.log(pieceOfPie(['Apple Crisp',
    'Mississippi Mud Pie',
    'Pot Pie',
    'Steak and Cheese Pie',
    'Butter Chicken Pie',
    'Smoked Fish Pie'],
    'Pot Pie',
    'Smoked Fish Pie'));