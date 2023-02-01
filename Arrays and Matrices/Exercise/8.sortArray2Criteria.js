function sortArray2Criteria(array) {
    let sorted = array.sort((a, b) => {
        if (a.length !== b.length) {
            return a.length - b.length;
        } else {
            return a.localeCompare(b);
        }
    });
    console.log(sorted.join("\n"));
}
sortArray2Criteria(['alpha', 'beta', 'gamma']);
console.log("----------");
sortArray2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);

