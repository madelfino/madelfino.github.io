let player = {
  x: 0, y: 0, theta: 90, r:0,
  size:30, speed: 2,
  setup: function() {
    //this.x = width / 2;
    //this.y = height - this.size / 2;
    this.r = width / 2 - this.size / 2;
  },
  update: function() {
    this.x = width / 2 + cos(this.theta) * this.r;
    this.y = height / 2 + sin(this.theta) * this.r;
    if (keyIsDown(LEFT_ARROW)) {
      player.theta += player.speed;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      player.theta -= player.speed;
    }
  },
  draw: function() {
    noStroke();
    fill(0, 0, 200);
    circle(this.x, this.y, this.size);
  },
};
