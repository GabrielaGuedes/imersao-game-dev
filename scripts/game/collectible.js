class Collectible extends Animation {
  constructor(imageConfigs, x) {
    super(imageConfigs, x, Math.floor(Math.random() * 300));

    this.speed = GAME_CONSTANTS.scenarioSpeed;
  }

  draw() {
    this.show();
    this.move();
  }

  move() {
    this.x -= this.speed;

    if (this.x < -this.width) {
      this.x = width;
    }
  }
}
