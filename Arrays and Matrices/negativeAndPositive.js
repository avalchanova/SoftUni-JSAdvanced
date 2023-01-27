function negativeAndPositive(arr) {
    let res = [];

    for (let num of arr) {
        if (num < 0) {
            res.unshift(num);
        } else {
            res.push(num);
        }
    }
    return res.join("\n");
}
console.log(negativeAndPositive([7, -2, 8, 9]));