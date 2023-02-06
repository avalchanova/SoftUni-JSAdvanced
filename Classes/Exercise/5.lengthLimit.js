class Stringer {
    constructor(initialString, l) {
        this.initialString = initialString;
        this.l = l;
        if (this.l < 0) { this.l = 0; }
        this.innerProperty;
        this.innerLength;
        this.string = this.initialString;
    }
    increase(length) {
        return this.string = this.string + this.initialString.substring(this.string.length, length);
    }
    decrease(length) {
        if (length > 0 && this.string.length > length) {
            this.string = this.string.substring(0, length);
            return this.string + '...';
        } else if (length > this.string.length) {
            return this.string = "";
        }
    }
    toString() {
        if (this.string.length < this.initialString.length) {
            return this.initialString.substring(0, this.string.length) + "...";
        } else if (this.string.length === 0) {
            return "...";
        } else if (this.string.length === this.initialString.length) {
            return this.initialString.substring(0, this.string.length);
        }
    }
}


let test = new Stringer("Test", 5);
let test1 = new Stringer('asd');

//console.log(test.string + test.initialString.substring(0, 0));
console.log(test.toString()); // Test
console.log("My name is" + test1.name); // PEsho

test.decrease(3);
console.log(test.toString()); // Tes...

test.decrease(5);§
console.log(test.toString()); // ...

test.increase(4);
console.log(test.toString()); // Test


