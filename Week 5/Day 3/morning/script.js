//Get countries data
let url = 'https://api.covid19api.com/countries';
async function getData(url){
    let country = await fetch(url)
    let arr = await country.json()
    return arr
}


//Print Countries info
async function processCountry(){
    try{
        let arr = await getData('https://api.covid19api.com/countries')
    for(x in arr){
        let outer_div = document.createElement("div")
       outer_div.setAttribute("style","margin-bottom:20px")
        outer_div.setAttribute("class","col-4")
        
        let card_div = document.createElement("div")
        card_div.setAttribute("class","card")
        
        let card_body = document.createElement("div")
        card_body.setAttribute("class","card-body")
        
        let card_head = document.createElement("h5")
        card_head.setAttribute("class","card-title")
        card_head.innerText = arr[x]["Country"]
        
        let card_code = document.createElement("p")
        card_code.setAttribute("class","card-text")
        card_code.innerText = `Country Code : ${arr[x]["ISO2"]}`
        
        let card_slug = document.createElement("p")
        card_slug.setAttribute("class","card-text")
        card_slug.innerText = `Country Slug : ${arr[x]["Slug"]}`
        let slug = arr[x]["Slug"]
        

        let detail_button = document.createElement("a")
        detail_button.setAttribute("class","btn btn-success")
        detail_button.setAttribute("onclick", `slugData('${slug}')`)
        detail_button.innerText = "Details"

        card_body.appendChild(card_head)
        card_body.appendChild(card_code)
        card_body.appendChild(card_slug)
        card_body.appendChild(detail_button)
        
        card_div.appendChild(card_body)
        outer_div.appendChild(card_div)
        mydiv.appendChild(outer_div)
    }
}catch(error){
    console.log(error)
}
}

//start
processCountry();

//click event - covid report 
async function slugData(slug){
    let url = `https://api.covid19api.com/country/${slug}?from=2020-07-01T00:00:00Z&to=2020-08-01T00:00:00Z`
    let result = await getData(url)
    let line = ""
    for(each of result){
        line += "Confirmed : " + each["Confirmed"] + "Deaths : " + each["Deaths"] + "Recovered : " + each["Recovered"] + "Active : " + each["Active"] +  "\n"
    }
    alert(line);
}


let main = document.body

let mydiv = document.createElement("div")
mydiv.setAttribute("style","width:100%;height:auto;")
mydiv.setAttribute("class","card-group")

let header_div = document.createElement("div")
header_div.setAttribute("style","text-align:center;color:black;")

let header = document.createElement("h1")
header.innerText = "Covid 19 Tracker";
header.setAttribute("style","margin-bottom:30px; margin-top:20px");

header_div.appendChild(header)
main.appendChild(header_div)

let container = document.createElement("div");
container.setAttribute("class","container");

container.append(mydiv);
main.appendChild(container);