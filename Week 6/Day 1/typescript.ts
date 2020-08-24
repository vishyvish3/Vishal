var ages = [100, 33, 12, 40, 45];

let chunk = (ages) => {
    let split = 2;
    let outarr = [];
    for (let i = 0; i < ages.length; i += split) {
        outarr.push(ages.slice(i,i+split))
    }
    return outarr
}

var chunk_result  = chunk(ages);
console.log(`Chunk function Result : ${chunk_result}`);

//reduce
let sum = (ages) =>
{
  let sum_result = ages.reduce((total, num) => total + num );
  return sum_result;
}
let sum_result_value = sum(ages);
console.log(`Sum function Result : ${sum_result_value}`);


//filter
  let filter = (ages) =>
  {
    let filter_result = ages.filter((obj) => obj > 20 );
    return filter_result;
  }
  let filter_result = filter(ages);
  console.log(`Filter function result : ${filter_result}`);

//find
    let find = (ages) =>
    {
      let find_result = ages.find((obj) => obj > 20 );
      return find_result;
    }
    let find_result_value = find(ages);
    console.log(`Find function result : ${find_result_value}`);

//reduce
    let reduce = (ages) =>
    {
      let reduce_result = ages.reduce((total, num) => total - num );
      return reduce_result;
    }
    let reduce_result_value = reduce(ages);
    console.log(`Reduce function result : ${reduce_result_value}`);

