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
  let filter = (ages, filer_input) =>
  {
    let res_arr = [];
    for(let val of ages)
    {
      if(val > filer_input)
      {
        res_arr.push(val);
      }
    }
    
    return res_arr;
  }
  let filer_input = 20;
  let filter_result = filter(ages, filer_input);
  console.log(`Filter function result : ${filter_result}`);

//find
    let find = (ages, input) =>
    {
     var res
      for(let val of ages)
      {
        if(val > input)
        {
          res = val;
          break;
        }
      }
      
      return res;
    }
    let input = 20;
    let find_result_value = find(ages, input);
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

