function addRemoveElements(commandsArr) {
    let res = [];
    let sum = 0;
    for (let command of commandsArr) {
        sum++;
        switch (command) {
            case "add":
                res.push(sum);
                break;
            case "remove":
                res.pop(sum);
                break;
        }
    }
    if (res.length > 0) {
        console.log(res.join("\n"));
    } else {
        console.log("Empty");
    }
}
addRemoveElements(['remove',
    'remove',
    'remove']
);
