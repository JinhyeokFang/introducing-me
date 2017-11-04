import processing.serial.*;

Serial port;
 
void setup(){
  port = new Serial(this, Serial.list()[0]);
}
 
void draw(){
  String[] lines = loadStrings("file.txt");
  if (lines.length == 1) {
    port.write('H');
    print("true");
  } else {
    port.write('F');
    print("true?!?!?!");
  }
  
}      
