let { assert } = require("chai");
let { isOddOrEven } = require("./oddOrEven"); //оттук надолу качваме в джъдж

/*
Write one or two tests passing parameters that are NOT of type string to the function and expecting it to return undefined.
After we have checked the validation it's time to check whether the function works correctly with valid arguments. Write a test for each of the cases:
-	One where we pass a string with even length;
-	And one where we pass a string with an odd length;
Finally, make an extra test passing multiple different strings in a row to ensure the function works correctly.
*/

describe("Not of type string", () => {
    it("This should be a STRING, not a number", () => {
        assert.equal(isOddOrEven(1), undefined); //ако ф-ята е с аргумент число, изпиши undefined
    });
    it("This should be a STRING, not an object", () => {
        assert.equal(isOddOrEven({}), undefined);
    });
    it("This should be a STRING, not an array", () => {
        assert.equal(isOddOrEven([]), undefined);
    });
    it('This should be a STRING, not a boolean', () => {
        assert.equal(isOddOrEven(true), undefined);
    });
});
describe("Is the final result correct", () => {
    it("Should result ODD", () => {
        assert.equal(isOddOrEven("Jane-Austen"), "odd");
    });
    it("Should result EVEN", () => {
        assert.equal(isOddOrEven("Spinster"), "even");
    });
})

