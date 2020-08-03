class Circle{
    constructor(...args){
        [this.radius, this.color] = args;
    }
    getRadius(){
        return this.radius;
    }
    getcolor(){
        return this.color;
    }
    setRadius(value){
        this.radius = value;
    }
    setColor(value){
        this.color = value;
    }
    toString(){
        return this.radius + " " + this.color;
    }
    getArea(){
        return 3.14 * 2 * this.radius;
    }
}

let mycircle = new Circle(15,"Red");
console.log(mycircle)
mycircle.setRadius(10)
console.log(mycircle.getRadius())
mycircle.setColor("black")
console.log(mycircle.getcolor())
console.log(mycircle.getArea())
console.log(mycircle.toString())