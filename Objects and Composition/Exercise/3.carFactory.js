function carFactory(data) {
    let car = {};
    car.model = data.model;

    if (data.power <= 90) {
        car.engine = { power: 90, volume: 1800 };
    } else if (data.power <= 120) {
        car.engine = { power: 120, volume: 2400 };
    } else if (data.power <= 200) {
        car.engine = { power: 200, volume: 3500 };
    }

    car.carriage = { type: data.carriage, color: data.color };
    let size = data.wheelsize % 2 !== 0 ? data.wheelsize : data.wheelsize - 1;
    // if (data.wheelsize % 2 !== 0) {
    //     size = data.wheelsize;
    // } else {
    //     size = data.wheelsize - 1;
    // }
    let wheelsArr = [size, size, size, size];
    car.wheels = wheelsArr;

    return car;
}
carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
});
console.log("-----");
carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
});