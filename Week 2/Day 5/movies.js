class Movie
{
    constructor(name,studio,rating='PG')
    {
        this.name=name;
        this.studio=studio;
        this.rating=rating;
    }
    getPG(arrayy)
    {
        let res_arr=[]
        for(let i=0;i<arrayy.length;i++)
        if(arrayy[i].rating==='PG')
        res_arr.push(arrayy[i])
        return res_arr
    }
   
    
}
var m1=new Movie('titanic','WB','PG13')
var m2=new Movie('split','WB')
var m3=new Movie('hulk','marvel','PG')
var m4=new Movie('Don 2','red chilies','PG')

console.log(m4.getPG([m1,m2,m3,m4]))