function extractIncreasingSubsequence(arr) {
    let currentBiggest = arr[0];
    let res = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= currentBiggest) {
            res.push(arr[i]);
            currentBiggest = arr[i];
        }
    }
    return res;

}
extractIncreasingSubsequence([1, 3, 8, 4, 10, 12, 3, 2, 24]);