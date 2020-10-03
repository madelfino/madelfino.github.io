function setup() {
  angleMode(DEGREES);
  createCanvas(600, 600);
  player.setup();
}

function draw() {
  background(220);
  fill(255);
  circle(width/2, height/2, width);
  fill(220);
  circle(width/2, height/2, width - player.size * 2);

  player.update();
  player.draw();
}
