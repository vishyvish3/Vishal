class calculator{
    constructor(val1,val2){
        this.val1 = val1
        this.val2 = val2
    }
    add(){
        return this.val1+this.val2
    }
    subtract(){
        return this.val1-this.val2
    }
    multiply(){
        return this.val1*this.val2
    }
    divide(){
        if(this.val2===0){
            console.log("Divide by zero error")
        }else{
            return this.val1/this.val2
        }
    }
    mod(){
        return this.val1%this.val2
    }
}
let calc = new calculator(40, 50);
console.log(calc.add())
console.log(calc.subtract())
console.log(calc.multiply())
console.log(calc.divide())
console.log(calc.mod())