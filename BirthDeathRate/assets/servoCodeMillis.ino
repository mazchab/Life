
//#include <Adafruit_PWMServoDriver.h>
//#include <Adafruit_NeoPixel.h>

#include <Servo.h>

Servo myservo1;
Servo myservo2; 

int ard_birthRate;
int ard_deathRate;

long lastBirthRefresh;
long lastDeathRefresh;


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
  
if(millis() - lastDeathRefresh >= ard_deathRate)
{
  int ard_deaththRate = Serial.read();   // read it
  myservo1.write(0-ard_deathRate);
  lastDeathRefresh = millis();
}


if (millis() - lastBirthRefresh >= ard_birthRate)
{
  int ard_birthRate = Serial.read();   // read it
  myservo2.write(ard_birthRate);
  lastBirthRefresh = millis();
} 

delay(15);
}
}
