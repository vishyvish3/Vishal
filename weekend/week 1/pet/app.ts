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
    document.getElementById('view_pets').click();
});

function viewInsertForm(event){
  event.preventDefault;
  document.getElementById("contact_form").style.display = 'initial';
  document.getElementById("availabilty_table").style.display = 'none';
  document.getElementById("petsCountTable").style.display = 'none';
  document.getElementById("firstfive").style.display = 'none';
  document.getElementById("matching_data").style.display = 'none';
}

function insertformSubmit(event){
  event.preventDefault();
  var name = document.getElementById("name").value;
  var type = document.getElementById("type").value;
  var breed = document.getElementById("breed").value;
  var age = document.getElementById("age").value;
  var gender = document.getElementById("gender").value;
  var history = document.getElementById("history").value;
  availabilityObj.insert({name: name, breed: breed, age: age, gender: gender, history:history,  type: type})
  alert("Added to pets list !! Click on view pets link to checkout the pets list.");
  
  }

  function enquirePets(event){
    event.preventDefault();
    document.getElementById("contact_form").style.display = 'none';
    document.getElementById("availabilty_table").style.display = 'none';
    document.getElementById("petsCountTable").style.display = 'none';
    document.getElementById("firstfive").style.display = 'none';
    document.getElementById("matching_data").style.display = 'none';
    document.getElementById("enquiry_form").style.display = 'initial';

    
    }

    function insertEnquirePets(){
        
        var pets_types = document.getElementById("pets_types").value;
        if(!pets_types){
            alert ("enter pet types !!");
            return false;
        }
        var pets_array = pets_types.split(",");
        console.log(pets_array)
        requestobject.insert(pets_array);
        console.log(requestobject.customerRequests);
        alert("Thanks for your interest !!");
        document.getElementById("enquiry_form").style.display = 'none';
        document.getElementById("availabilty_table").style.display = 'initial';
    }

  function viewPets(event){
  event.preventDefault();
  document.getElementById("availabilty_table").style.display = 'initial';
  document.getElementById("contact_form").style.display = 'none';
  document.getElementById("petsCountTable").style.display = 'none';
  document.getElementById("firstfive").style.display = 'none';
  document.getElementById("enquiry_form").style.display = 'none';
  document.getElementById("matching_data").style.display = 'none';
  let i = 1;
  var table_body =  document.querySelector('#table_body');
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

 function petsCount(event){
  event.preventDefault();
  document.getElementById("availabilty_table").style.display = 'none';
  document.getElementById("contact_form").style.display = 'none';
  document.getElementById("petsCountTable").style.display = 'initial';
  document.getElementById("firstfive").style.display = 'none';
  document.getElementById("enquiry_form").style.display = 'none';
  document.getElementById("matching_data").style.display = 'none';
  
  let i = 1;
  let table_body_counter =  document.querySelector('#table_body_counter');
  table_body_counter.innerHTML = '';
  let res = availabilityObj.petsCount()
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
 
 function firstFiveEnquiry(event){
  event.preventDefault();
  document.getElementById("availabilty_table").style.display = 'none';
  document.getElementById("contact_form").style.display = 'none';
  document.getElementById("petsCountTable").style.display = 'none';
  document.getElementById("matching_data").style.display = 'none';
  document.getElementById("enquiry_form").style.display = 'none';
  document.getElementById("firstfive").style.display = 'initial';
  
  let i = 1;
  let table_body_firstfive =  document.querySelector('#table_body_firstfive');
  table_body_firstfive.innerHTML = '';
  let res = requestobject.firstFiveEnquiry();
  for(let vals of res){
   console.log(vals);
    table_body_firstfive.insertAdjacentHTML('beforeend', `<tr>
      <td> Enquiry: ${i} </td>
      <td> ${vals} </td>
     </tr>`);
  i++;
  }
 }

 function matchingData(event){
  event.preventDefault();
  document.getElementById("availabilty_table").style.display = 'none';
  document.getElementById("contact_form").style.display = 'none';
  document.getElementById("petsCountTable").style.display = 'none';
  document.getElementById("firstfive").style.display = 'none';
  document.getElementById("enquiry_form").style.display = 'none';
  document.getElementById("matching_data").style.display = 'block';
  let res = requestobject.matchingData();
  document.getElementById("match").innerHTML = res;
 }



