
//#include <Adafruit_PWMServoDriver.h>
//#include <Adafruit_NeoPixel.h>

#include <Servo.h>

Servo myservo1;
Servo myservo2; 

int ard_birthRate;
int ard_deathRate;



void setup ()
{
  Serial.begin(9600);

  int ard_birthRate = Serial.read();   // read it
  int ard_deathRate = Serial.read();

  myservo1.attach(9);
  myservo2.attach(10);
}

void loop () 
{
  if (Serial.available() > 0) 
  { 
    Serial.write(ard_birthRate);         // send it back out as raw binary data
    Serial.write(ard_deathRate);

    myservo1.write(ard_deathRate + 90);               //black disc
    myservo2.write(ard_birthRate);              //orange disc 

 
//    int servoSpeed1 = map(birthRate, 0, 50, 0, 180);     // scale it to use it with the servo (value between 0 and 180)
//    int servoSpeed2 = map(deathRate, 0, 50, 0, 180);
     
   
    

   delay(15);
  }
}
