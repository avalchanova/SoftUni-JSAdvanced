function processOddPositions(arr) {
    let res = [];

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 !== 0) {
            res.push(arr[i]);
        }
    }
    return res.reverse().map((x) => x * 2);

}
console.log(processOddPositions([10, 15, 20, 25]));