class EnemyManager {
  constructor(playersRef) {
    this.spawnRate = 100;
    this.enemies = [];
    this.timer = 0;
    this.players = playersRef;
    this.gameOver = false;
  }

  spawnEnemy() {
    let distToCenter = random(0, height / 2 - 50);
    let theta = random(0, 360);
    let x = width / 2 + distToCenter * cos(theta);
    let y = width / 2 + distToCenter * sin(theta);
    let typeSeed = random(100);
    let type = "O";
    if (typeSeed > 50) {
      type = "A";
    }
    if (typeSeed > 70) {
      type = "B";
    }
    if (typeSeed > 90) {
      type = "AB";
    }

    this.enemies.push(new Enemy(x, y, type));
  }

  update() {
    this.timer++;
    if (this.timer > this.spawnRate) {
      this.timer = 0;
      this.spawnEnemy();
    }
    let p1 = this.players[0], p2 = this.players[1];
    for (let i=this.enemies.length-1; i>= 0; i--) {
      this.enemies[i].update();
      let en = this.enemies[i];
      if ((p1.isShooting && (en.type == "A" || en.type == "O") &&
          CollisionDetection.segmentCircleCollision(p1.x1, p1.y1, p1.x2, p1.y2, en.x, en.y, en.size/2))
          || (p2.isShooting && (en.type == "B" || en.type == "O") &&
          CollisionDetection.segmentCircleCollision(p2.x1, p2.y1, p2.x2, p2.y2, en.x, en.y, en.size/2))
          || (p1.isShooting && p2.isShooting && en.type == "AB" &&
          CollisionDetection.segmentCircleCollision(p1.x1, p1.y1, p1.x2, p1.y2, en.x, en.y, en.size/2) &&
          CollisionDetection.segmentCircleCollision(p2.x1, p2.y1, p2.x2, p2.y2, en.x, en.y, en.size/2))
        ) {
            score += 10;
            if (en.type != "O") {
              score += 40;
            }
            if (en.type == "AB") {
              score += 50;
            }
            this.enemies[i].color = color(0);
            this.enemies[i].growthRate = -0.5;
      }
      if (!en.alive) {
        this.enemies.splice(i, 1);
      } else if (en.tooBig()) {
        this.gameOver = true;
      }
    }
  }

  draw() {
    for (let i=0; i<this.enemies.length; i++) {
      this.enemies[i].draw();
    }
  }
}
