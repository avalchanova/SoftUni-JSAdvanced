function getPersons() {
    let { Person } = require("./person"); //judge не го приема така, защото не ми вижда класът Пърсън
    let res = [];

    // console.log(Person);
    let personA = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
    //console.log(typeof personA);
    let personB = new Person('SoftUni');
    let personC = new Person('Stephan', 'Johnson', 25);
    let personD = new Person('Gabriel', 'Peterson', 24, "g.p@gmail.com");

    res.push(personA, personB, personC, personD);
    return res;
}
getPersons();
