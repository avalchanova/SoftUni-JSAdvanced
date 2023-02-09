function constructionCrew(worker) {

    if (worker.dizziness) {
        let neededWater = 0.1 * worker.weight * worker.experience;
        // console.log(neededWater);
        worker.levelOfHydrated += neededWater;
        worker.dizziness = false;
    }
    return worker;
}
constructionCrew(
    {
        weight: 95,
        experience: 3,
        levelOfHydrated: 0,
        dizziness: false
    }

);
console.log("----");
constructionCrew({
    weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true
});