var dataServer;

var pubKey = 'pub-c-61c8321d-07a7-4316-aa45-7c0f81d8ee53'; 
var subKey = 'sub-c-f6d75b0e-e6a6-11e8-89e8-1ed0fb765f26';
var channelName = "kineticlife";

var data;
var birthRate, deathRate;
var ard_birthRate, ard_deathRate;
var nameSearch;

var serial;                               
var portName = '/dev/cu.usbmodem14111'; 

var lightFont, regFont, boldFont;


function preload()
{
	data = loadJSON('countryrates.json');
    
//    lightFont = loadFont('assets/BreeLight.otf');
//    regFont = loadFont('assets/BreeRegular.otf');
//    boldFont = loadFont('assets/BreeExtrabold.otf');
}


function setup() 
{
    
createCanvas(windowWidth, windowHeight);
    background(0);
    
 dataServer = new PubNub(
 {
   subscribe_key : subKey,
   ssl: true
 });

dataServer.addListener({ message: readIncoming })
dataServer.subscribe({channels: [channelName]});
    
serial = new p5.SerialPort();             
serial.on('data', serialEvent);           
serial.on('error', serialError);          
serial.open(portName);                    

var population = data["population"];

console.log(birthRate);
console.log(deathRate);
    
serial.write(ard_birthRate); // send it out the serial port
serial.write(ard_deathRate); // send it out the serial port
    
}


function readIncoming(inMessage)
{
    if(inMessage.channel == channelName)
    { 
        var country = inMessage.message.countryName;
        var birthRate = inMessage.message.countryBirthRate;
        var deathRate = inMessage.message.countryDeathRate;
        
        var ard_birthRate = map(birthRate, 0, 50, 0, 180);
        var ard_deathRate = map(deathRate, 0, 50, 0, 180);
        
        serial.write(ard_birthRate);
        serial.write(ard_deathRate);
        
        console.log(birthRate);
        console.log(deathRate);
        console.log(ard_birthRate);
        console.log(ard_deathRate);
    
//       
//        
        fill(255);
        textSize(50);
        textAlign(CENTER);
        
        text(country, windowWidth/2, windowHeight/2);
        text(birthRate, windowWidth/2, windowHeight/2-60);
        text(deathRate, windowWidth/2, windowHeight/2-120);    
        
        
    }
}


function serialEvent() 
{
serial.write(ard_birthRate);
serial.write(ard_deathRate);
}

function serverConnected() 
{
  console.log('connected to server.');
}

function portOpen() 
{
  console.log('the serial port opened.')
}
 
function serialError(err) 
{
  console.log('Something went wrong with the serial port. ' + err);
}
 
function portClose() 
{
  console.log('The serial port closed.');
}
