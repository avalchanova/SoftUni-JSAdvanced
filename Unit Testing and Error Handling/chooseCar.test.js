let { chooseYourCar } = require('./chooseYourCar');
let { assert } = require('chai');

describe('Testing CHOOSEYOURCAR', () => {
    //no need to check input
    describe('Testing for choosingType', () => {
        it('incorrect year', () => {
            assert.throw(() => { chooseYourCar.choosingType("Sedan", "red", 1899), "Invalid Year!"; });
            assert.throw(() => { chooseYourCar.choosingType("Sedan", "red", 2045), "Invalid Year!"; });
        });
        it('incorrect type', () => {
            assert.throw(() => { chooseYourCar.choosingType("Pickup", "blue", 1900), "This type of car is not what you are looking for."; });
            assert.throw(() => { chooseYourCar.choosingType("Combi", "blue", 1900), "This type of car is not what you are looking for."; });

        });
        function concatenateStr(color, type) {
            return `This ${color} ${type} meets the requirements, that you have.`;
        }
        it('to be picked up', () => {
            let expectedText = concatenateStr("blue", "Sedan");
            assert.equal(chooseYourCar.choosingType('Sedan', 'blue', 2015), expectedText);
            assert.equal(chooseYourCar.choosingType('Sedan', 'blue', 2010), expectedText);
        });
        it('it is too old', () => {
            let expectedText = "This Sedan is too old for you, especially with that black color.";
            assert.equal(chooseYourCar.choosingType("Sedan", "black", 2009), expectedText);
            assert.equal(chooseYourCar.choosingType("Sedan", "blue", 2009), "This Sedan is too old for you, especially with that blue color.");
        });
    });
    describe('Testing for brandName', () => {
        it('testing input wrong type', () => {
            assert.throw(() => { chooseYourCar.brandName([], "string"), "Invalid Information!"; });
            assert.throw(() => { chooseYourCar.brandName([], true), "Invalid Information!"; });
            assert.throw(() => { chooseYourCar.brandName([], {}), "Invalid Information!"; });
            assert.throw(() => { chooseYourCar.brandName([], () => { }), "Invalid Information!"; });
            assert.throw(() => { chooseYourCar.brandName([], 1.6), "Invalid Information!"; });
            assert.throw(() => { chooseYourCar.brandName([], -1), "Invalid Information!"; });
            assert.throw(() => { chooseYourCar.brandName(1, 1), "Invalid Information!"; });
            assert.throw(() => { chooseYourCar.brandName("string", 1), "Invalid Information!"; });
            assert.throw(() => { chooseYourCar.brandName({}, 1), "Invalid Information!"; });
            assert.throw(() => { chooseYourCar.brandName(() => { }, 1), "Invalid Information!"; });
            assert.throw(() => { chooseYourCar.brandName(true, 1), "Invalid Information!"; });
        });
        it('testing index of type number', () => {
            assert.throw(() => { chooseYourCar.brandName(["bmw", "opel"], 4), "Invalid Information!"; });
            assert.throw(() => { chooseYourCar.brandName(["bmw", "opel"], 2), "Invalid Information!"; });
        });
        it('testing with correct input', () => {
            //  assert.equal(chooseYourCar.brandName(["BMW", "Opel", "Mercedes"], 1), "BMW, Mercedes");
            assert.equal(chooseYourCar.brandName(["BMW", "OPEL", "MERCEDES"], 1), "BMW, MERCEDES");

        });
    });
    describe('Testing for CarFuelConsumption', () => {
        it("Testing input", () => {
            assert.throw(() => { chooseYourCar.carFuelConsumption(1, "string"), "Invalid Information!"; });
            assert.throw(() => { chooseYourCar.carFuelConsumption(1, []), "Invalid Information!"; });
            assert.throw(() => { chooseYourCar.carFuelConsumption(1, {}), "Invalid Information!"; });
            assert.throw(() => { chooseYourCar.carFuelConsumption(1, true), "Invalid Information!"; });
            assert.throw(() => { chooseYourCar.carFuelConsumption(1, () => { }), "Invalid Information!"; });
            assert.throw(() => { chooseYourCar.carFuelConsumption("apple", 1), "Invalid Information!"; });
            assert.throw(() => { chooseYourCar.carFuelConsumption({}, 1), "Invalid Information!"; });
            assert.throw(() => { chooseYourCar.carFuelConsumption([], 1), "Invalid Information!"; });
            assert.throw(() => { chooseYourCar.carFuelConsumption(true, 1), "Invalid Information!"; });
            assert.throw(() => { chooseYourCar.carFuelConsumption(() => { }, 1), "Invalid Information!"; });
            assert.throw(() => { chooseYourCar.carFuelConsumption(1, -1), "Invalid Information!"; });
            assert.throw(() => { chooseYourCar.carFuelConsumption(-1, 1), "Invalid Information!"; });
            assert.throw(() => { chooseYourCar.carFuelConsumption(0, 1), "Invalid Information!"; });
            assert.throw(() => { chooseYourCar.carFuelConsumption(1, 0), "Invalid Information!"; });


        });
        it("Testing litersPerHundredKm", () => {
            assert.equal(chooseYourCar.carFuelConsumption(50, 5), `The car burns too much fuel - 10 liters!`);
            assert.equal(chooseYourCar.carFuelConsumption(50, 2), "The car is efficient enough, it burns 4 liters/100 km.");
            assert.equal(chooseYourCar.carFuelConsumption(100, 7), "The car is efficient enough, it burns 7 liters/100 km.");

        });

    });

});