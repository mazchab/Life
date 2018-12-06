//var url = 'http://api.open-notify.org/astros.json';
//var pop = 'file:///Users/antariksacp/Desktop/df/creation%20&%20computation/Experiment%204/life/Countries.JSON';
//var url = 'http://api.apixu.com/v1/current.json?key=3f8be8ff57774a67a98212127182211&q=toronto';

// server variables
var dataServer;
var pubKey = 'pub-c-61c8321d-07a7-4316-aa45-7c0f81d8ee53'; // to allow messaging on a pubnub project
var subKey = 'sub-c-f6d75b0e-e6a6-11e8-89e8-1ed0fb765f26'; // to subscribe to a pubnub project

//input variables
var sendText;
var sendButton;

//size of the active area
// var cSizeX = 900;
// var cSizeY = 600;
var canvas;

var data;
var birthRate, deathRate;
var nameSearch;

var inputField;

//name used to sort your messages. used like a radio station. can be called anything
var channelName = "kineticlife";

function preload(){
	data = loadJSON('countryrates.json');
}

function setup() {

	/*createCanvas(windowWidth, windowHeight);*/
	// background(0);


	dataServer = new PubNub(
  {
    publish_key   : pubKey,  //get these from the pubnub account online. if you wanna make one only for subscribe, delete this line.
    subscribe_key : subKey,  
    ssl: true  //enables a secure connection. This option has to be used if using the OCAD webspace
  });


	  //attach callbacks to the pubnub object to handle messages and connections
  	dataServer.addListener({ message: readIncoming, presence: whoisconnected })
  	dataServer.subscribe({channels: [channelName]});

	inputField = createInput('Country Name');
	inputField.size(500,80);
	inputField.position(400, 250);


	sendButton = createButton('Enter');
	sendButton.size(100,80);
  	sendButton.position(800, 250);
  	sendButton.mousePressed(takeInput);
}

function draw() {


}

function takeInput () {

	nameSearch = inputField.value();

	var error = 1;

	var population = data["population"];
	for ( var i = 0 ; i < population.length; i++){
		if ( nameSearch == population[i]["Name"]) {
			error = 0;
			birthRate = population[i]["BirthRate"];
			deathRate = population[i]["DeathRate"];
			sendTheMessage();
		}
	}
	if (error == 1){
		console.log("Error: Not Found!");
		//Error Message
	}
    
    console.log(birthRate);
	console.log(deathRate);
	/*console.log(nameSearch);
	console.log(birthRate);
	console.log(deathRate);*/

}
///uses built in mouseClicked function to send the data to the pubnub server
function sendTheMessage() {
 

  // Send Data to the server to draw it in all other canvases
  dataServer.publish(
    {
      channel: channelName,
      message: 
      {
        countryName: nameSearch ,    //get the value from the text box and send it as part of the message  
        countryBirthRate: birthRate,
        countryDeathRate: deathRate
      }
    });

}

function readIncoming(inMessage) //when new data comes in it triggers this function, 
{                               // this works becsuse we subscribed to the channel in setup()
  
  // simple error check to match the incoming to the channelName
  /*if(inMessage.channel == channelName)
  {
    background(255);
    noStroke();
    fill(0);  //read the color values from the message
    textSize(80)
    text(inMessage.message.messageText, 5, height/2);
  }*/
}

function whoisconnected(connectionInfo)
{

}

/*//var url = 'http://api.open-notify.org/astros.json';
//var pop = 'file:///Users/antariksacp/Desktop/df/creation%20&%20computation/Experiment%204/life/Countries.JSON';
//var url = 'http://api.apixu.com/v1/current.json?key=3f8be8ff57774a67a98212127182211&q=toronto';
var life;
var data;
var Name = [];

function preload(){
	data = loadJSON('countryrates.json');
}

function setup() {
	createCanvas(720, 200);
	var population = data["population"];
	//console.log(population.length);
	for ( var i = 0 ; i < population.length; i++){
		//console.log(i);
		//console.log(population[i]["Name"]);
		Name[i] = population[i]["Name"];
	}

	console.log(Name[5]);
	//life = 'countryrates.json';
	//loadJSON(life, gotCountry);
}

//function mousePressed() {
//	loadJSON(pop, gotData);
//}

function gotCountry(data) {
	background(200);

	
	//createP(data.total_population[0].population);
}

function draw() {

//text(population[3].Name.BirthRate, 10, 50);
}
*/
