function townPop(arr) {
    let registry = {};
    let townData = arr.map(element => {
        let data = element.split(" <-> ");
        return {
            name: data[0],
            pop: Number(data[1])
        };
    });

    //console.log(typeof townData);
    for (let town of townData) {
        if (registry[town.name] == undefined) {
            registry[town.name] = town.pop;
        } else {
            registry[town.name] += town.pop;
        }
    }
    for (let town in registry) {
        console.log(`${town} : ${registry[town]}`);
    }
}
townPop(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']);