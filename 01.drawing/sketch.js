function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(3);
}
function draw() {
  background(random(150, 120, 175), random(200, 140, 240), random(255, 200, 255));
stroke(130, 120, 200);

strokeWeight(2);

let erratic_size = random(20, 75);
let erratic_size2 = random(15, 55);

  ellipse(115, 150, erratic_size, erratic_size);
    fill(255, 255, 255);
  ellipse(270, 150, erratic_size2, erratic_size2);

rect(109, 151, 13, 15)
    fill(80, 220, 255)

rect(267, 151, 10, 7)
  fill(250, 250, 250)


textAlign(CENTER);
textSize(90);
text('¿', 200, 240, );

textAlign(CENTER);
textSize(65);
text('*', 170, 350,  );
fill(255); 
}



