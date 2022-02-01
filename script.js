//Solving problems using array functions on rest countries data.





//a Get all the countries from Asia continent /region using Filter function


var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    var data=JSON.parse(request.response);

var res =data.filter((ele)=>ele.region=="Asia")

console.log(res)

//b    Get all the countries with a population of less than 2 lakhs using Filter function
var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    var data=JSON.parse(request.response);
var res = data.filter((ele)=> ele.population<200000)
console.log(res)


//c Print the following details name, capital, flag using forEach function

var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    var data=JSON.parse(request.response);
data.forEach(i => {
    console.log(i.name , i.capital ,i.flag)
    
})

//d Print the total population of countries using reduce function
var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    var data=JSON.parse(request.response);
var res= data.reduce((acc,cv)=> acc+cv.population,0)
console.log(res)


//ePrint the country which uses US Dollars as currency.
var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    var data=JSON.parse(request.response);
    
    
var res5= data.filter((ele)=> ele.currencies[0].code=="USD") 
console.log(res5)

   




}