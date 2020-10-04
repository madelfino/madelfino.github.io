class Enemy {
  constructor(x, y, type) {
    this.alive = true;
    this.x = x;
    this.y = y;
    this.size = 1;
    this.growthRate = 0.1;
    this.type = type;
    this.color = color(100);
    if (type == "A") {
      this.color = color(0, 0, 200);
    } else if (type == "B") {
      this.color = color(200, 0, 0);
    } else if (type == "AB") {
      this.color = color(200, 0, 200);
    }

  }

  update() {
    this.size += this.growthRate;
    if (this.size < 1) {
      this.alive = false;
    }
  }

  draw() {
    noStroke();
    fill(this.color);
    circle(this.x, this.y, this.size);
  }

  tooBig() {
    let r = this.size / 2;
    return (
      this.x + r > width ||
      this.x - r < 0 ||
      this.y + r > height ||
      this.y - r < 0
    );
  }
}
