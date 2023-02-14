/*
•	last() - returns the last element of the array
•	skip(n) - returns a new array which includes all original elements, except the first n elements; n is a Number parameter
•	take(n) - returns a new array containing the first n elements from the original array; n is a Number parameter
•	sum() - returns a sum of all array elements
•	average() - returns the average of all array elements
*/
(function arrExtention() {
    Array.prototype.last = function () {
        return this[this.length - 1];
    };
    Array.prototype.skip = function (n) {
        return this.slice(n);
    };
    Array.prototype.take = function (n) {
        return this.slice(0, n);
    };
    Array.prototype.sum = function () {
        return this.reduce((previousVal, currentVal) => previousVal + currentVal);
    };
    Array.prototype.average = function () {
        return this.sum() / this.length;
    };
})();