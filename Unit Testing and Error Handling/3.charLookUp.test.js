let { assert } = require("chai");
let { lookupChar } = require("./charLookUp");

describe("Testing the first and second param type", () => {
    it("Result should be undefined with first param a number", () => {
        assert.equal(lookupChar(5, 5), undefined);
    });
    it("Result should be undefined with first param an obj", () => {
        assert.equal(lookupChar({}, 0), undefined);
    });
    it("Result should be undefined with first param an arr", () => {
        assert.equal(lookupChar([], 0), undefined);
    });
    it("Result should be undefined with first param a boolean", () => {
        assert.equal(lookupChar(true, 0), undefined);
    });

    // it("Result should be undefined with first param a function", () => {
    //     assert.equal(lookupChar(() => { }, 0), undefined);
    // });
    it("Result should be undefines with second param an obj", () => {
        assert.equal(lookupChar("string", {}), undefined);
    });
    it("Result should be undefines with second param an arr", () => {
        assert.equal(lookupChar("string", []), undefined);
    });
    it("Result should be undefines with second param a boolean", () => {
        assert.equal(lookupChar("string", true), undefined);
    });
    // it("Result should be undefines with second param a function", () => {
    //     assert.equal(lookupChar("string", () => { }), undefined);
    // });
    it("Result should be undefines with second param a string", () => {
        assert.equal(lookupChar("string", "apple"), undefined);
    });
    it("Result should be undefines with second param is a floating num", () => {
        assert.equal(lookupChar("string", 5.5), undefined);
    });
});
describe("Testing the index' length", () => {
    it("Result should be 'Incorrect index' if index<0", () => {
        assert.equal(lookupChar('apple', -1), "Incorrect index");
    });
    it('Result should be "Incorrect index" if index.length=str.length', () => {
        assert.equal(lookupChar('apple', 5), "Incorrect index");
    });
    it('Result should be "Incorrect index" if index.length>str.length', () => {
        assert.equal(lookupChar('apple', 800), "Incorrect index");
    });
});
describe("Testing correct input", () => {
    it('Result should be "a" if index is 0', () => {
        assert.equal(lookupChar('apple', 0), "a");
    });
    it('Result should be "h" if index is 6', () => {
        assert.equal(lookupChar('ostrich', 6), "h");
    });
});