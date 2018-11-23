var url = 'https://api.apixu.com/v1/current.json?key=3f8be8ff57774a67a98212127182211&q=toronto';

var angle;
var windmag;

var serial;                               // variable to hold an instance of the serialport library
var portName = '/dev/cu.usbmodem14111';   // fill in your serial port name here
var inData;                               // for incoming serial data
var outByte = 0;                          // for outgoing data
var outByte2 = 0;

function preload()
{
    loadJSON(url, gotWeather);
}

function setup() 
{
    serial = new p5.SerialPort();             // make a new instance of the serialport library
    serial.on('data', serialEvent);           // callback for when new data arrives
    serial.on('error', serialError);          // callback for errors
    serial.open(portName);                    // open a serial port
}


function gotWeather(weather) 
{
    //outByte1 = Number(weather.current.wind_degree);       // Get the angle (convert to radians)
    //serial.write(outByte1);
    //outByte2 = Number(weather.current.wind_kph);          // Get the wind speed
   //'serial.write(outByte2);
}

function draw()
{
    createP(outByte1);
    createP(outByte2);
}

function sendWeather()
{
    serial.println(outByte1); // send it out the serial port
    serial.println(outByte2); // send it out the serial port
    serial.write(outByte1); // send it out the serial port
    serial.write(outByte2); // send it out the serial port
}

function serialEvent() {
 // read a byte from the serial port:
 //var inByte = serial.read();
 // store it in a global variable:
 //inData = inByte;
serial.write(outByte1);
    serial.write(outByte2);
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

function printList(portList) {
 // portList is an array of serial port names
 for (var i = 0; i < portList.length; i++) {
 // Display the list the console:
 console.log(i + " " + portList[i]);
 }
}