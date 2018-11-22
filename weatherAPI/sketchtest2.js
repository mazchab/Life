// A wind direction vector
var wind;
// Circle position
var position;

var url = 'https://api.apixu.com/v1/current.json?key=bde2764d0e0a448c89f55644182111&q=toronto';

var serial;          // variable to hold an instance of the serialport library
var portName = '/dev/cu.usbmodem14111'; // fill in your serial port name here
var inData;                            // for incoming serial data
var outByte = 0;                       // for outgoing data

function preload()
{
    loadJSON(url, gotWeather);
}

function setup() 
{
serial = new p5.SerialPort();    // make a new instance of the serialport library
 serial.on('data', serialEvent);  // callback for when new data arrives
 serial.on('error', serialError); // callback for errors
 serial.open(portName);           // open a serial port
}

function gotWeather(weather) 
{
  // Get the angle (convert to radians)
  var angle = Number(weather.current.wind_degree);
  
    // Get the wind speed
  var windmag = Number(weather.current.wind_mph);
  
  // Make a vector
  wind = p5.Vector.fromAngle(angle);
}

function sendWeather()
{
    serial.write(angle); // send it out the serial port
    serial.write(windmag); // send it out the serial port
}

function serialEvent() {
 // read a byte from the serial port:
 var inByte = serial.read();
 // store it in a global variable:
 inData = inByte;
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