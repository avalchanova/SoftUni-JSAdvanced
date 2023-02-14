/*
•	truncate(n) – returns the string truncated to n characters by removing words and appends an ellipsis ("..."2) 
    to the end. If a string is less than n characters long, return the same string. If it is longer, split the string 
    where a space occurs and append an ellipsis to it so that the total length is less than or equal to n. 
    If no space occurs anywhere in the string, return n - 3 characters and an ellipsis. If n is less than 4, 
    return n amount of periods.
•	format(string, …params) - static method to replace placeholders with parameters. A placeholder is a number surrounded 
    by curly braces. If parameter index cannot be found for a certain placeholder, do not modify it. Note static methods 
    are attached to the String object instead of its prototype. See the examples for more info.
*/

(function myStr() {
    String.prototype.ensureStart = function (str) {
        if (!this.startsWith(str)) {
            return `${str}${this}`;
        } else {
            return this;
        }
    };
    String.prototype.ensureEnd = function (str) {
        if (!this.endsWith(str)) {
            return `${this} ${str}`; //not sure if space is needed here (and in the previous as well)
        } else {
            return this;
        }
    };
    String.prototype.isEmpty = function () {
        if (this.length = 0) {
            return true;
        } else {
            return false;
        }
    };
    String.prototype.truncate = function (n) {
        let str = this;
        let l = str.length;
        let arr = str.split(' ');
        if (l <= n) { // not sure if = is supposed to be here
            return this;
        } else if (n < l && arr.length > 1) { // (n < l)
            for (let times of arr) { //3
                if (l > n) {
                    arr.pop();
                    str = arr.join(' ') + "...";
                    l = str.length;
                }
            }
            arr = str.split(' ');
            return str;
        } else if (arr.length = 1 && n >= 4) {
            n -= 3;
            str = str.replace("...", "");
            str = str[n - 1] + '...';
            arr = Array.of(str);
            return str;
        } else if (n < 4) {
            let res = "";
            for (let i = 0; i < n; i++) {
                res += ".";
            }
            return res;
        }
    };
    String.prototype.format = function (string, ...params) {
        let pattern = /{\d+}/gm;
        if (string.match(pattern).length > 0) {
            for (let word of params) {
                string = string.replace(/{\d+}/, word);
            }
        }
        return this.format;
    };
})();
let str = 'my string';
str = str.ensureStart('my');
str = str.ensureStart('hello ');
str = str.truncate(16);
str = str.truncate(14);
str = str.truncate(8);
str = str.truncate(4);
str = str.truncate(2);
str = str.format('jumps {0} {1}', 'dog');
