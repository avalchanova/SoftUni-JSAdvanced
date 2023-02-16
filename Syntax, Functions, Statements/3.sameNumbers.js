function sameNumbers(num) {
    let string = num + "";
    let first = Number(string[0]);
    let sum = first;
    let isSame = true;

    for (let i = 1; i < string.length; i++) {
        if (first != string[i]) {
            isSame = false;
        }
        sum += Number(string[i]);
    }
    console.log(isSame);
    console.log(sum);
}
sameNumbers(2222222);