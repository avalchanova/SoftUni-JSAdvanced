function heroicInventory(inputArr) {
    let res = [];
    for (let el of inputArr) {
        let [name, level, items] = el.split(" / ");
        level = Number(level);
        items = items ? items.split(", ") : [];

        res.push({ name, level, items });
    }
    console.log(JSON.stringify(res));
}
heroicInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);