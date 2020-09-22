interface petsconfig{
name: string;
breed: string;
age: number;
gender: string;
history?: string;
type:string;
}

interface petscounter{
    name:string,
    count: number
}


class availability{
    pets: petsconfig[];
    petsType: string[];
    petscounter: petscounter[];
    constructor(){
        this.pets = [];
        this.petsType = [];
        this.petscounter = [];
    }
    insert(petsInfo: petsconfig): void{
        var flag:boolean = false;
        this.pets.push(petsInfo);
        for(let x of this.petsType){
         
            if(x == petsInfo.type ){
            flag = true
            }
        }
        if(flag != true)
        {
        this.petsType.push(petsInfo.type);
        }
      
   }
   petsCount(){
       for(let x of this.petsType){
           var counting = 0;
            for (let y of this.pets){
               if(x == y["type"]){
                counting++;
            }
          }
            let obj = {
                name : x,
                count: counting
            }
            this.petscounter.push(obj);
       }
       return this.petscounter;
   }
/*     petsCountFunction(){
       for(let i in this.pets){
           if(this.petsCount[this.pets[i]['type']]) === undefined {
            this.petsCount[this.pets[i]['type'] = 0;
           }
           this.petsCount[this.pets[i]['type'] + 1;
       }
    } */
    display(): petsconfig[]{
       return this.pets
    }
    displayPetsTypes(): string[]{
        return this.petsType;
    }
}

class request{
    customerRequests: string[]
    constructor(){
        this.customerRequests = []
    }
    insert(enquiry: any): void{
      this.customerRequests.push(enquiry)
    }
    print(): string[]{
        return this.customerRequests;
    }
  
    }



const availabilityObj = new availability();
availabilityObj.insert({name: "Jim", breed: "siberian", age: 1, gender: "female",  type: "cat"})
availabilityObj.insert({name: "Jimmy", breed: "lab", age: 2, gender: "male", history: "owned by cops", type: "dog"})
availabilityObj.insert({name: "Jimmy", breed: "lab", age: 2, gender: "male", history: "owned by cops", type: "monkey"})
availabilityObj.insert({name: "Jim", breed: "siberian", age: 1, gender: "female",  type: "cat"})
availabilityObj.insert({name: "Jim", breed: "siberian", age: 1, gender: "female",  type: "cat"})

const requestobject = new request();
requestobject.insert(["dog", "cat"]);
requestobject.insert(["giraffe", "cat", "monkey"]);
//console.log(availabilityObj.display());
//console.log(availabilityObj.displayPetsTypes());
console.log(availabilityObj.petsCount());
console.log(requestobject.print());

/* Venkat sir i am currently struggling with
Write a method to find the status (available or not ) of the first 5 enquiry in request class, based on the data present in the availability collection.
Write  a method  that maps the request data with availability data,  explaining how many  incoming requests are matching with  each entry (pet availability) found in availability collection.
 */