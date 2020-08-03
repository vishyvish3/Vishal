class TV{
    constructor(brand,price,inches,OnOffstatus,channel=1,volume=50){
        this.brand = brand
        this.price = price
        this.inches = inches
        this.OnOffstatus = OnOffstatus
        this.channel = channel
        this.volume = volume
    }

    increaseVolume(){
        if(this.volume<100){
            this.volume++
        }
    }

    decreaseVolume(){
        if(this.volume>0){
            this.volume--
        }
    }

    reset(){
        this.volume = 50
        this.channel = 1
    }

    status(){
        return this.brand + ' at channel ' + this.channel + ', volume' + this.volume;
    }

    setChannel(value){
        if(value > 50){
            // pass
        }else if(value<50 && value>0){
            this.channel = value
        }
    }
}

class LED extends TV{
    constructor(screenThickness, energyUse, lifeSpan, refreshRate, ...args){
        super(args);
        this.screenThickness = screenThickness;
        this.energyUse = energyUse;
        this.lifeSpan = lifeSpan;
        this.refreshRate = refreshRate;
    }

    viewingAngel(){ 
        return this.viewingAngel;
    }
    backLight(){
        return this.backLight;
    }
    display(){ 
        return this.energyUse + this.lifeSpan + this.refreshRate
    }
}

class PlasmaTV extends TV{
    constructor(screenThickness, energyUse, lifeSpan, refreshRate, ...args){
        super(args);
        this.screenThickness = screenThickness;
        this.energyUse = energyUse;
        this.lifeSpan = lifeSpan;
        this.refreshRate = refreshRate;
    }

    viewingAngel(){ 
        return this.viewingAngel;
    }
    backLight(){ 
        return this.backLight;
    }
    display(){ 
        return this.energyUse + this.lifeSpan + this.refreshRate
    }
}

let mytv = new TV("toshiba",100,150,"On")
console.log(mytv)

let myLED = new LED(250,15,50,50,brand="lg",price=50000,inches=120,OnOffstatus="ON")
console.log(myLED)