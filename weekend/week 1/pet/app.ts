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
    this.petscounter= [];
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
availabilityObj.insert({name: "Tim", breed: "siberian", age: 1, gender: "female",history: "from turkey",  type: "cat"})
availabilityObj.insert({name: "Jimmy", breed: "lab", age: 2, gender: "male", history: "owned by cops", type: "dog"})
availabilityObj.insert({name: "Leo", breed: "generic", age: 7, gender: "female", history: "owned by circus", type: "monkey"})
availabilityObj.insert({name: "Sara", breed: "generic", age: 3, gender: "female",history: "from sweden",  type: "cat"})
availabilityObj.insert({name: "Cleo", breed: "siberian", age: 1, gender: "male", history: "rare breed", type: "cat"})

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
let res = requestobject.matchingData();
console.log(res)

//**********************************//
//DOM MANIPULATION 

window.addEventListener('load', (event) => {
    (<HTMLSelectElement>document.getElementById('view_pets')).click();
});

function viewInsertForm(event: Event): void{
  event.preventDefault;
  (<HTMLSelectElement>document.getElementById("contact_form")).style.display = 'initial';
  (<HTMLSelectElement>document.getElementById("availabilty_table")).style.display = 'none';
  (<HTMLSelectElement>document.getElementById("petsCountTable")).style.display = 'none';
  (<HTMLSelectElement>document.getElementById("firstfive")).style.display = 'none';
  (<HTMLSelectElement>document.getElementById("matching_data")).style.display = 'none';
  (<HTMLSelectElement>document.getElementById("enquiry_form")).style.display = 'none';
}

function insertformSubmit(event: Event): void{
  event.preventDefault();
  var name: string = (<HTMLSelectElement>document.getElementById("name")).value;
  var type: string = (<HTMLSelectElement>document.getElementById("type")).value;
  var breed: string = (<HTMLSelectElement>document.getElementById("breed")).value;
  var age: number  = +(<HTMLSelectElement>document.getElementById("age")).value;
  var gender: string = (<HTMLSelectElement>document.getElementById("gender")).value;
  var history: string = (<HTMLSelectElement>document.getElementById("history")).value;
  availabilityObj.insert({name: name, breed: breed, age: age, gender: gender, history:history,  type: type})
  alert("Added to pets list !! Click on view pets link to checkout the pets list.");
  }

  function enquirePets(event: Event): void{
    event.preventDefault();
    (<HTMLSelectElement>document.getElementById("contact_form")).style.display = 'none';
    (<HTMLSelectElement>document.getElementById("availabilty_table")).style.display = 'none';
    (<HTMLSelectElement>document.getElementById("petsCountTable")).style.display = 'none';
    (<HTMLSelectElement>document.getElementById("firstfive")).style.display = 'none';
    (<HTMLSelectElement>document.getElementById("matching_data")).style.display = 'none';
    (<HTMLSelectElement>document.getElementById("enquiry_form")).style.display = 'initial';
    }

    function insertEnquirePets(): void | boolean{
        var pets_types: string = (<HTMLSelectElement>document.getElementById("pets_types")).value;
        if(!pets_types){
            alert ("enter pet types !!");
            return false;
        }
        var pets_array: string[] = pets_types.split(",");
        console.log(pets_array)
        requestobject.insert(pets_array);
        console.log(requestobject.customerRequests);
        alert("Thanks for your interest !!");
        (<HTMLSelectElement>document.getElementById("enquiry_form")).style.display = 'none';
        (<HTMLSelectElement>document.getElementById("availabilty_table")).style.display = 'initial';
    }

  function viewPets(event: Event): void{
        event.preventDefault();
        (<HTMLSelectElement>document.getElementById("availabilty_table")).style.display = 'initial';
        (<HTMLSelectElement>document.getElementById("contact_form")).style.display = 'none';
        (<HTMLSelectElement>document.getElementById("petsCountTable")).style.display = 'none';
        (<HTMLSelectElement>document.getElementById("firstfive")).style.display = 'none';
        (<HTMLSelectElement>document.getElementById("enquiry_form")).style.display = 'none';
        (<HTMLSelectElement>document.getElementById("matching_data")).style.display = 'none';
        let i: number = 1;
        var table_body: HTMLSelectElement =  (<HTMLSelectElement>document.querySelector('#table_body'));
        table_body.innerHTML = '';
        for(let vals of availabilityObj.pets){
                table_body.insertAdjacentHTML('beforeend', `<tr>
                <td> ${i} </td>
                <td> ${vals["name"]} </td>
                <td> ${vals["type"]} </td>
                <td> ${vals["breed"]} </td>
                <td> ${vals["age"]} </td>
                <td> ${vals["gender"]} </td>
                <td> ${vals["history"]} </td>
                </tr>`);
            i++;
        }
 }

 function petsCount(event: Event): void{
        event.preventDefault();
        (<HTMLSelectElement>document.getElementById("availabilty_table")).style.display = 'none';
        (<HTMLSelectElement>document.getElementById("contact_form")).style.display = 'none';
        (<HTMLSelectElement>document.getElementById("petsCountTable")).style.display = 'initial';
        (<HTMLSelectElement>document.getElementById("firstfive")).style.display = 'none';
        (<HTMLSelectElement>document.getElementById("enquiry_form")).style.display = 'none';
        (<HTMLSelectElement>document.getElementById("matching_data")).style.display = 'none';
        
        let i: number = 1;
        let table_body_counter: HTMLSelectElement =  (<HTMLSelectElement>document.querySelector('#table_body_counter'));
        table_body_counter.innerHTML = '';
        let res: petscounter[] = availabilityObj.petsCount()
        for(let vals of res){
                console.log(vals);
                table_body_counter.insertAdjacentHTML('beforeend', `<tr>
                <td> ${i} </td>
                <td> ${vals["name"]} </td>
                <td> ${vals["count"]} </td>
                </tr>`);
                i++;
                }
 }
 
 function firstFiveEnquiry(event: Event): void{
        event.preventDefault();
        (<HTMLSelectElement>document.getElementById("availabilty_table")).style.display = 'none';
        (<HTMLSelectElement>document.getElementById("contact_form")).style.display = 'none';
        (<HTMLSelectElement>document.getElementById("petsCountTable")).style.display = 'none';
        (<HTMLSelectElement>document.getElementById("matching_data")).style.display = 'none';
        (<HTMLSelectElement>document.getElementById("enquiry_form")).style.display = 'none';
        (<HTMLSelectElement>document.getElementById("firstfive")).style.display = 'initial';
        
        let i: number = 1;
        let table_body_firstfive: HTMLSelectElement =  (<HTMLSelectElement>document.querySelector('#table_body_firstfive'));
        table_body_firstfive.innerHTML = '';
        let res: string[] = requestobject.firstFiveEnquiry();
        for(let vals of res){
        console.log(vals);
            table_body_firstfive.insertAdjacentHTML('beforeend', `<tr>
            <td> Enquiry: ${i} </td>
            <td> ${vals} </td>
            </tr>`);
        i++;
        }
 }

 function matchingData(event: Event): void{
        event.preventDefault();
        (<HTMLSelectElement>document.getElementById("availabilty_table")).style.display = 'none';
        (<HTMLSelectElement>document.getElementById("contact_form")).style.display = 'none';
        (<HTMLSelectElement>document.getElementById("petsCountTable")).style.display = 'none';
        (<HTMLSelectElement>document.getElementById("firstfive")).style.display = 'none';
        (<HTMLSelectElement>document.getElementById("enquiry_form")).style.display = 'none';
        (<HTMLSelectElement>document.getElementById("matching_data")).style.display = 'block';
        let res: string = requestobject.matchingData();
        (<HTMLSelectElement>document.getElementById("match")).innerHTML = res;
 }



