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
availabilityObj.insert({ name: "Tim", breed: "siberian", age: 1, gender: "female", type: "cat" });
availabilityObj.insert({ name: "Jimmy", breed: "lab", age: 2, gender: "male", history: "owned by cops", type: "dog" });
availabilityObj.insert({ name: "Leo", breed: "generic", age: 7, gender: "female", history: "owned by circus", type: "monkey" });
availabilityObj.insert({ name: "Sara", breed: "generic", age: 3, gender: "female", type: "cat" });
availabilityObj.insert({ name: "Cleo", breed: "siberian", age: 1, gender: "male", type: "cat" });
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
console.log(requestobject.matchingData());
