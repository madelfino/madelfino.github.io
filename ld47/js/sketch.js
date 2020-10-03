function setup() {
  angleMode(DEGREES);
  createCanvas(600, 600);
  player.setup();
}

function draw() {
  bgColor = color(220);
  background(bgColor);
  noStroke();
  fill(255);
  circle(width/2, height/2, width);
  fill(bgColor);
  circle(width/2, height/2, width - player.size * 2);

  player.update();
  player.draw();
}
