
/*
 * Creation & Computation - Digital Futures, OCAD University
 * Kate Hartman / Nick Puckett

Get info about the arrival times of Buses/Streetcars at a particular stop
execute this URL in the Browser to list all routes/tag codes
http://webservices.nextbus.com/service/publicJSONFeed?command=routeList&a=ttc
http://webservices.nextbus.com/service/publicJSONFeed?command=routeConfig&a=ttc&r=504  //**note change r=504 to r=<whatever tag code you get from the previous link>

*/






var username = "mazchab";
var key = "645286027b3ed1c6886321ac7b766e17";

function setup()
{
    loadTable('https://www.kaggle.com/fernandol/countries-of-the-world/data#countries%20of%20the%20world.csv', gotData); 
    createCanvas(800,500);
    background(255);

}

function gotData(data)
{
 println(data);
}

function draw()
{


}