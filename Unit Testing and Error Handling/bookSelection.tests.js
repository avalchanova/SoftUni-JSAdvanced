let { bookSelection } = require('./solution');
let { assert } = require('chai');

describe("Tests for bookSelection", function () {
    describe('Test isGenreSuitable', () => {
        function concatenateStr(genre, age) {
            return `Books with ${genre} genre are not suitable for kids at ${age} age`;
        }
        it('wrong genre and correct age', () => {
            let expectText = concatenateStr('Thriller', 12);
            assert.equal(bookSelection.isGenreSuitable("Thriller", 12), expectText);
            expectText = concatenateStr('Horror', 12);
            assert.equal(bookSelection.isGenreSuitable('Horror', 12), expectText);
        });
        // it('correct genre "Comedy" incorrect age', () => {
        //     let expectText = concatenateStr('Comedy', 12);
        //     assert.equal(isGenreSuitable('Comedy', 10), expectText);
        // });
        it('correct genre "Horror" and correct age', () => {
            let expText = "Those books are suitable";
            assert.equal(bookSelection.isGenreSuitable('Horror', 13), expText);
            assert.equal(bookSelection.isGenreSuitable('Horror', 25), expText);
            assert.equal(bookSelection.isGenreSuitable('Horror', 32), expText);
        });
        it('correct genre "Thriller" and correct age', () => {
            let expText = "Those books are suitable";
            assert.equal(bookSelection.isGenreSuitable('Thriller', 13), expText);
            assert.equal(bookSelection.isGenreSuitable('Thriller', 25), expText);
            assert.equal(bookSelection.isGenreSuitable('Thriller', 32), expText);
        });

    });
    describe('Test isItAffordable', () => {
        it('money is a problem', () => {
            assert.equal(bookSelection.isItAffordable(101, 100), "You don't have enough money");
            assert.equal(bookSelection.isItAffordable(11, 10), "You don't have enough money");
            assert.equal(bookSelection.isItAffordable(7, 6), "You don't have enough money");
        });
        it('money is NOT a problem', () => {
            assert.equal(bookSelection.isItAffordable(10, 11), `Book bought. You have 1$ left`);
            assert.equal(bookSelection.isItAffordable(100, 110), `Book bought. You have 10$ left`);
            assert.equal(bookSelection.isItAffordable(50, 50), `Book bought. You have 0$ left`);
            assert.equal(bookSelection.isItAffordable(50, 51), `Book bought. You have 0$ left`);
        });
        it('wrong data type', () => { //with "throw" we ensure the function will throw an error 
            assert.throw(() => { bookSelection.isItAffordable('apple', 1), "Invalid input"; });
            assert.throw(() => { bookSelection.isItAffordable('corndog', 6), "Invalid input"; });
            assert.throw(() => { bookSelection.isItAffordable(1, 'corndog'), "Invalid input"; });
            assert.throw(() => { bookSelection.isItAffordable(6, "apple"), "Invalid input"; });
            assert.throw(() => { bookSelection.isItAffordable('apple', 1), "Invalid input"; });
            assert.throw(() => { bookSelection.isItAffordable('1', 6), "Invalid input"; });
        });
    });
    describe('Testing suitableTitles', () => {
        it('wrong data type', () => {
            assert.throw(() => { bookSelection.suitableTitles([], 1), "Invalid input"; });
            assert.throw(() => { bookSelection.suitableTitles([], []), "Invalid input"; });
            assert.throw(() => { bookSelection.suitableTitles([], {}), "Invalid input"; });
            assert.throw(() => { bookSelection.suitableTitles([], () => { }), "Invalid input"; });
            assert.throw(() => { bookSelection.suitableTitles([], true), "Invalid input"; });
            assert.throw(() => { bookSelection.suitableTitles("array", "apple"), "Invalid input"; });
            assert.throw(() => { bookSelection.suitableTitles({}, "apple"), "Invalid input"; });
            assert.throw(() => { bookSelection.suitableTitles(1, "apple"), "Invalid input"; });
            assert.throw(() => { bookSelection.suitableTitles(() => { }, "apple"), "Invalid input"; });
            assert.throw(() => { bookSelection.suitableTitles(true, "apple"), "Invalid input"; });
            assert.throw(() => { bookSelection.suitableTitles(true, true), "Invalid input"; });
        });
        it('correct data', () => {
            let input = [
                { title: "The Da Vinci Code", genre: "Thriller" },
                { title: "Monster-in-Law", genre: "Rom-Com" },
                { title: "Titanic", genre: "Drama" }
            ];
            let result = ["The Da Vinci Code"];
            assert.equal(bookSelection.suitableTitles(input, "Thriller").join(' '), result.join('')); //join-ваме, за да можем да избягаме от сравняването на референциите на ареите, а да сравним стринговете, които не са реферетни стойности и няма да хвърлят грешка
            result = ['Titanic'];
            assert.equal(bookSelection.suitableTitles(input, "Drama").join(' '), result.join('')); //join-ваме, за да можем да избягаме от сравняването на референциите на ареите, а да сравним стринговете, които не са реферетни стойности и няма да хвърлят грешка
            result = ["Monster-in-Law"];
            assert.equal(bookSelection.suitableTitles(input, "Rom-Com").join(' '), result.join('')); //join-ваме, за да можем да избягаме от сравняването на референциите на ареите, а да сравним стринговете, които не са реферетни стойности и няма да хвърлят грешка
            result = [];
            assert.equal(bookSelection.suitableTitles(input, "Comedy").join(' '), result.join('')); //join-ваме, за да можем да избягаме от сравняването на референциите на ареите, а да сравним стринговете, които не са реферетни стойности и няма да хвърлят грешка

        });
    });
});