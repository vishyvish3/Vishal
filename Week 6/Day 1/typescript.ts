
var ages: number[] = [100, 33, 12, 40, 45, 33, 20];

//chunk function
let chunk = (arr: number[], size: number): number[][] => {
    let outarr = [];
    for (let i = 0; i < ages.length; i += size) {
        outarr.push(ages.slice(i,i+size))
    }
    
    return outarr
}

var chunk_result  = chunk(ages, 2);
console.log("Chunk result: ");
console.log(chunk_result);

//sum function
let sum = (ages: number[]): number =>
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


//filter function
  let filter = (ages: number[], filter: number): number[] | string =>
  {
    let res_arr = [];
    for(let val of ages)
    {
      
      if(val == filter)
      {
         res_arr.push(val);
      }
    }
    if(res_arr.length > 0){
        return res_arr;
    }else{
        return 'not found';
    }
    
  }
  let filter_input: number = 1000;
  let filter_result = filter(ages, filter_input);
  console.log(`Filter function result : ${filter_result}`);

//find function
    let find = (ages: number[], input: number): number | string =>
    {
     var res: number = 0;
      for(let val of ages)
      {
        if(val == input)
        {
          res = val;
          break;
        }
      }

    if(res){
        return res;
    }else{
        return 'not found';
    }
      
    }
    let input = 20;
    let find_result_value = find(ages, input);
    console.log(`Find function result : ${find_result_value}`);

//reduce function
    let reduce = (ages: number[]): number =>
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
