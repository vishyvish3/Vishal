var container = document.createElement("div");
container.setAttribute("class","container");

var row = document.createElement("section");
row.setAttribute("id","row");
row.setAttribute("class","row");

container.append(row);
document.body.append(container);



async function rand(){
const response1 = await fetch('https://random-word-api.herokuapp.com/word?number=1')
const rand_word = await response1.json();
//console.log(rand_word);
return rand_word;
}


async function asyncData(){
let random = await rand();
console.log(random[0]);
const response = await fetch('https://api.giphy.com/v1/gifs/search?api_key=O0BVeplYULJ5lMZweRIkHAVhWrntyICe&q='+random[0]+'&limit=1&offset=0&rating=g&lang=en')
const data = await response.json();

return data;
}
async function processdata()
{
	try
	{
	var res = await asyncData();
	
	{
		  var col = document.createElement("div");
		  col.setAttribute("class","col-md-4");
		  
		  var card = document.createElement("div");
		  card.setAttribute("class","card");
		  card.setAttribute("style","display:flex; align-items:center;");
		
		  var head = document.createElement("div");
		  head.setAttribute("class","card-header");
		  head.innerHTML = res['data'][0]['title'];
		  
		  var img = document.createElement("img");
		  img.setAttribute("class","img-fluid");
		  img.setAttribute("src",res['data'][0]['images']['original']['url']);
		  
		 
		  

		  card.append(head, img);
		  col.append(card);
		  row.append(col);
	
	}
	}
	catch(error){
    console.log(error)
}
}

processdata();

async function generate(lat,lng)
{
	let data= await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=4b83b512b8a0c3028cf6fa4cd0a9f4c2`);
      	let jsondata= await data.json();
          alert("Temprature: "+jsondata.main.temp+" F "+"\n Info: "+ 
          	jsondata.weather[0].description);
} 

