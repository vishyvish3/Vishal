"use strict";
var availability = /** @class */ (function () {
    function availability() {
        this.pets = [];
        this.petsType = [];
        this.petscounter = [];
    }
    //create list of pets available for adoption
    availability.prototype.insert = function (petsInfo) {
        var flag = false;
        this.pets.push(petsInfo);
        //For dynamically generating the different type of pets()
        for (var _i = 0, _a = this.petsType; _i < _a.length; _i++) {
            var x = _a[_i];
            if (x == petsInfo.type) {
                flag = true;
            }
        }
        if (flag != true) {
            this.petsType.push(petsInfo.type);
        }
    };
    //count different type of pets like - Dog:3, Cat: 1
    availability.prototype.petsCount = function () {
        this.petscounter = [];
        for (var _i = 0, _a = this.petsType; _i < _a.length; _i++) {
            var x = _a[_i];
            var counting = 0;
            for (var _b = 0, _c = this.pets; _b < _c.length; _b++) {
                var y = _c[_b];
                if (x == y["type"]) {
                    counting++;
                }
            }
            var obj = {
                name: x,
                count: counting
            };
            this.petscounter.push(obj);
        }
        return this.petscounter;
    };
    //display the pets available in the store
    availability.prototype.display = function () {
        return this.pets;
    };
    availability.prototype.displayPetsTypes = function () {
        return this.petsType;
    };
    return availability;
}());
var request = /** @class */ (function () {
    function request() {
        this.customerRequests = [];
        this.statusList = [];
    }
    //insert function to store the customer enquires
    request.prototype.insert = function (enquiry) {
        this.customerRequests.push(enquiry);
    };
    //print all the customer enquiries
    request.prototype.print = function () {
        return this.customerRequests;
    };
    //helper function - check for the status if its available or unavailable and store the result in "staus list" array
    request.prototype.statusCheck = function () {
        var requests = this.customerRequests;
        var fullPetsList = availabilityObj.petsType;
        for (var _i = 0, requests_1 = requests; _i < requests_1.length; _i++) {
            var request_2 = requests_1[_i];
            var flag = false;
            for (var _a = 0, request_1 = request_2; _a < request_1.length; _a++) {
                var individual = request_1[_a];
                if (fullPetsList.includes(individual)) {
                    flag = true;
                }
                else {
                    flag = false;
                    break;
                }
            }
            if (flag) {
                this.statusList.push("Available");
            }
            else {
                this.statusList.push("Not avaialable");
            }
        }
    };
    //check how many enquiries is matching with the availability class data
    request.prototype.matchingData = function () {
        this.statusList = [];
        this.statusCheck();
        var availableCounter = 0;
        var unavaiableCounter = 0;
        for (var _i = 0, _a = this.statusList; _i < _a.length; _i++) {
            var status_1 = _a[_i];
            if (status_1 == "Available") {
                availableCounter++;
            }
            else {
                unavaiableCounter++;
            }
        }
        var result;
        return result = "Enquiries matching the availability data: " + availableCounter + " and not matching enquiries: " + unavaiableCounter;
    };
    //first five enquiry status
    request.prototype.firstFiveEnquiry = function () {
        this.statusList = [];
        this.statusCheck();
        return this.statusList.slice(0, 5);
    };
    return request;
}());
var availabilityObj = new availability();
availabilityObj.insert({ name: "Tim", breed: "siberian", age: 1, gender: "female", history: "from turkey", type: "cat" });
availabilityObj.insert({ name: "Jimmy", breed: "lab", age: 2, gender: "male", history: "owned by cops", type: "dog" });
availabilityObj.insert({ name: "Leo", breed: "generic", age: 7, gender: "female", history: "owned by circus", type: "monkey" });
availabilityObj.insert({ name: "Sara", breed: "generic", age: 3, gender: "female", history: "from sweden", type: "cat" });
availabilityObj.insert({ name: "Cleo", breed: "siberian", age: 1, gender: "male", history: "rare breed", type: "cat" });
var requestobject = new request();
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
var firstfiveStatus = requestobject.firstFiveEnquiry();
for (var status_2 in firstfiveStatus) {
    console.log("Enquiry " + (+status_2 + 1) + ": " + firstfiveStatus[status_2]);
}
console.log("************");
//availability class and request class - enquiry matching data
var res = requestobject.matchingData();
console.log(res);
//**********************************//
//DOM MANIPULATION 
window.addEventListener('load', function (event) {
    document.getElementById('view_pets').click();
});
function viewInsertForm(event) {
    event.preventDefault;
    document.getElementById("contact_form").style.display = 'initial';
    document.getElementById("availabilty_table").style.display = 'none';
    document.getElementById("petsCountTable").style.display = 'none';
    document.getElementById("firstfive").style.display = 'none';
    document.getElementById("matching_data").style.display = 'none';
}
function insertformSubmit(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var type = document.getElementById("type").value;
    var breed = document.getElementById("breed").value;
    var age = document.getElementById("age").value;
    var gender = document.getElementById("gender").value;
    var history = document.getElementById("history").value;
    availabilityObj.insert({ name: name, breed: breed, age: age, gender: gender, history: history, type: type });
    alert("Added to pets list !! Click on view pets link to checkout the pets list.");
}
function enquirePets(event) {
    event.preventDefault();
    document.getElementById("contact_form").style.display = 'none';
    document.getElementById("availabilty_table").style.display = 'none';
    document.getElementById("petsCountTable").style.display = 'none';
    document.getElementById("firstfive").style.display = 'none';
    document.getElementById("matching_data").style.display = 'none';
    document.getElementById("enquiry_form").style.display = 'initial';
}
function insertEnquirePets() {
    var pets_types = document.getElementById("pets_types").value;
    if (!pets_types) {
        alert("enter pet types !!");
        return false;
    }
    var pets_array = pets_types.split(",");
    console.log(pets_array);
    requestobject.insert(pets_array);
    console.log(requestobject.customerRequests);
    alert("Thanks for your interest !!");
    document.getElementById("enquiry_form").style.display = 'none';
    document.getElementById("availabilty_table").style.display = 'initial';
}
function viewPets(event) {
    event.preventDefault();
    document.getElementById("availabilty_table").style.display = 'initial';
    document.getElementById("contact_form").style.display = 'none';
    document.getElementById("petsCountTable").style.display = 'none';
    document.getElementById("firstfive").style.display = 'none';
    document.getElementById("enquiry_form").style.display = 'none';
    document.getElementById("matching_data").style.display = 'none';
    var i = 1;
    var table_body = document.querySelector('#table_body');
    table_body.innerHTML = '';
    for (var _i = 0, _a = availabilityObj.pets; _i < _a.length; _i++) {
        var vals = _a[_i];
        table_body.insertAdjacentHTML('beforeend', "<tr>\n      <td> " + i + " </td>\n      <td> " + vals["name"] + " </td>\n      <td> " + vals["type"] + " </td>\n      <td> " + vals["breed"] + " </td>\n      <td> " + vals["age"] + " </td>\n      <td> " + vals["gender"] + " </td>\n      <td> " + vals["history"] + " </td>\n      </tr>");
        i++;
    }
}
function petsCount(event) {
    event.preventDefault();
    document.getElementById("availabilty_table").style.display = 'none';
    document.getElementById("contact_form").style.display = 'none';
    document.getElementById("petsCountTable").style.display = 'initial';
    document.getElementById("firstfive").style.display = 'none';
    document.getElementById("enquiry_form").style.display = 'none';
    document.getElementById("matching_data").style.display = 'none';
    var i = 1;
    var table_body_counter = document.querySelector('#table_body_counter');
    table_body_counter.innerHTML = '';
    var res = availabilityObj.petsCount();
    for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
        var vals = res_1[_i];
        console.log(vals);
        table_body_counter.insertAdjacentHTML('beforeend', "<tr>\n      <td> " + i + " </td>\n      <td> " + vals["name"] + " </td>\n      <td> " + vals["count"] + " </td>\n      </tr>");
        i++;
    }
}
function firstFiveEnquiry(event) {
    event.preventDefault();
    document.getElementById("availabilty_table").style.display = 'none';
    document.getElementById("contact_form").style.display = 'none';
    document.getElementById("petsCountTable").style.display = 'none';
    document.getElementById("matching_data").style.display = 'none';
    document.getElementById("enquiry_form").style.display = 'none';
    document.getElementById("firstfive").style.display = 'initial';
    var i = 1;
    var table_body_firstfive = document.querySelector('#table_body_firstfive');
    table_body_firstfive.innerHTML = '';
    var res = requestobject.firstFiveEnquiry();
    for (var _i = 0, res_2 = res; _i < res_2.length; _i++) {
        var vals = res_2[_i];
        console.log(vals);
        table_body_firstfive.insertAdjacentHTML('beforeend', "<tr>\n      <td> Enquiry: " + i + " </td>\n      <td> " + vals + " </td>\n     </tr>");
        i++;
    }
}
function matchingData(event) {
    event.preventDefault();
    document.getElementById("availabilty_table").style.display = 'none';
    document.getElementById("contact_form").style.display = 'none';
    document.getElementById("petsCountTable").style.display = 'none';
    document.getElementById("firstfive").style.display = 'none';
    document.getElementById("enquiry_form").style.display = 'none';
    document.getElementById("matching_data").style.display = 'block';
    var res = requestobject.matchingData();
    document.getElementById("match").innerHTML = res;
}
