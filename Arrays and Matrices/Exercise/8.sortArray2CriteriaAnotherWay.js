function sortArray2CriteriaAnotherWay(arr) {
    let sorted = arr.sort((a, b) => {
        return a.length - b.length || a.localeCompare(b);
    });
    console.log(sorted.join("\n"));
}
sortArray2CriteriaAnotherWay(["alpha", "beta", "gamma"]);