
#include <Wire.h>
#include <Adafruit_PWMServoDriver.h>

uint8_t servonum1= 0;
uint8_t servonum2 = 0;

void setup() 
{ 
  servonum1.attach(9);
  servonum2.write(170);  // set servo to mid-point

  myservo2.attach(10);
  myservo2.write(10);
} 

void loop() {} 
