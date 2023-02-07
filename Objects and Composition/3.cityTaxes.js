function cityTaxes(town, population, treasury) {
    let obj = {
        town,
        population,
        treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += Math.floor(this.population * this.taxRate / 100);
        },
        applyGrowth(percent) {
            this.population += Math.floor(this.population * percent / 100);
        },
        applyRecession(percent) {
            this.treasury -= Math.floor(this.treasury * percent / 100);
        }
    };
    return obj;
}
const city =
    cityTaxes('Tortuga',
        7000,
        15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);
