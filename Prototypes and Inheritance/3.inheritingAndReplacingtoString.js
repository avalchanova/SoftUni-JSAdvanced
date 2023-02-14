function toStr() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }
        toString() { //here it is interesting how we take the class name and how we modify the method in each class inheritance
            let className = this.constructor.name;
            return `${className} (name: ${this.name}, email: ${this.email})`;
        }
    }
    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }
        toString() {
            let base = super.toString().slice(0, -1);
            return `${base}, subject: ${this.subject})`;
        }
        //toString() { return `Student (name: ${this.name}, email: ${this.email}, course: ${this.course})`; }
    }
    class Student extends Person {
        constructor(name, email, course) {
            super(name, email);
            this.course = course;
        }
        toString() {
            let base = super.toString().slice(0, -1);
            return `${base}, course: ${this.course})`;
        }
        //toString() { return `Teacher (name: ${this.name}, email: ${this.email}, subject: ${this.subject})`; }
    }
    return {
        Person,
        Teacher,
        Student
    };
}
toStr();

let classes = toStr();
let Person = classes.Person;
let Teacher = classes.Teacher;
let Student = classes.Student;

let t = new Student("Ivan", 'ivan@ivan.com', "Graphics");
console.log(t.toString())
//expect(t.toString()).to.equal('Teacher (name: Ivan, email: ivan@ivan.com, subject: Graphics)');