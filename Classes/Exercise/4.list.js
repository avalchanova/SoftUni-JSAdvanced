class List {
    constructor(arr = []) {
        this.arr = arr.sort((a, b) => a - b);
        this.size = this.arr.length;
    }
    add(element) {
        this.arr.push(element);
        this.arr.sort((a, b) => a - b);
        this.size++;
        return this.arr;
    }
    remove(index) {
        if (index < 0 || index >= this.arr.length) {
            throw new Error("Incorrect index");
        } else {
            this.size--;
            return this.arr.splice(index, 1);
        }
    }
    get(index) {
        if (index < 0 || index >= this.arr.length) {
            throw new Error("Incorrect index");
        } else {
            return this.arr[index];
        }
    }
}
let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
console.log(list.size);
list.add(3);
list.add(100);
console.log(list.arr);
