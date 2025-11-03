
//variables to create my background pattern
let img;
let row = 1; //4 rows of coloumns from my own image
let col = 4;
let pad = 0;
let sizeW, sizeH;
//variables + arrays to create my text that changes colour when mouse clicked
let select = 0;
let rgb = [255,];


function preload() {
  img = loadImage("nighttimecolumn.jpg");
  //An image I digitally painted using Krita

}

function setup() {
  createCanvas(400, 400);
  //My image is 400 x 100 pixels, to match 
  // the size of the 400 x 400 canvas


sizeW = (width - pad * (col + 1)) / col;
sizeH = (height - pad * (row + 1)) / row;

rectMode(CENTER); //Centers my painting in to the middle of the canvas
imageMode(CENTER);  
noStroke();
}

function draw() {
  background(210);

  for (let i = 0; i < col; i++) {
    for (let ii = 0; ii < row; ii++) {
      let x = pad + sizeW / 2 + i * (sizeW + pad);
      let y = pad + sizeH / 2 + ii * (sizeH + pad);
      image(img, x, y, sizeW, sizeH);
      }
  }


  //text with arrays?
   if (select % 4 == 0) {
      rgb = [255, 255, 255]; //white
    } else if (select % 4 == 1) {
      rgb = [255, 176, 16]; //orange
    } else if (select % 4 == 2) {
      rgb = [204, 255, 153]; //light green
    } else if (select % 4 == 3) {
      rgb = [153, 204, 255]; //light blue
 
    }
    
  
  fill(...rgb);
  text("babysitting", 30, 55);
  
  
  text("doomscrolling", 220, 200);
  
  
  text("cooking", 100, 280);

  text("procrastinating", 250, 320);

  text("working late", 40, 205);

  text("just started smoking again", 240, 235);

  text("been playing video games for 7 hours", 40, 120);

  text("listening to christmas music in october", 160, 350);

  text("just got dumped", 250, 55);
}

function mouseClicked() {
  select++;
    


}

//this creates a generation of my image to
// reflect the nighttime ambience of an apartment 
// complex
