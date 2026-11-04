let img;

function preload() {
  img = loadImage('BLMClenchedFist.png');
}

function setup() {
  createCanvas(1000, 1000, WEBGL);
}

function draw() {
  background(0);
  noStroke(); // --> Prevents werid lines from appearing

  rotateY(frameCount * 0.03);   // spin around the vertical axis at a speed of 0.03

  texture(img);

  // Front face
  translate(0, 0, 1);
  plane(400, 400);

  // Back face (turned around so the image isn't mirrored)
  rotateY(PI); //--> Rotates the image by 180
  translate(0, 0, 1);
  plane(400, 400);
}