
//#include <Adafruit_PWMServoDriver.h>

#include <Servo.h>
#include <Wire.h>

Servo myservo1;
Servo myservo2;

void setup ()
{
  myservo1.attach(9);
myservo1.writeMicroseconds (3000);
  //myservo1.write (180);

  myservo2.attach(10);
myservo2.writeMicroseconds (1000);
  //myservo2.write (180);
}

void loop () {}








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
