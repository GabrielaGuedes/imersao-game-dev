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

  setSpeed(speed) {
    this.speed = speed;
  }

  hasCrossedScreen() {
    return this.x < -this.width;
  }
}
