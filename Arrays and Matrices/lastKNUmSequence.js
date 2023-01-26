function lastKNumSequence(n, k) {
    let res = [1];

    for (let i = 0; i < n - 1; i++) {
        let sequenceK = res.slice(-k);
        let sum = 0;
        for (let el of sequenceK) {
            sum += el;
        }
        res.push(sum);
    }
    return res;
} 
console.log(lastKNumSequence(8, 2));