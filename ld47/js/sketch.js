p1 = new Player();
p2 = new Player();

function setup() {
  angleMode(DEGREES);
  createCanvas(600, 600);
  p1.setup({
    up: UP_ARROW,
    down: DOWN_ARROW,
    left: LEFT_ARROW,
    right: RIGHT_ARROW,
    laser: ENTER
  });
  p2.setup({
    up: 87, //W
    down: 83, //S
    left: 65, //A
    right: 68, //D
    laser: 32 //SPACE_BAR
  });
  p2.bodyColor = color(200, 0, 0);
  p2.theta = 0;
}

function draw() {
  bgColor = color(220);
  background(bgColor);
  noStroke();
  fill(255);
  circle(width/2, height/2, width);
  fill(bgColor);
  circle(width/2, height/2, width - p1.size * 2);

  p1.update();
  p2.update();

  p1.draw();
  p2.draw();
}
