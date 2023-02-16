function fruits(fruit, grams, pricePerKg) {
    let kg = grams / 1000;

    console.log(`I need $${(pricePerKg * kg).toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${fruit}.`);
}
fruits('orange', 2500, 1.80);