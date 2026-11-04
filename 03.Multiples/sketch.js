let i = 0;

const BLMText = "Ally Anti-blackness Anti-racism Black-Lives-Matter Racial-Gaslighting Microaggressions Microinvalidations Unconscious-Bias White-Fragility White-Privilege";
const textArray = BLMText.split(" "); // Converts the Text into array lists of words.

function setup() {
  createCanvas(1000, 1000);
  frameRate(1); //Sketch Speed, I turned it it to 1 because for some reason the words aren't staying on the page, so now viewers can take time to read the words
}

function draw() {
  background(255);

 //Background BLM-Related Text
  let x = random(width)
  let y = random(height);

  if (i < textArray.length) {

    fill(0, 255, 237);
    stroke(1);
    console.log(i);
    textSize(30);
    textAlign(CENTER, CENTER);
    text(textArray[i], x, y);
    i++;
  }else{
    i=0; // Resets the counter
    background(255); // Clears the Background

  }

  //Base of Hand Emoji for the Held Fist Emoji
  fill(84, 50, 0);
  rect(400, 400, 280, 370, 50, 50, 200, 200);
  strokeWeight(5);
  stroke(200);

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