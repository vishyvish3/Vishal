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

//sum
let sum = (ages) =>
{
  let sum_iteration = 0;
  for(let val of ages)
  {
    sum_iteration += val;
  }
  return sum_iteration
}
let sum_result_value = sum(ages);
console.log(`Sum function Result : ${sum_result_value}`);


//filter
  let filter = (ages) =>
  {
    let res_arr = [];
    for(let val of ages)
    {
      if(val > 20)
      {
        res_arr.push(val);
      }
    }
    
    return res_arr;
  }
  let filter_result = filter(ages);
  console.log(`Filter function result : ${filter_result}`);

//find
    let find = (ages) =>
    {
     var res
      for(let val of ages)
      {
        if(val > 20)
        {
          res = val;
          break;
        }
      }
      
      return res;
    }
    let find_result_value = find(ages);
    console.log(`Find function result : ${find_result_value}`);

//reduce
    let reduce = (ages) =>
    {
      let sub_iteration = 100;
  for(let val of ages)
  {
    sub_iteration -= val;
  }
  return sub_iteration
}
    
    let reduce_result_value = reduce(ages);
    console.log(`Reduce function result : ${reduce_result_value}`);

