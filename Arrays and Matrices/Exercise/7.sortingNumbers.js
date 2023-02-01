function sortingNumbers(arr) {
    arr.sort((a, b) => a - b);

    for (let i = 1; i < arr.length; i += 2) {
        let x = arr.pop();
        arr.splice(i, 0, x);
    }
    return arr;
}
sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);

//             [-3, 1, 3, 18, 31, 48, 52, 56, 63, 65]

