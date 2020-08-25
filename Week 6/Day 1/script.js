var ages = [100, 33, 12, 40, 45];
var chunk = function (ages) {
    var split = 2;
    var outarr = [];
    for (var i = 0; i < ages.length; i += split) {
        outarr.push(ages.slice(i, i + split));
    }
    return outarr;
};
var chunk_result = chunk(ages);
console.log("Chunk function Result : " + chunk_result);
//sum
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
//filter
var filter = function (ages, filer_input) {
    var res_arr = [];
    for (var _i = 0, ages_2 = ages; _i < ages_2.length; _i++) {
        var val = ages_2[_i];
        if (val > filer_input) {
            res_arr.push(val);
        }
    }
    return res_arr;
};
var filer_input = 20;
var filter_result = filter(ages, filer_input);
console.log("Filter function result : " + filter_result);
//find
var find = function (ages, input) {
    var res;
    for (var _i = 0, ages_3 = ages; _i < ages_3.length; _i++) {
        var val = ages_3[_i];
        if (val > input) {
            res = val;
            break;
        }
    }
    return res;
};
var input = 20;
var find_result_value = find(ages, input);
console.log("Find function result : " + find_result_value);
//reduce
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
