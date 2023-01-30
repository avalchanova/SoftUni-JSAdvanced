function biggestElement(matrix) {
    let arr = [];
    let l1 = matrix.length;
    let l2 = matrix[0].length;


    for (let i = 0; i < l1; i++) {
        for (let k = 0; k < l2; k++) {
            arr.push(matrix[i][k]);
        }
    }
    let sorted = arr.sort((a, b) => a - b);
    console.log(sorted.pop());
}
biggestElement([[3, 5, 7, 12], [-1, 4, 33, 2], [8, 3, 0, 4]]);