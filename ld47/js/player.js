let player = {
  x: 0, y: 0, theta: 90, r:0,
  size:30, speed: 2,
  charge: 0.0, maxCharge: 100.0, chargeRate: 1.0,
  depleteRate: 2, isShooting: false,
  bodyColor: 0, chargeColor: 0, fullChargeColor: 0,
  setup: function() {
    this.r = width / 2 - this.size / 2;
    this.bodyColor = color(0, 0, 200);
    this.chargeColor = color(0, 200, 0);
    this.fullChargeColor = color(222, 222, 0);
  },
  update: function() {
    this.charge += this.chargeRate;
    if (this.charge >= this.maxCharge) {
      this.charge = this.maxCharge;
      this.chargeColor = this.fullChargeColor;
    } else {
      this.chargeColor = color(0, 200, 0);
    }
    this.x = width / 2 + cos(this.theta) * this.r;
    this.y = height / 2 + sin(this.theta) * this.r;
    if (keyIsDown(LEFT_ARROW)) {
      player.theta += player.speed;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      player.theta -= player.speed;
    }
    if (keyIsDown(ENTER) && (this.charge == this.maxCharge || (this.isShooting && this.charge > 0))) {
      this.isShooting = true;
      this.charge -= this.depleteRate;

    } else {
      this.isShooting = false;
    }
  },
  draw: function() {
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
  },
};
