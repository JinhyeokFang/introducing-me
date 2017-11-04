import processing.core.*; 
import processing.data.*; 
import processing.event.*; 
import processing.opengl.*; 

import processing.serial.*; 

import java.util.HashMap; 
import java.util.ArrayList; 
import java.io.File; 
import java.io.BufferedReader; 
import java.io.PrintWriter; 
import java.io.InputStream; 
import java.io.OutputStream; 
import java.io.IOException; 

public class sketch_161007b extends PApplet {



Serial port;
 
public void setup(){
  port = new Serial(this, Serial.list()[0]);
}
 
public void draw(){
  String[] lines = loadStrings("file.txt");
  if (lines.length == 1) {
    port.write('H');
    print("true");
  } else {
    port.write('F');
    print("true?!?!?!");
  }
  
}      
  static public void main(String[] passedArgs) {
    String[] appletArgs = new String[] { "sketch_161007b" };
    if (passedArgs != null) {
      PApplet.main(concat(appletArgs, passedArgs));
    } else {
      PApplet.main(appletArgs);
    }
  }
}
