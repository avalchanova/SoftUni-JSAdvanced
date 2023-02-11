function townsToJSON(data) {
    data.shift();
    let res = [];

    for (let line of data) {
        let splitted = line.split("|");
        //console.log(splitted);

        let Town = splitted[1].trim();
        let Latitude = +(Number(splitted[2].trim()).toFixed(2));
        let Longitude = +(Number(splitted[3].trim()).toFixed(2));

        let obj = {
            Town,
            Latitude,
            Longitude
        };
        res.push(obj);
    }
    console.log(JSON.stringify(res));
}

townsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']);