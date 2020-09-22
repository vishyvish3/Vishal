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
    //create list of pets available for adoption
    insert(petsInfo: petsconfig): void{
        var flag:boolean = false;
        this.pets.push(petsInfo);
    
    //For dynamically generating the different type of pets()
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

   //count different type of pets like - Dog:3, Cat: 1
   petsCount(): petscounter[]{
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

   //display the pets available in the store
    display(): petsconfig[]{
       return this.pets
    }
    displayPetsTypes(): string[]{
        return this.petsType;
    }
}

class request{
    customerRequests: string[]
    statusList: string[];
    constructor(){
        this.customerRequests = []
        this.statusList = [];
    }

    //insert function to store the customer enquires
    insert(enquiry: any): void{
      this.customerRequests.push(enquiry)
    }

    //print all the customer enquiries
    print(): string[]{
        return this.customerRequests;
    }

    //helper function - check for the status if its available or unavailable and store the result in "staus list" array
    statusCheck(): void{
        let requests: string[] = this.customerRequests;
        let fullPetsList: any = availabilityObj.petsType;
        for(let request of requests){
            
            let flag = false;
            for(let individual of request){
                
                if(fullPetsList.includes(individual)){
                    flag = true;
                }
                else{
                    flag = false;
                    break;
                }
            }
            if(flag){
                this.statusList.push("Available");
            }
            else{
                this.statusList.push("Not avaialable");
            }
         }
    }

    //check how many enquiries is matching with the availability class data
    matchingData(): string{
        this.statusList = [];
        this.statusCheck();
        let availableCounter: number = 0;
        let unavaiableCounter: number = 0;
        for(let status of this.statusList){
            if(status == "Available"){
                availableCounter++
            }
            else{
                unavaiableCounter++;
            }
        }
        let result: string;
        return result = `Enquiries matching the availability data: ${availableCounter} and not matching enquiries: ${unavaiableCounter}`;
    }

    //first five enquiry status
    firstFiveEnquiry(): string[]{
        this.statusList = [];
        this.statusCheck();
        return this.statusList.slice(0,5);
    }

    }



const availabilityObj = new availability();
availabilityObj.insert({name: "Tim", breed: "siberian", age: 1, gender: "female",  type: "cat"})
availabilityObj.insert({name: "Jimmy", breed: "lab", age: 2, gender: "male", history: "owned by cops", type: "dog"})
availabilityObj.insert({name: "Leo", breed: "generic", age: 7, gender: "female", history: "owned by circus", type: "monkey"})
availabilityObj.insert({name: "Sara", breed: "generic", age: 3, gender: "female",  type: "cat"})
availabilityObj.insert({name: "Cleo", breed: "siberian", age: 1, gender: "male",  type: "cat"})

const requestobject = new request();
requestobject.insert(["dog", "cat"]);
requestobject.insert(["giraffe", "cat", "monkey"]);
requestobject.insert(["cat", "monkey"]);
requestobject.insert(["lion", "tiger"]);
requestobject.insert(["goat", "cow", "horse"]);
requestobject.insert(["dog", "cat"]);


console.log("Pets data in the availability class");
console.log(availabilityObj.display());
console.log("************");

console.log("Pets Count");
console.log(availabilityObj.petsCount());
console.log("************");

console.log("First Five Enquiry status");
let firstfiveStatus = requestobject.firstFiveEnquiry();
for (let status in firstfiveStatus){
    console.log(`Enquiry ${+status + 1}: ${firstfiveStatus[status]}`)
}
console.log("************");

//availability class and request class - enquiry matching data
console.log(requestobject.matchingData());

