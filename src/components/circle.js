// import using require
const Shape = require('./shape');
// declare class
class Circle extends Shape{
    constructor(){
        super();
    }
    calculateArea(){
        console.log("Area of circle of color " + this.color + " is:");
        return 3.14 * 2 * 2;
    }
}

// export class using module.exports
module.exports = Circle;