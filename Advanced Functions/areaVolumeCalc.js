
function area() {
    return this.x * this.y;
}
function vol() {
    return this.x * this.y * this.z;
}

function solve(area, vol, input) {
    let res = [];
    let objArray = JSON.parse(input);
    for (let obj of objArray) {
        let a = Math.abs(area.call(obj)); //извикваме функцията area с аргументи, които ще вземем от obj
        let v = Math.abs(vol.call(obj));
        // console.log(a, v);
        res.push({ area: a, volume: v });
    }
    return res;
}
solve(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`);