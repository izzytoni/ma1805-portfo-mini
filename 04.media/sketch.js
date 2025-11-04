let vid1, vid2, vid3, vid4, vid5;




function setup() {
    createCanvas(550, 800);


    vid1 = createVideo(['maud_attack.mp4']);
    vid1.size(400, 400);
    vid1.hide();
    vid1.volume(0);

     vid2 = createVideo(['maud_revelation.mp4']);
    vid2.size(400, 400);
    vid2.hide();
    vid2.volume(0);

     vid3 = createVideo(['maud_amber_1.mp4']);
    vid3.size(400, 400);
    vid3.hide();
    vid3.volume(0);

     vid4 = createVideo(['maud_sleep.mp4']);
    vid4.size(400, 400);
    vid4.hide();
    vid4.volume(0);

     vid5 = createVideo(['maud_pepper.mp4']);
    vid5.size(400, 400);
    vid5.hide();
    vid5.volume(0);


}

function draw() {
    background(178, 172, 136);

    //button!
    if (mouseIsPressed) {
        text("CLICK TO PLAY", width / 2, height / 2);
    }else{

    
    image(vid1, 20, 12, 230, 280);
    image(vid2, 280, 5, 260, 400);
    image(vid3, 10, 295, 250, 320);
    image(vid4, 270, 410, 270, 356);
    image(vid5, 10, 620, 256, 170);

    }
}

function mousePressed() {
    vid1.loop();
    vid2.loop();
    vid3.loop();
    vid4.loop();
    vid5.loop();
}


//the 5 stages of puppydog. 
//1. Attack! She is fearless and indimidating. BOO!
//2. CAUTION!! What is an AT-AT? Is it friend...?
//3. Relentless! She is getting tired of slow walkers...
//4. Naptime. A long day of playing, she needs her beauty sleep.
//5. Snack time!! What is this peculiar treat?