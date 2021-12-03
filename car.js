class Car {
    constructor(brand, model, year){
        this.brand = brand;
        this.model = model; 
        this.year = year; 
    }

    pressentaion(){
        console.log(`Jag är en ${this.brand} ${this.model} från år ${this.year}.`)
    }
}

module.exports = Car