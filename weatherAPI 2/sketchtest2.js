// A wind direction vector
var winddirection;
var windspeed;
// Circle position
var position;

var api =   'http://api.apixu.com/v1/current.json?key=';
var apiKey = '3f8be8ff57774a67a98212127182211&q=';
var City = 0;
var input;


function setup() 
{
 createCanvas(1500,600);
var button = select ('#submit');
button.mousePressed (winddirectionAsk);

input = createInput();
}

// Request the data from apixu.com
//var url = 'http://api.apixu.com/v1/current.json?key=bde2764d0e0a448c89f55644182111&q=toronto';

function winddirectionAsk () 
{
var url =  api + apiKey + City;
loadJSON(url, gotData);
}


function gotData (data)
{
winddirection = data;
}


function draw() {
 background(200);

// Circle starts in the middle
 position = createVector(width/2, height/2);
 // wind starts as (0,0)
 winddirection = createVector();

}

function gotWeather(weather) {




 // Get the angle (convert to radians)
 var angle = radians(Number(weather.current.wind_degree));
 // Get the wind speed
 var windmag = Number(weather.current.wind_mph);

 // Display as HTML elements
 var temperatureDiv = createDiv(floor(weather.current.temp_f) + '&deg;');
 var windDiv = createDiv("WIND " + windmag + " <small>MPH</small>");

 // Make a vector
 wind = p5.Vector.fromAngle(angle);

console.log(weather);
console.log("!!!!!!!!!!");
console.log(weather.current.wind_dir);    
    
}



































//var data ;
//
////function preload (){
////data = loadJSON ("population");
////}
//
//function setup () {
//data = loadJSON ("population.json");
//noCanvas();
//var population = data.population[2].BirthRate;
//
//}
//
//function draw()
//{
//    createP(data.population[2].BirthRate);
//}

Message Input

Message Carisa, Naomi