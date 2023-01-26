function sumFirstAndLast(arrString) {
    let arr = arrString.map(x => Number(x));

    let res = arr.shift() + arr.pop();
    return res;

}
console.log(sumFirstAndLast(['20', '30', '40']));