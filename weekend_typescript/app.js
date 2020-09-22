"use strict";
var availability = /** @class */ (function () {
    function availability() {
        this.pets = [];
        this.petsType = [];
        this.petscounter = [];
    }
    availability.prototype.insert = function (petsInfo) {
        var flag = false;
        this.pets.push(petsInfo);
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
    /*     petsCountFunction(){
           for(let i in this.pets){
               if(this.petsCount[this.pets[i]['type']]) === undefined {
                this.petsCount[this.pets[i]['type'] = 0;
               }
               this.petsCount[this.pets[i]['type'] + 1;
           }
        } */
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
    }
    request.prototype.insert = function (enquiry) {
        this.customerRequests.push(enquiry);
    };
    request.prototype.print = function () {
        return this.customerRequests;
    };
    return request;
}());
var availabilityObj = new availability();
availabilityObj.insert({ name: "Jim", breed: "siberian", age: 1, gender: "female", type: "cat" });
availabilityObj.insert({ name: "Jimmy", breed: "lab", age: 2, gender: "male", history: "owned by cops", type: "dog" });
availabilityObj.insert({ name: "Jimmy", breed: "lab", age: 2, gender: "male", history: "owned by cops", type: "monkey" });
availabilityObj.insert({ name: "Jim", breed: "siberian", age: 1, gender: "female", type: "cat" });
availabilityObj.insert({ name: "Jim", breed: "siberian", age: 1, gender: "female", type: "cat" });
var requestobject = new request();
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
