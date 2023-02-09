function lowestpricesInCities(data) {
    let obj = {};

    for (let line of data) {
        let [town, product, price] = line.split(" | ");
        price = Number(price);
        if (obj.hasOwnProperty(product)) {
            let currentPrice = obj[product]["price"];
            if (currentPrice > price) {
                obj[product] = { town, price };
            }
        } else {
            obj[product] = { town, price };
        }
    }
    for (let [product, value] of Object.entries(obj)) {
        console.log(`${product} -> ${value.price} (${value.town})`);
    }
}
lowestpricesInCities(['Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999']);