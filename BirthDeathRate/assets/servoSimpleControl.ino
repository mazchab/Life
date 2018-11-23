
//#include <Adafruit_PWMServoDriver.h>

#include <Servo.h>
//#include <Adafruit_NeoPixel.h>


Servo myservo1;
Servo myservo2; 

void setup ()
{
  Serial.begin(9600);
  myservo1.attach(9);
  myservo2.attach(10);
}

void loop () 
{
  if (Serial.available() > 0) { // if there's serial data available
    int outByte1 = Serial.read();   // read it
    int outByte2 = Serial.read();
    
    Serial.write(outByte1);         // send it back out as raw binary data
    Serial.write(outByte2);
    
    int servoSpeed1 = map(outByte1, 0, 150, 0, 180);     // scale it to use it with the servo (value between 0 and 180)
    int servoSpeed2 = map(outByte2, 0, 20, 0, 180);
    
   
    myservo1.write(servoSpeed1);
    myservo2.write(servoSpeed2);

   // delay(15);
  }
  
 // myservo2.writeMicroseconds (1000);
  //myservo2.write (180);

 // myservo1.writeMicroseconds (3000);
  //myservo1.write (180);
}








//int servopin1 = 9; //pin that the servo is attached to
//int moveRate = 10;
//int minAngle = 0;
//int maxAngle = 180;
//int moveIncrement = 1
//int servoAngle1;
//
//long lastTimeYouMoved1;
//
//
//Servo servo1 //creating servo object
//
//
//void setup() 
//{ 
//  myservo1.attach(myservo1);
//  servoAngle1= minAngle;
//
//} 
//
//void loop() 
//if (millis ()-lastTimeYouMoved1>= moveRate)
//{ 
//  servo1.write (servoAngle1);
//  servoAngle1 +- moveIncrement;
//}
//
//if (servoAngle1<= minAngle || servoAngle1 >= maxAngle)
//{
//  moveIncrement = -moveIncrement;
//  } 
//  lastTimeYouMoved1 = millis ();
//  }
//  }
