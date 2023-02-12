function createPerson(firstName, lastName) {
    const result = {
        firstName,
        lastName,
    };
    Object.defineProperty(
        result,
        'fullName',
        {
            get() { return result.fullName; },
            set(newName) {
                if (newName.split(' ').length === 2) {
                    result.firstName = newName[0];
                    result.lastName = newName[1];
                }
            }
        }
    );

}


let person = createPerson("Peter", "Ivanov");
console.log(person.fullName); //Peter Ivanov
person.firstName = "George";
console.log(person.fullName); //George Ivanov
// person.lastName = "Peterson";
// console.log(person.fullName); //George Peterson
// person.fullName = "Nikola Tesla";
// console.log(person.firstName); //Nikola
// console.log(person.lastName); //Tesla
