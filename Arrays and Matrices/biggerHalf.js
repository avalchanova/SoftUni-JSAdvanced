function biggerHalf(arr) {
    let sorted = arr.sort((a, b) => a - b);
    let l = sorted.length;
    let res = sorted.slice(l / 2, l);
    return res;
}
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));