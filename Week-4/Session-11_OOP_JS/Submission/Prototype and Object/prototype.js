const Vehicle = {
    make: 'merc',
    model: 'benz',
    year: '2003',
}

Vehicle.__proto__.getDetails = function(){
    return this.make + this.model + this.year 
}

console.log(Vehicle)

class Car {
    constructor(make, model, year, numDoors){
        this.make = make;
        this.model = model;
        this.year = year;
        this.numDoors = numDoors;
    }
}

Object.setPrototypeOf(Car.prototype,Vehicle)

Car.prototype.getDetails = function(){
    return this.make + this.model + this.year + this.numDoors;
}

let marutiObj = new Car('maruti', 'baleno', 2013, 4)
console.log(marutiObj.getDetails())