function smallestTwoNums(arr) {
    let sortedArr = arr.sort((a, b) => a - b);
    sortedArr.splice(2);
    return sortedArr;
}
console.log(smallestTwoNums([30, 15, 50, 5]));