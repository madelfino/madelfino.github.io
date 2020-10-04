let p1 = new Player();
let p2 = new Player();
let enemyManager = new EnemyManager([p1, p2]);
let score = 0;

function setup() {
  angleMode(DEGREES);
  createCanvas(600, 600);
  p1.setup({
    up: 65, //UP_ARROW,
    down: 68, //DOWN_ARROW,
    left: LEFT_ARROW,
    right: RIGHT_ARROW,
    laser: ENTER,
    rotate: true,
    scale: false
  });
  p2.setup({
    up: 87, //W
    down: 83, //S
    left: UP_ARROW, //65, //A
    right: DOWN_ARROW, //68, //D
    laser: 32, //SPACE_BAR
    rotate: false,
    scale: true
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

  if (enemyManager.gameOver) {
    background(0);
    textSize(24);
    fill(255);
    text("LOOP CONTAINMENT FAILED", 100, 200);
    text("Final Score: " + floor(score), 100, 300);
  } else {
    score += 0.1;
    fill(20);
    text(floor(score), 10, 10);
    p1.update();
    p2.update();
    enemyManager.update();

    enemyManager.draw();
    p1.draw();
    p2.draw();
  }
}
