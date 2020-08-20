var container = document.createElement("div");
container.setAttribute("class","container");

var row = document.createElement("section");
row.setAttribute("id","row");
row.setAttribute("class","row");

container.append(row);
document.body.append(container);

async function asyncData(){
const response = await fetch('https://restcountries.eu/rest/v2/all')
const data = await response.json();
return data;
}
async function processdata()
{
	try
	{
	var res = await asyncData();
	  for(x in res)
	{
		  var col = document.createElement("div");
		  col.setAttribute("class","col-lg-4 col-sm-12");
		  
		  var card = document.createElement("div");
		  card.setAttribute("class","card");
		  card.setAttribute("style","display:flex; align-items:center;");
		
		  var head = document.createElement("div");
		  head.setAttribute("class","card-header");
		  head.innerHTML = res[x]['name'];
		  
		  var img = document.createElement("img");
		  img.setAttribute("class","img-fluid");
		  img.setAttribute("src",res[x]['flag']);
		  
		  var capital = document.createElement("div");
		  capital.setAttribute("class","capital");
		  capital.innerHTML = 'Capital: ' + res[x]['capital'];
		  
		  var region = document.createElement("div");
		  region.setAttribute("class","region");
		  region.innerHTML = 'Region: ' + res[x]['region'];
		  
		  var code = document.createElement("div");
		  code.setAttribute("class","code");
		  code.innerHTML = 'code: ' + res[x]['alpha3Code'];
		  
		  var lat = document.createElement("div");
		  lat.setAttribute("class","latlng");
		  lat.innerHTML = 'Latlng: ' + res[x]['latlng'];
		  
		  var btn1 = document.createElement("btn");
		  btn1.setAttribute("class","btn btn-primary");
		  btn1.setAttribute("onclick","generate("+res[x]['latlng']+")");
		  btn1.setAttribute("style","margin-top:15px;");
		  btn1.innerHTML='Click for weather';
		  

		  card.append(head, img, capital, region, code, lat, btn1);
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

