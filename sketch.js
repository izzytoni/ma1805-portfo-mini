function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(3);
}
function draw() {
  background(random(200,240, 150));
stroke(130);
strokeWeight(2);

//figuring out how to use the random tick - think i figured it out with the difference in ranges of size, along with the variable of let 'erratic_size'
let erratic_size = random(20, 75);
let erratic_size2 = random(15, 55);

  ellipse(115, 150, erratic_size, erratic_size);
    fill(255, 255, 255);
//note - creating the ellipses as the eyes, tbd changing the size on random tick
  ellipse(270, 150, erratic_size2, erratic_size2);

  rect(109, 151, 13, 15)
    fill(80, 220, 255);
  

  rect(267, 151, 10, 7)
    fill(1, 1, 1)

textAlign(CENTER);
textSize(90);
text('¿', 200, 240, );
//using text to convey shapes instead of sticking to the normal shapes as per references on p5js

textAlign(CENTER);
textSize(65);
text('*', 170, 350,  );
//using text to convey shapes instead of sticking to the normal shapes as per references on p5js
}


