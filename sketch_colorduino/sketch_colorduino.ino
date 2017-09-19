#include <Colorduino.h>
#include <ColorTools.h>
#define SERIAL_MESSAGE_DELIMITER  '\n'
#define SENSOR_ASSIGN_DELIMITER   ':'
#define CUBE_WIDTH                8
#define CUBE_HEIGHT               8


unsigned char plasma[CUBE_WIDTH][CUBE_HEIGHT];
long paletteShift;

int rColor = 0;
int gColor = 0;
int bColor = 0;
int xpos = 0;
int ypos = 0;

unsigned char defineColor(boolean floor, unsigned char colorCompared){
  unsigned char newColor;

//  if(colorCompared >=  0   && colorCompared <= 63){
//    floor ? newColor = R : newColor = 0;
//  }if(colorCompared >=  64  && colorCompared <= 127){
//    floor ? newColor = R : newColor = 0;
//  }if(colorCompared >=  128 && colorCompared <= 191){
//    floor ? newColor = R : newColor = 0;
//  }if(colorCompared >=  192 && colorCompared <= 255){
//    floor ? newColor = R : newColor = 0;
//  }

  return newColor;
}

void controlColors(unsigned char R, unsigned char G, unsigned char B) {
  //Assign colors by floors or walls
    int pisoR = 0;
    int pisoG = 0;
    int pisoB = 0;
  
//Conditional for red
boolean red0 = R >=0 && R <= 63;
boolean red1 = R >=64 && R <= 127;
boolean red2 = R >=128 && R <= 191;
boolean red3 = R >=192 && R <= 255;
//Conditional for green
boolean green0 = G >= 0 && G <= 63;
boolean green1 = G >= 64 && G <= 127;
boolean green2 = G >= 128 && G <= 191;
boolean green3 = G >= 192 && G <= 255;
//Conditional for blue
boolean blue0 = B >= 0 && B <= 63;
boolean blue1 = B >= 64 && B <= 127;
boolean blue2 = B >= 128 && B <= 191;
boolean blue3 = B >= 192 && B <= 255;

  PixelRGB *p = Colorduino.GetPixel(0,0);

  for (unsigned char y = 0; y < CUBE_HEIGHT; y++){
    for (unsigned char x = 0; x < CUBE_WIDTH; x++) {
        //Floor for red
        boolean floor0 = (y == 7 || y == 0);
        boolean floor1 = (y == 6 || y == 1);
        boolean floor2 = (y == 5 || y == 2);
        boolean floor3 = (y == 4 || y == 3);
        //Wall for green
        boolean side0 = (y == 7 || y == 6 || y == 5 || y == 4) && (x == 7 || x == 6 || x == 5 || x == 4);
        boolean side1 = (y == 7 || y == 6 || y == 5 || y == 4) && (x == 3 || x == 2 || x == 1 || x == 0);
        boolean side2 = (y == 3 || y == 2 || y == 1 || y == 0) && (x == 7 || x == 6 || x == 5 || x == 4);
        boolean side3 = (y == 3 || y == 2 || y == 1 || y == 0) && (x == 3 || x == 2 || x == 1 || x == 0);
        //Wall for blue
        boolean lado0 = (x == 3 || x == 4);
        boolean lado1 = (x == 2 || x == 5);
        boolean lado2 = (x == 1 || x == 6);
        boolean lado3 = (x == 0 || x == 7);

//        Define Color red
//          pisoR = defineColor();
          if(red0){
            floor0 ? pisoR = R : pisoR = 0;
          }if(red1){
            floor1 ? pisoR = R : pisoR = 0;
          }if(red2){
            floor2 ? pisoR = R : pisoR = 0;
          }if(red3){
            floor3 ? pisoR = R : pisoR = 0;
          }

          //Define Color green
            if(green3){
              side3 ? pisoG = G : pisoG = 0;
            }if(green2){
              side2 ? pisoG = G : pisoG = 0;
            }if(green1){
              side1 ? pisoG = G : pisoG = 0;
            }if(green0){
              side0 ? pisoG = G : pisoG = 0;
            }

          //Define Color blue
          if(blue3){
            lado3 ? pisoB = B : pisoB = 0;
          }if(blue2){
            lado2 ? pisoB = B : pisoB = 0;
          }if(blue1){
            lado1 ? pisoB = B : pisoB = 0;
          }if(blue0){
            lado0 ? pisoB = B : pisoB = 0;
          }
          
      p->r = pisoR;
      p->g = pisoG;
      p->b = pisoB;
      p++;
    }
  }


  Colorduino.FlipPage();
}

void controlSetColors(unsigned char R, unsigned char G, unsigned char B) {

  Colorduino.SetPixel(0,0,R,G,B);
  
  Colorduino.FlipPage();
}

void setup() {
Colorduino.Init();

unsigned char whiteBalVal[3] = {36,63,63}; // for LEDSEE 6x6cm round matrix
  Colorduino.SetWhiteBal(whiteBalVal);


  // start with morphing plasma, but allow going to color cycling if desired.
  paletteShift=128000;
  unsigned char bcolor;

  //generate the plasma once
  for(unsigned char y = 0; y < CUBE_HEIGHT; y++)
    for(unsigned char x = 0; x < CUBE_WIDTH; x++) {
      //the plasma buffer is a sum of sines
      bcolor = (unsigned char)
        (128.0 + (128.0 * sin(x*8.0 / 16.0)) +
         128.0 + (128.0 * sin(y*8.0 / 16.0))) / 2;
      plasma[x][y] = bcolor;
    }

  Serial.begin(9600);
  Serial.setTimeout(10);
  while (!Serial) {
    Serial.println("Waiting for Serial... "); // wait for serial port to connect. Needed for native USB
  }

}

void loop() {
  // put your main code here, to run repeatedly:

  while(Serial.available()) {
//        xpos =  Serial.parseInt();
//        ypos =  Serial.parseInt();
        rColor = Serial.parseInt();
        gColor = Serial.parseInt();
        bColor = Serial.parseInt();

        controlColors(rColor, gColor, bColor);
      }

}
