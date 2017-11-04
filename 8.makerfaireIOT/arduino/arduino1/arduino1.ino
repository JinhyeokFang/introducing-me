#include <Servo.h>
#include <SoftwareSerial.h>

Servo servo;
short servoAngle = 0;
short servoPin = 4;

short BTtx=2;  
short BTrx=3;   
SoftwareSerial bluetooth(BTtx, BTrx);  

String pinStatus = "00";
short val = 0;
long x=0, vcc=4840; float th=0,ce=0;

short ledPower=8;

void setup() {
  Serial.begin(9600);
  bluetooth.begin(9600);

  pinMode(13, OUTPUT);
  pinMode(ledPower,OUTPUT);
  pinMode(5,INPUT_PULLUP);

  servo.attach(servoPin);
}

void loop() {
  if (Serial.available() > 0) {
    changeStatus(Serial.readString());
  } else if (bluetooth.available() > 0) {
    changeStatus(bluetooth.readString());
  }
  
  Serial.print(pinStatus);

  temper();
  bright();
  bell();
  dust();

  Serial.print('/'); 
}

void temper () {
  val = analogRead(A0);
  x = map(val,0,1023,0,vcc);
  th = (((float)(vcc-x)*10.0)/(float)x)*1000.0;
  ce = ((log(4.0*th - 3000.0) / (-0.024119329) + 473)-32.0)/1.8;

  zeroFill(ce * 100);

  Serial.print(floor(ce * 100));  
}

void bright () {
  val = analogRead(A1);

  zeroFill(val);
  Serial.print(map(val, 0, 1023, 0, 99));
}

void bell () {
  Serial.print(!(digitalRead(5)));
}

void dust () {
  float voltage=0;
  short dust=0;
  float dustVal=0;
  float dustDensity = 0; 
  
  digitalWrite(ledPower,LOW);
  delayMicroseconds(240);


  dustVal=analogRead(A2);
  delayMicroseconds(80);
  
  digitalWrite(ledPower,HIGH);
  delayMicroseconds(9680);
  
  voltage = dustVal* 5.0 / 1023.0;

  delay(500);

  dust = 172 * voltage - 500;

  zeroFill(dust * 10);
  Serial.print(dust);
}

void zeroFill (int value) {
  short stringLength = 4;
  if (value < 9)
    stringLength = 1;
  else if (value < 99)
    stringLength = 2;
  else if (value < 999)
    stringLength = 3;
  else
    stringLength = 4;

   stringLength = 4 - stringLength;

   for (int repeat = 0; repeat < stringLength; repeat++) {
      Serial.print('0');
   }
}

void changeStatus (String receivedString) {
    pinStatus = receivedString;
    if (pinStatus[0] == '1') {
      digitalWrite(13, 1);
    } else  if (pinStatus[0] == '0') {
      digitalWrite(13, 0);
    } else {
      pinStatus[0] = '0';
    }

    if (pinStatus[1] == '1') {
      servo.write(90);
      delay(1000);
    } else  if (pinStatus[1] == '0') {
      servo.write(180);
      delay(1000);
    } else {
      pinStatus[1] = '0';
    }
}

/*
  미세먼지 센서 측정 코드 참고(GP2Y1010) 
  http://ilikesan.com/563

  dust sensor (GP2Y1410)
  http://cassiopeia.hk/dustsensor/
  
 */
