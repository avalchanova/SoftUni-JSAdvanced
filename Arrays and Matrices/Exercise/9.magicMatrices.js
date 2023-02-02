function magicMatrices(input) {

    let isMagical = true;
    for (let i = 0; i < input.length - 1; i++) {
        let sumRowOne = input[i].reduce((a, b) => a + b);
        let sumRowTwo = input[i + 1].reduce((a, b) => a + b);
        let sumColOne = 0;
        let sumColTwo = 0;
        for (let col = 0; col < input.length; col++) {
            sumColOne += input[i][col];
            sumColTwo += input[i + 1][col];
        }
        if (sumRowOne !== sumRowTwo || sumColOne !== sumColTwo) {
            return isMagical = false;
        }
    }
    return isMagical = true;
}
console.log(magicMatrices([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]));