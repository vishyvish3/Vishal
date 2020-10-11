"use strict";
var ages = [100, 33, 12, 40, 45, 33, 20];
//chunk function
var chunk = function (arr, size) {
    var outarr = [];
    for (var i = 0; i < ages.length; i += size) {
        outarr.push(ages.slice(i, i + size));
    }
    return outarr;
};
var chunk_result = chunk(ages, 2);
console.log("Chunk result: ");
console.log(chunk_result);
//sum function
var sum = function (ages) {
    var sum_iteration = 0;
    for (var _i = 0, ages_1 = ages; _i < ages_1.length; _i++) {
        var val = ages_1[_i];
        sum_iteration += val;
    }
    return sum_iteration;
};
var sum_result_value = sum(ages);
console.log("Sum function Result : " + sum_result_value);
//filter function
var filter = function (ages, filter) {
    var res_arr = [];
    for (var _i = 0, ages_2 = ages; _i < ages_2.length; _i++) {
        var val = ages_2[_i];
        if (val == filter) {
            res_arr.push(val);
        }
    }
    if (res_arr.length > 0) {
        return res_arr;
    }
    else {
        return 'not found';
    }
};
var filter_input = 1000;
var filter_result = filter(ages, filter_input);
console.log("Filter function result : " + filter_result);
//find function
var find = function (ages, input) {
    var res = 0;
    for (var _i = 0, ages_3 = ages; _i < ages_3.length; _i++) {
        var val = ages_3[_i];
        if (val == input) {
            res = val;
            break;
        }
    }
    if (res) {
        return res;
    }
    else {
        return 'not found';
    }
};
var input = 20;
var find_result_value = find(ages, input);
console.log("Find function result : " + find_result_value);
//reduce function
var reduce = function (ages) {
    var sub_iteration = 100;
    for (var _i = 0, ages_4 = ages; _i < ages_4.length; _i++) {
        var val = ages_4[_i];
        sub_iteration -= val;
    }
    return sub_iteration;
};
var reduce_result_value = reduce(ages);
console.log("Reduce function result : " + reduce_result_value);
