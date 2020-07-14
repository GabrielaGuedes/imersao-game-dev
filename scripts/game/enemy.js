const DEFAULT_SPEED = 10;
class Enemy extends Animation {
  constructor(imageConfigs, x) {
    super(imageConfigs, x);

    this.speed = DEFAULT_SPEED;
  }

  draw() {
    this.show();
    this.move();
  }

  move() {
    this.x -= this.speed;
  }

  appear() {
    this.x = width;
  }

  hasCrossedScreen() {
    return this.x < -this.width;
  }
}
