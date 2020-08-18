function getinfo() {
  var xhr = new XMLHttpRequest();
  return new Promise(function(resolve, reject) {
   xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
        if (xhr.status >= 300) {
          reject("Error, status code = " + xhr.status)
        } else {
          resolve(xhr.responseText);
        }
      }
    }
    xhr.open('get', 'https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json', true)
    xhr.send();
  });
}getinfo().then(function(result) {
  var res = JSON.parse(result);
  var row = document.getElementById("row");

  for(x in res)
  {
  var col = document.createElement("div");
  col.setAttribute("class","col-md-4");
  
  var card = document.createElement("div");
  card.setAttribute("class","card");
  
  var img = document.createElement("img");
  img.setAttribute("class","card-img-top");
  img.setAttribute("src",res[x]['flag']);
 
  var card_body = document.createElement("div");
  card_body.setAttribute("class","card-body");
  
  var para = document.createElement("p");
  para.setAttribute("class","card-text");
  para.innerHTML ='<span>' + res[x]['name'] + '</span><br> Capital: ' + res[x]['capital'] + '<br> Latitude: ' + res[x]['latlng'][0] + '<br> Longitude: ' + res[x]['latlng'][1] + '<br> Region: ' + res[x]['region'] + '<br> Currency code: ' + res[x]['currencies'][0]['code'] + '<br> Currency name: ' + res[x]['currencies'][0]['name'] + '<br> Currency symbol: ' + res[x]['currencies'][0]['symbol'] ;
  
  card_body.append(para)
  
  card.append(img, card_body);
  col.append(card)

  row.append(col);
  console.log(res);

  }
}, function(error) {
  console.log(error)
})