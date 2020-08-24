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
//reduce
var sum = function (ages) {
    var sum_result = ages.reduce(function (total, num) { return total + num; });
    return sum_result;
};
var sum_result_value = sum(ages);
console.log("Sum function Result : " + sum_result_value);
//filter
var filter = function (ages) {
    var filter_result = ages.filter(function (obj) { return obj > 20; });
    return filter_result;
};
var filter_result = filter(ages);
console.log("Filter function result : " + filter_result);
//find
var find = function (ages) {
    var find_result = ages.find(function (obj) { return obj > 20; });
    return find_result;
};
var find_result_value = find(ages);
console.log("Find function result : " + find_result_value);
//reduce
var reduce = function (ages) {
    var reduce_result = ages.reduce(function (total, num) { return total - num; });
    return reduce_result;
};
var reduce_result_value = reduce(ages);
console.log("Reduce function result : " + reduce_result_value);
