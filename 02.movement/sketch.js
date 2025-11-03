//Variables to confine the positions of the heart

let heartX;
let heartY;



function setup() {
  createCanvas(400, 400);
  heartX = width / 2;
  heartY = height / 2;
}


function draw() {
  background(180, 20, 20);
  //Drawing a heart emoji to setup the movement
  textSize(60); 
   text("❤️", heartX, heartY);
}
//When the heart is approached, it becomes erratic and moves away
function mouseClicked() {
  let d = dist(mouseX, mouseY, heartX, heartY);
  if (d < 50) {
    heartX = random(50, width - 50)
    heartY = random(50, height - 50);  
  }

} 


