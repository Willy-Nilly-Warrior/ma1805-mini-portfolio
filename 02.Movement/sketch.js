let i = 0;

function setup() {
  createCanvas(1000, 1000)
}

function draw() {
  background(0);

  textSize(60);    // Black Live Matters Text 
    fill('yellow');
    text('They are always Overshadowed', 100, 400);
    fill('cornflowerblue');
    text('They are always Overshadowed', 100, 550);
    fill('tomato');
    text('They are always Overshadowed', 100, 700);
    fill('limegreen');
    text('They are always Overshadowed', 100, 850);

   //Shadow --> Symbolic for the reason that People of Colour can't seem to be the main point of discussion, they are alawys "Overshadowed"
   fill(220)
    ellipse(545, 850, i, 50);

  //Base of Hand Emoji
  fill(84, 50, 0);
  rect(400, 400, 280, 370, 50, 50, 200, 200);
  strokeWeight(5);
  stroke(220);

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


  //Incremental increase
  i = i+1;
}
