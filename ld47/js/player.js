class Player {
  constructor() {
    this.x = 0, this.y = 0;
    this.theta = 90, this.gamma: 0, this.r = 0;
    this.size = 30, this.speed = 2;
    this.charge = 0.0, this.maxCharge = 100.0, this.chargeRate = 0.7;
    this.depleteRate = 3, this.isShooting = false;
    this.bodyColor = 0, this.chargeColor = 0, this.fullChargeColor = 0;
  }

  setup(info) {
    this.upKey = info.up;
    this.downKey = info.down;
    this.leftKey = info.left;
    this.rightKey = info.right;
    this.laserKey = info.laser;
    this.bodyColor = color(0, 0, 200);
    this.chargeColor = color(0, 200, 0);
    this.fullChargeColor = color(222, 222, 0);
    this.r = width / 2 - this.size / 2;
  }

  update() {
    this.charge += this.chargeRate;
    if (this.charge >= this.maxCharge) {
      this.charge = this.maxCharge;
      this.chargeColor = this.fullChargeColor;
    } else {
      this.chargeColor = color(0, 200, 0);
    }
    this.x = width / 2 + cos(this.theta) * this.r;
    this.y = height / 2 + sin(this.theta) * this.r;
    if (keyIsDown(this.leftKey)) {
      this.theta += this.speed;
    }
    if (keyIsDown(this.rightKey)) {
      this.theta -= this.speed;
    }
    if (keyIsDown(this.laserKey) && (this.charge == this.maxCharge || (this.isShooting && this.charge > 0))) {
      this.isShooting = true;
      this.charge -= this.depleteRate;

    } else {
      if (this.isShooting) {
        this.charge -= this.maxCharge / 2;
        if (this.charge < 0) {
          this.charge = 0;
        }
      }
      this.isShooting = false;
    }
  }

  draw() {
    noStroke();
    fill(this.bodyColor);
    circle(this.x, this.y, this.size);
    fill(this.chargeColor);
    circle(this.x, this.y, 1 + this.size * (this.charge/this.maxCharge));
    noFill();
    strokeWeight(2);
    stroke(this.chargeColor);
    circle(width - this.x, height - this.y, this.size);
    if (this.isShooting) {
      strokeWeight(this.size * (this.charge / this.maxCharge) + 2);
      stroke(this.fullChargeColor);
      line(this.x, this.y, width - this.x, height - this.y);
    }
  }
}
