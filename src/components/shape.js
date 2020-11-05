// declare class
class Shape{
    constructor(){
        this.color = "green";
    }
    drawShape(){
        console.log("draw Shape");
    }
    calculateArea(){
        console.log("I need length and width to find area!!!");
    }
}
// export class using module.exports
module.exports = Shape;