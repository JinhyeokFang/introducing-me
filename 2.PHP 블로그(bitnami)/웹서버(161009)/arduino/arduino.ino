char val = 'H';
int led = 13;

void setup() {
  Serial.begin(9600);
  pinMode(13, OUTPUT);  
}

void loop() {
	if (Serial.available() > 0) {
		val = Serial.read();
		if (val == 'H') {
			digitalWrite(13, HIGH);
		}
		else {
			digitalWrite(13, LOW);
		}
	}
}  
