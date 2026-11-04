function setup() {
  createCanvas(1000, 1000);
}



function draw() {
  background(220);

  //Base of Hand Emoji
  fill(84, 50, 0);
  rect(400, 400, 280, 370, 50, 50, 200, 200);
  strokeWeight(5);
  stroke(255);

  //Fingers & Nails
  fill(84, 50, 0);
  rect(400, 400, 70, 200, 0, 0, 90, 90);
    fill(252, 232, 202);
    rect(410, 550, 50, 40, 0, 0, 90, 90);

  fill(84, 50, 0);
  rect(470, 400, 70, 200, 0, 0, 90, 90);
    fill(252, 232, 202);
    rect(480, 550, 50, 40, 0, 0, 90, 90);

  fill(84, 50, 0);
  rect(540, 400, 70, 200, 0, 0, 90, 90);
    fill(252, 232, 202);
    rect(550, 550, 50, 40, 0, 0, 90, 90);

  fill(84, 50, 0);
  rect(610, 400, 70, 200, 0, 0, 90, 90);
    fill(252, 232, 202);
    rect(620, 550, 50, 40, 0, 0, 90, 90);

  //Thumb
  rotate(QUARTER_PI) //<-- Rotates the shape by 1/8 turn.
  fill(84, 50, 0);
  rect(850, -100, 70, 200, 20, 20, 90, 90);
     fill(252, 232, 202);
    rect(860, 50, 50, 40, 0, 0, 90, 90);
  

}
