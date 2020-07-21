var arr = [1,33,4,23,19,122];
var arr_length = arr.length;
var max = arr[0]
for(i=0; i < arr_length; i++)
{
	if(max < arr[i])
	{
		max = arr[i];
	}
}
console.log(max);
//C:\max_array.js